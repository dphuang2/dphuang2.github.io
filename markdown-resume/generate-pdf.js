const puppeteer = require("puppeteer");

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${process.cwd()}/resume.html`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: "resume.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: "1cm",
      right: "2cm",
      bottom: "2cm",
      left: "1cm",
    },
  });
  await browser.close();
}

generatePDF();
