import { z } from 'zod'
import { languageColors } from '@utils'

const RepoSchema = z.object({
    full_name: z.string(),
    homepage: z.nullable(z.string()),
    topics: z.array(z.string()),
    description: z.nullable(z.string()),
    // these are ment to be constructed after fetch
    readme_raw_url: z.string().optional(),
    languages: z
        .array(
            z.object({ name: z.string(), color: z.string(), bytes: z.number() })
        )
        .optional(),
    last_commit: z
        .object({
            date: z.string(),
            message: z.string(),
            sha: z.string(),
            url: z.string(),
        })
        .optional(),
})
const RepoLanguages = RepoSchema.pick({ languages: true }).required()
const LastCommit = RepoSchema.pick({ last_commit: true }).required()
export type Repo = z.infer<typeof RepoSchema>

const fetchRepos = async (): Promise<Repo[]> => {
    const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN
    const repos = await fetch('https://api.github.com/users/ruvasqm/repos', {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `Bearer ${GITHUB_API_TOKEN}`,
        },
    }).then(async (res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch repos')
        }
        const rawRepos = (await res.json()) as any[]
        const parsedRepos = rawRepos.map((repo) => {
            const result = RepoSchema.safeParse(repo)
            if (!result.success) {
                throw new Error(`Failed to parse repo: ${result.error}`)
            }
            return result.data
        })
        const repos = parsedRepos.map(async (repo: Repo) => {
            const languages = await fetch(
                `https://api.github.com/repos/${repo.full_name}/languages`,
                {
                    headers: {
                        Accept: 'application/vnd.github.v3+json',
                        Authorization: `Bearer ${GITHUB_API_TOKEN}`,
                    },
                }
            ).then(async (res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch languages')
                }
                const languages = await res.json()
                const result = RepoLanguages.safeParse({
                    languages:
                        Object.entries(languages).map(([name, bytes]) => ({
                            name: z.string().parse(name),
                            bytes: z.number().parse(bytes),
                            color: z
                                .string()
                                .parse(
                                    languageColors[name.toLowerCase()].color ||
                                        '#000000'
                                ),
                        })) || [],
                })
                if (!result.success) {
                    throw new Error(
                        `Failed to parse languages: ${result.error}`
                    )
                }
                return result.data.languages
            })
            const last_commit = await fetch(
                `https://api.github.com/repos/${repo.full_name}/commits`,
                {
                    headers: {
                        Accept: 'application/vnd.github.v3+json',
                        Authorization: `Bearer ${GITHUB_API_TOKEN}`,
                    },
                }
            ).then(async (res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch last commit')
                }
                const commits = await res.json()
                const result = LastCommit.safeParse({
                    last_commit: {
                        date: z.string().parse(commits[0].commit.author.date),
                        message: z.string().parse(commits[0].commit.message),
                        sha: z.string().parse(commits[0].sha),
                        url: z.string().parse(commits[0].html_url),
                    },
                })
                if (!result.success) {
                    throw new Error(
                        `Failed to parse last commit: ${result.error}`
                    )
                }
                return result.data.last_commit
            })
            return {
                ...repo,
                readme_raw_url: `https://raw.githubusercontent.com/${repo.full_name}/master/README.md`,
                languages,
                last_commit,
            }
        })
        return Promise.all(repos)
    })
    return repos
}

export default fetchRepos
