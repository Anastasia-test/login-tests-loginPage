const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const loginCustomTest = require("./tests/loginCustomTest");

const reportDir = path.join(__dirname, "reports");

async function generatePdfReport(results) {
    if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

    const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
    let template = fs.readFileSync(templatePath, "utf8");

    const rows = results.map(r => `
        <tr>
            <td>${r.test}</td>
            <td class="${r.status}">${r.status}</td>
            <td>${r.error || ""}</td>
        </tr>
    `).join("");

    const finalHtml = template.replace("{{rows}}", rows);
    const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

    // ✅ ВОТ ТУТ ГЛАВНОЕ ИСПРАВЛЕНИЕ
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(finalHtml, { waitUntil: "networkidle0" });
    await page.pdf({ path: pdfPath, format: "A4" });
    await browser.close();

    console.log(`📄 PDF report saved: ${pdfPath}`);
}

async function runTest(name, fn) {
    const result = { test: name, status: "", error: null };
    try {
        await fn();
        result.status = "passed";
    } catch (err) {
        result.status = "failed";
        result.error = err.message;
    }
    return result;
}

(async () => {
    console.log("\n=== Running all tests ===\n");

    const results = [];

    const sites = [
        { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
        { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
        { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
        { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
        { url: "https://www.visahq.sa/en-sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
        { url: "https://www.visahq.in/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" }
    ];

    for (const site of sites) {
        results.push(await runTest(`Login ${site.url}`, async () => {
            await loginCustomTest(site.url, site.email, site.password);
        }));
    }

    await generatePdfReport(results);

    console.log("\n=== All tests finished ===\n");
})();
