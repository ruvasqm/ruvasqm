const puppeteer = require('puppeteer-core')
const fs = require('fs').promises
const os = require('os')
const path = require('path')

async function createPDF(url, args = {}) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: {
                deviceScaleFactor: 1,
                hasTouch: false,
                height: 1080,
                isLandscape: true,
                isMobile: false,
                width: 1920,
            },
            ...args,
        })
        const page = await browser.newPage()
        await page.goto(url, { timeout: 10000, waitUntil: 'networkidle0' })
        const pdf = await page.pdf({
            format: 'a4',
            displayHeaderFooter: false,
            printBackground: true,
        })
        await browser.close()
        return pdf
    } catch (err) {
        console.log(err)
    }
}

function getChromePath() {
    let browserPath

    if (os.type() === 'Windows_NT') {
        // Chrome is usually installed as a 32-bit application, on 64-bit systems it will have a different installation path.
        const programFiles =
            os.arch() === 'x64'
                ? process.env['PROGRAMFILES(X86)']
                : process.env.PROGRAMFILES
        browserPath = path.join(
            programFiles,
            'Google/Chrome/Application/chrome.exe'
        )
    } else if (os.type() === 'Linux') {
        browserPath = '/usr/bin/google-chrome'
    } else if (os.type() === 'Darwin') {
        browserPath =
            '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    }

    if (browserPath && browserPath.length > 0) {
        return path.normalize(browserPath)
    }

    throw new TypeError(`Cannot run action. ${os.type} is not supported.`)
}
async function run() {
    try {
        let args = process.argv.slice(2)
        if (args.length < 1) {
            throw new Error('Please provide an url and a path')
        }
        const url = args[0]
        const outputFilePath = args[1] || 'output.pdf'
        const chromePath = getChromePath()
        console.log('Creating PDF...')
        const pdf = await createPDF(url, {
            executablePath: chromePath,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        })
        await fs.writeFile(outputFilePath, pdf)
        console.log('PDF created successfully')
    } catch (err) {
        console.log(err)
    }
}

module.exports = run

/* istanbul ignore next */
if (require.main === module) {
    run()
}
