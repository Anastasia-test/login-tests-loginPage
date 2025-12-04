// // // // // // const fs = require("fs");
// // // // // // const path = require("path");
// // // // // // const puppeteer = require("puppeteer");

// // // // // // // Один тест
// // // // // // const loginTest = require("./tests/loginTest");

// // // // // // // Папка для отчётов
// // // // // // const reportDir = path.join(__dirname, "reports");

// // // // // // // Генерация PDF-отчёта
// // // // // // async function generatePdfReport(results) {
// // // // // //     if (!fs.existsSync(reportDir)) {
// // // // // //         fs.mkdirSync(reportDir);
// // // // // //     }

// // // // // //     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
// // // // // //     let template = fs.readFileSync(templatePath, "utf8");

// // // // // //     const rows = results.map(r => `
// // // // // //         <tr>
// // // // // //             <td>${r.test}</td>
// // // // // //             <td class="${r.status}">${r.status}</td>
// // // // // //             <td>${r.error || ""}</td>
// // // // // //         </tr>
// // // // // //     `).join("");

// // // // // //     const finalHtml = template.replace("{{rows}}", rows);

// // // // // //     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

// // // // // //     const browser = await puppeteer.launch();
// // // // // //     const page = await browser.newPage();
// // // // // //     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
// // // // // //     await page.pdf({ path: pdfPath, format: "A4" });
// // // // // //     await browser.close();

// // // // // //     console.log(`📄 PDF report saved: ${pdfPath}`);
// // // // // // }

// // // // // // // Обёртка теста для отчёта
// // // // // // async function run(name, fn) {
// // // // // //     const result = { test: name, status: "", error: null };

// // // // // //     try {
// // // // // //         await fn();
// // // // // //         result.status = "passed";
// // // // // //     } catch (err) {
// // // // // //         result.status = "failed";
// // // // // //         result.error = err.message;
// // // // // //     }

// // // // // //     return result;
// // // // // // }

// // // // // // // ========= MAIN ==========
// // // // // // (async () => {
// // // // // //     console.log("\n=== Running all tests ===\n");

// // // // // //     const results = [];

// // // // // //     // Твой вариант запуска теста
// // // // // //     results.push(await run("Login Test", loginTest));

// // // // // //     await generatePdfReport(results);
// // // // // // })();

// // // // // const fs = require("fs");
// // // // // const path = require("path");
// // // // // const puppeteer = require("puppeteer");

// // // // // // Подключаем тесты
// // // // // const loginTest = require("./tests/loginTest");
// // // // // const loginUKTest = require("./tests/loginUKTest");

// // // // // const reportDir = path.join(__dirname, "reports");

// // // // // async function generatePdfReport(results) {
// // // // //     if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

// // // // //     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
// // // // //     let template = fs.readFileSync(templatePath, "utf8");

// // // // //     const rows = results.map(r => `
// // // // //         <tr>
// // // // //             <td>${r.test}</td>
// // // // //             <td class="${r.status}">${r.status}</td>
// // // // //             <td>${r.error || ""}</td>
// // // // //         </tr>
// // // // //     `).join("");

// // // // //     const finalHtml = template.replace("{{rows}}", rows);
// // // // //     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

// // // // //     const browser = await puppeteer.launch();
// // // // //     const page = await browser.newPage();
// // // // //     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
// // // // //     await page.pdf({ path: pdfPath, format: "A4" });
// // // // //     await browser.close();

// // // // //     console.log(`📄 PDF report saved: ${pdfPath}`);
// // // // // }

// // // // // async function run(name, fn) {
// // // // //     const result = { test: name, status: "", error: null };
// // // // //     try {
// // // // //         await fn();
// // // // //         result.status = "passed";
// // // // //     } catch (err) {
// // // // //         result.status = "failed";
// // // // //         result.error = err.message;
// // // // //     }
// // // // //     return result;
// // // // // }

// // // // // // ========= MAIN ==========
// // // // // (async () => {
// // // // //     console.log("\n=== Running all tests ===\n");

// // // // //     const results = [];

// // // // //     results.push(await run("Login .com", loginTest));
// // // // //     results.push(await run("Login .co.uk", loginUKTest));

// // // // //     await generatePdfReport(results);
// // // // // })();

// // // // const fs = require("fs");
// // // // const path = require("path");
// // // // const puppeteer = require("puppeteer");

// // // // // Подключаем универсальный тест
// // // // const loginCustomTest = require("./tests/loginCustomTest");

// // // // const reportDir = path.join(__dirname, "reports");

// // // // async function generatePdfReport(results) {
// // // //     if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

// // // //     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
// // // //     let template = fs.readFileSync(templatePath, "utf8");

// // // //     const rows = results.map(r => `
// // // //         <tr>
// // // //             <td>${r.test}</td>
// // // //             <td class="${r.status}">${r.status}</td>
// // // //             <td>${r.error || ""}</td>
// // // //         </tr>
// // // //     `).join("");

// // // //     const finalHtml = template.replace("{{rows}}", rows);
// // // //     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

// // // //     const browser = await puppeteer.launch();
// // // //     const page = await browser.newPage();
// // // //     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
// // // //     await page.pdf({ path: pdfPath, format: "A4" });
// // // //     await browser.close();

// // // //     console.log(`📄 PDF report saved: ${pdfPath}`);
// // // // }

// // // // async function run(name, fn) {
// // // //     const result = { test: name, status: "", error: null };
// // // //     try {
// // // //         await fn();
// // // //         result.status = "passed";
// // // //     } catch (err) {
// // // //         result.status = "failed";
// // // //         result.error = err.message;
// // // //     }
// // // //     return result;
// // // // }

// // // // // ========= MAIN ==========
// // // // (async () => {
// // // //     console.log("\n=== Running all tests ===\n");

// // // //     const results = [];

// // // //     // Список сайтов и учеток
// // // //     const sites = [
// // // //         { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
// // // //         { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
// // // //         { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
// // // //         { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
// // // //         { url: "https://www.visahq.in/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" }
// // // //     ];

// // // //     for (const site of sites) {
// // // //         results.push(await run(`Login ${site.url}`, async () => {
// // // //             await loginCustomTest(site.url, site.email, site.password);
// // // //         }));
// // // //     }

// // // //     await generatePdfReport(results);
// // // // })();


// // // const fs = require("fs");
// // // const path = require("path");
// // // const puppeteer = require("puppeteer");

// // // const loginCustomTest = require("./tests/loginCustomTest");

// // // const reportDir = path.join(__dirname, "reports");

// // // async function generatePdfReport(results) {
// // //     if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

// // //     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
// // //     let template = fs.readFileSync(templatePath, "utf8");

// // //     const rows = results.map(r => `
// // //         <tr>
// // //             <td>${r.test}</td>
// // //             <td class="${r.status}">${r.status}</td>
// // //             <td>${r.error || ""}</td>
// // //         </tr>
// // //     `).join("");

// // //     const finalHtml = template.replace("{{rows}}", rows);
// // //     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

// // //     const browser = await puppeteer.launch();
// // //     const page = await browser.newPage();
// // //     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
// // //     await page.pdf({ path: pdfPath, format: "A4" });
// // //     await browser.close();

// // //     console.log(`📄 PDF report saved: ${pdfPath}`);
// // // }

// // // async function run(name, fn) {
// // //     const result = { test: name, status: "", error: null };
// // //     try {
// // //         await fn();
// // //         result.status = "passed";
// // //     } catch (err) {
// // //         result.status = "failed";
// // //         result.error = err.message;
// // //     }
// // //     return result;
// // // }

// // // // ===== MAIN =====
// // // (async () => {
// // //     console.log("\n=== Running all tests ===\n");

// // //     const results = [];

// // //     const sites = [
// // //         { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
// // //         { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
// // //         { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
// // //         { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
// // //         { url: "https://www.visahq.sa/en-sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405", lang: "en" },
// // //         { url: "https://www.visahq.in/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" }
// // //     ];

// // //     for (const site of sites) {
// // //         results.push(await run(`Login ${site.url}`, async () => {
// // //             await loginCustomTest(site.url, site.email, site.password, site.lang);
// // //         }));
// // //     }

// // //     await generatePdfReport(results);
// // // })();


// // const fs = require("fs");
// // const path = require("path");
// // const puppeteer = require("puppeteer");
// // const loginCustomTest = require("./tests/loginCustomTest");

// // const reportDir = path.join(__dirname, "reports");

// // async function generatePdfReport(results) {
// //     if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

// //     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
// //     let template = fs.readFileSync(templatePath, "utf8");

// //     const rows = results.map(r => `
// //         <tr>
// //             <td>${r.test}</td>
// //             <td class="${r.status}">${r.status}</td>
// //             <td>${r.error || ""}</td>
// //         </tr>
// //     `).join("");

// //     const finalHtml = template.replace("{{rows}}", rows);
// //     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

// //     const browser = await puppeteer.launch();
// //     const page = await browser.newPage();
// //     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
// //     await page.pdf({ path: pdfPath, format: "A4" });
// //     await browser.close();

// //     console.log(`📄 PDF report saved: ${pdfPath}`);
// // }

// // async function run(name, fn) {
// //     const result = { test: name, status: "", error: null };
// //     try {
// //         await fn();
// //         result.status = "passed";
// //     } catch (err) {
// //         result.status = "failed";
// //         result.error = err.message;
// //     }
// //     return result;
// // }

// // // ===== MAIN =====
// // (async () => {
// //     console.log("\n=== Running all tests ===\n");

// //     const results = [];

// //     const sites = [
// //         { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
// //         { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
// //         { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
// //         { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
// //         { url: "https://www.visahq.sa/en-sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405", lang: "en" },
// //         { url: "https://www.visahq.in/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" }
// //     ];

// //     for (const site of sites) {
// //         results.push(await run(`Login ${site.url}`, async () => {
// //             await loginCustomTest(site.url, site.email, site.password, site.lang);
// //         }));
// //     }

// //     await generatePdfReport(results);
// // })();


// const loginCustomTest = require("./tests/loginCustomTest");

// (async () => {
//     console.log("\n=== Running all tests ===\n");

//     const sites = [
//         { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.sa/en-sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.in/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" }
//     ];

//     for (const site of sites) {
//         try {
//             await loginCustomTest(site.url, site.email, site.password);
//         } catch (err) {
//             console.log("⚠ Test failed, продолжаем к следующему сайту.");
//         }
//     }

//     console.log("\n=== All tests finished ===\n");
// })();

// const fs = require("fs");
// const path = require("path");
// const puppeteer = require("puppeteer");
// const loginCustomTest = require("./tests/loginCustomTest");

// const reportDir = path.join(__dirname, "reports");

// async function generatePdfReport(results) {
//     if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

//     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
//     let template = fs.readFileSync(templatePath, "utf8");

//     const rows = results.map(r => `
//         <tr>
//             <td>${r.test}</td>
//             <td class="${r.status}">${r.status}</td>
//             <td>${r.error || ""}</td>
//         </tr>
//     `).join("");

//     const finalHtml = template.replace("{{rows}}", rows);
//     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
//     await page.pdf({ path: pdfPath, format: "A4" });
//     await browser.close();

//     console.log(`📄 PDF report saved: ${pdfPath}`);
// }

// async function runTest(name, fn) {
//     const result = { test: name, status: "", error: null };
//     try {
//         await fn();
//         result.status = "passed";
//     } catch (err) {
//         result.status = "failed";
//         result.error = err.message;
//     }
//     return result;
// }

// (async () => {
//     console.log("\n=== Running all tests ===\n");

//     const results = [];

//     const sites = [
//         { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.sa/en-sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.in/", email: "tary.test+srlin@gmail.com", password: "Qwerty0405" }
//     ];

//     for (const site of sites) {
//         results.push(await runTest(`Login ${site.url}`, async () => {
//             await loginCustomTest(site.url, site.email, site.password);
//         }));
//     }

//     await generatePdfReport(results);

//     console.log("\n=== All tests finished ===\n");
// })();


// const fs = require("fs");
// const path = require("path");
// const puppeteer = require("puppeteer");
// const loginCustomTest = require("./tests/loginCustomTest");

// const reportDir = path.join(__dirname, "reports");

// async function generatePdfReport(results) {
//     if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

//     const templatePath = path.join(__dirname, "templates", "reportTemplate.html");
//     let template = fs.readFileSync(templatePath, "utf8");

//     const rows = results.map(r => `
//         <tr>
//             <td>${r.test}</td>
//             <td class="${r.status}">${r.status}</td>
//             <td>${r.error || ""}</td>
//         </tr>
//     `).join("");

//     const finalHtml = template.replace("{{rows}}", rows);
//     const pdfPath = path.join(reportDir, `report_${Date.now()}.pdf`);

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(finalHtml, { waitUntil: "networkidle0" });
//     await page.pdf({ path: pdfPath, format: "A4" });
//     await browser.close();

//     console.log(`📄 PDF report saved: ${pdfPath}`);
// }

// async function runTest(name, fn) {
//     const result = { test: name, status: "", error: null };
//     try {
//         await fn();
//         result.status = "passed";
//     } catch (err) {
//         result.status = "failed";
//         result.error = err.message;
//     }
//     return result;
// }

// (async () => {
//     console.log("\n=== Running all tests ===\n");

//     const results = [];

//     const sites = [
//         { url: "https://www.visahq.com/", email: "tary.test+selus@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.co.uk/", email: "tary.test+gbsel@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.ca/", email: "tary.test+selca@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.sa/en-sa/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" },
//         { url: "https://www.visahq.in/", email: "tary.test+selsa@gmail.com", password: "Qwerty0405" }
//     ];

//     for (const site of sites) {
//         results.push(await runTest(`Login ${site.url}`, async () => {
//             await loginCustomTest(site.url, site.email, site.password);
//         }));
//     }

//     await generatePdfReport(results);

//     console.log("\n=== All tests finished ===\n");
// })();


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

    const browser = await puppeteer.launch();
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
