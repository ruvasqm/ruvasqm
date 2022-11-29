import { useState, useEffect } from 'react'
import { micromark } from 'micromark'
import { gfm, gfmHtml } from 'micromark-extension-gfm'

function Readme({ link }: { link: string }) {
    const [readme, setReadme] = useState('')
    useEffect(() => {
        const fetchReadme = async () => {
            const res = await fetch(link)
            const text = await res.text()
            setReadme(
                micromark(text, {
                    allowDangerousHtml: true,
                    allowDangerousProtocol: true,
                    extensions: [gfm()],
                    htmlExtensions: [gfmHtml()],
                })
            )
        }
        fetchReadme()
    }, [])

    // TODO: fix this repo's readme languages and tools sections ( perphaps remove it?)
    return (
        <div className='overflow-x-hidden overflow-y-scroll rounded-xl bg-white w-1/6 h-auto aspect-[1/1.41] flex items-start justify-start p-8'>
            <div
                className='prose min-w-[50vw] block prose-img:mt-0 prose-img:mb-0 prose-img:inline-block'
                dangerouslySetInnerHTML={{ __html: readme }}
            />
        </div>
    )
}

export default Readme
