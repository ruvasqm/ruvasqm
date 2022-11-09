import { Handler } from "@netlify/functions";
import chromium from "chrome-aws-lambda";
import resume from "@resume.json";

const handler: Handler = async (event, context) => {
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  try {
    await page.goto(`${resume.basics.url}/resume`, {
      timeout: 10000,
      waitUntil: "networkidle0",
    });

    const pdf: Buffer = await page.pdf({
      format: "a4",
      displayHeaderFooter: false,
      printBackground: true,
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf",
      },
      body: JSON.stringify(pdf),
    };
  } catch (e: any) {
    console.log(`${e}`);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Internal Server Error: ", error: e }),
    };
  } finally {
    await browser.close();
  }
};

export { handler };
