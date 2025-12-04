// // // // // const { Builder } = require("selenium-webdriver");
// // // // // require("chromedriver");
// // // // // const LoginPage = require("../pages/loginPage");

// // // // // async function loginCustomTest(url, email, password) {
// // // // //     const driver = await new Builder().forBrowser("chrome").build();
// // // // //     const loginPage = new LoginPage(driver);

// // // // //     try {
// // // // //         await loginPage.open(url);
// // // // //         await loginPage.clickLoginButton();
// // // // //         await loginPage.enterEmail(email);
// // // // //         await loginPage.enterPassword(password);
// // // // //         await loginPage.submit();

// // // // //         console.log(`✔ Login test passed for ${url}`);

// // // // //     } catch (err) {
// // // // //         console.error(`❌ Login test failed for ${url}:`, err);
// // // // //         throw err; // важно для отчёта
// // // // //     } finally {
// // // // //         await driver.quit();
// // // // //     }
// // // // // }

// // // // // module.exports = loginCustomTest;


// // // // const { Builder, By, until } = require("selenium-webdriver");
// // // // require("chromedriver");

// // // // class LoginPage {
// // // //     constructor(driver) {
// // // //         this.driver = driver;
// // // //         this.loginBtn = By.css(
// // // //             "#header_main > div.header-main__body.header-main__body_popup.no_print > div.header-main__menu__user > div > div > div > span > span.vi__icon_text"
// // // //         );
// // // //         this.emailField = By.id("login");
// // // //         this.passwordField = By.id("password");
// // // //         this.submitBtn = By.id("register_login");
// // // //     }

// // // //     async open(url) {
// // // //         await this.driver.get(url);
// // // //     }

// // // //     async clickLoginButton() {
// // // //         await this.driver.wait(until.elementLocated(this.loginBtn), 10000);
// // // //         await this.driver.findElement(this.loginBtn).click();
// // // //     }

// // // //     async enterEmail(email) {
// // // //         await this.driver.wait(until.elementLocated(this.emailField), 10000);
// // // //         await this.driver.findElement(this.emailField).sendKeys(email);
// // // //     }

// // // //     async enterPassword(password) {
// // // //         await this.driver.findElement(this.passwordField).sendKeys(password);
// // // //     }

// // // //     async submit() {
// // // //         await this.driver.findElement(this.submitBtn).click();
// // // //     }

// // // //     async checkLanguage(expectedLang) {
// // // //         if (!expectedLang) return;
// // // //         const htmlTag = await this.driver.findElement(By.css("html"));
// // // //         const lang = await htmlTag.getAttribute("lang");
// // // //         if (!lang.includes(expectedLang)) {
// // // //             throw new Error(`Expected language "${expectedLang}", but found "${lang}"`);
// // // //         }
// // // //     }
// // // // }

// // // // async function loginCustomTest(url, email, password, lang) {
// // // //     const driver = await new Builder().forBrowser("chrome").build();
// // // //     const loginPage = new LoginPage(driver);

// // // //     try {
// // // //         await loginPage.open(url);
// // // //         await loginPage.clickLoginButton();
// // // //         await loginPage.enterEmail(email);
// // // //         await loginPage.enterPassword(password);
// // // //         await loginPage.submit();

// // // //         // Проверяем язык страницы, если передан
// // // //         if (lang) {
// // // //             await loginPage.checkLanguage(lang);
// // // //         }

// // // //         console.log(`✔ Login test passed for ${url}`);
// // // //     } catch (err) {
// // // //         console.error(`❌ Login test failed for ${url}:`, err.message);
// // // //         throw err;
// // // //     } finally {
// // // //         await driver.quit();
// // // //     }
// // // // }

// // // // module.exports = loginCustomTest;


// // // const { Builder } = require("selenium-webdriver");
// // // require("chromedriver");
// // // const LoginPage = require("../pages/loginPage");

// // // async function loginCustomTest(url, email, password, lang) {
// // //     const driver = await new Builder().forBrowser("chrome").build();
// // //     const loginPage = new LoginPage(driver);

// // //     try {
// // //         await loginPage.open(url);
// // //         await loginPage.clickLoginButton();
// // //         await loginPage.enterEmail(email);
// // //         await loginPage.enterPassword(password);
// // //         await loginPage.submit();

// // //         // проверка языка страницы, если указано
// // //         if (lang) {
// // //             await loginPage.checkLanguage(lang);
// // //         }

// // //         console.log(`✔ Login test passed for ${url}`);
// // //     } catch (err) {
// // //         console.error(`❌ Login test failed for ${url}:`, err.message);
// // //         throw err;
// // //     } finally {
// // //         await driver.quit();
// // //     }
// // // }

// // // module.exports = loginCustomTest;


// // const { Builder } = require("selenium-webdriver");
// // require("chromedriver");
// // const LoginPage = require("../pages/loginPage");

// // async function loginCustomTest(url, email, password) {
// //     const driver = await new Builder().forBrowser("chrome").build();
// //     const loginPage = new LoginPage(driver);

// //     try {
// //         await loginPage.open(url);
// //         await loginPage.clickLoginButton();
// //         await loginPage.enterEmail(email);
// //         await loginPage.enterPassword(password);
// //         await loginPage.submit();

// //         console.log(`✔ Login test passed for ${url}`);
// //     } catch (err) {
// //         console.error(`❌ Login test failed for ${url}: ${err.message}`);
// //         throw err;
// //     } finally {
// //         await driver.quit();
// //     }
// // }

// // module.exports = loginCustomTest;

// const { Builder } = require("selenium-webdriver");
// require("chromedriver");
// const LoginPage = require("../pages/loginPage");

// async function loginCustomTest(url, email, password) {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const loginPage = new LoginPage(driver);

//     try {
//         await loginPage.open(url);
//         await loginPage.clickLoginButton();
//         await loginPage.enterEmail(email);
//         await loginPage.enterPassword(password);
//         await loginPage.submit();

//         console.log(`✔ Login test passed for ${url}`);
//     } catch (err) {
//         console.error(`❌ Login test failed for ${url}: ${err.message}`);
//         throw err;
//     } finally {
//         await driver.quit();
//     }
// }

// module.exports = loginCustomTest;

// const { Builder } = require("selenium-webdriver");
// require("chromedriver");
// const LoginPage = require("../pages/loginPage");

// async function loginCustomTest(url, email, password) {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const loginPage = new LoginPage(driver);

//     try {
//         await loginPage.open(url);
//         await loginPage.clickLoginButton();
//         await loginPage.enterEmail(email);
//         await loginPage.enterPassword(password);
//         await loginPage.submit();

//         console.log(`✔ Login test passed for ${url}`);
//     } catch (err) {
//         console.error(`❌ Login test failed for ${url}: ${err.message}`);
//         throw err;
//     } finally {
//         await driver.quit();
//     }
// }

// module.exports = loginCustomTest;


// const { Builder } = require("selenium-webdriver");
// require("chromedriver");
// const LoginPage = require("../pages/loginPage");

// async function loginCustomTest(url, email, password) {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const loginPage = new LoginPage(driver);

//     try {
//         await loginPage.open(url);
//         await loginPage.clickLoginButton();
//         await loginPage.enterEmail(email);
//         await loginPage.enterPassword(password);
//         await loginPage.submit();

//         console.log(`✔ Login test passed for ${url}`);
//     } catch (err) {
//         console.error(`❌ Login test failed for ${url}: ${err.message}`);
//         throw err;
//     } finally {
//         await driver.quit();
//     }
// }

// module.exports = loginCustomTest;

// const { Builder } = require("selenium-webdriver");
// require("chromedriver");
// const LoginPage = require("../pages/loginPage");

// async function loginCustomTest(url, email, password) {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const loginPage = new LoginPage(driver);

//     try {
//         await loginPage.open(url);
//         await loginPage.clickLoginButton();
//         await loginPage.enterEmail(email);
//         await loginPage.enterPassword(password);
//         await loginPage.submit();

//         const error = await loginPage.checkLoginError();
//         if (error) {
//             throw new Error(error);
//         }

//         console.log(`✔ Login test passed for ${url}`);
//     } catch (err) {
//         console.error(`❌ Login test failed for ${url}: ${err.message}`);
//         throw err;
//     } finally {
//         await driver.quit();
//     }
// }

// module.exports = loginCustomTest;

// const { Builder } = require("selenium-webdriver");
// require("chromedriver");
// const LoginPage = require("../pages/loginPage");

// async function loginCustomTest(url, email, password) {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const loginPage = new LoginPage(driver);

//     try {
//         await loginPage.open(url);
//         await loginPage.clickLoginButton();
//         await loginPage.enterEmail(email);
//         await loginPage.enterPassword(password);
//         await loginPage.submit();

//         console.log(`✔ Login test passed for ${url}`);
//     } catch (err) {
//         console.error(`❌ Login test failed for ${url}: ${err.message}`);
//         throw err;
//     } finally {
//         await driver.quit();
//     }
// }

// module.exports = loginCustomTest;


// const { Builder } = require("selenium-webdriver");
// require("chromedriver");
// const LoginPage = require("../pages/loginPage");

// async function loginCustomTest(url, email, password) {
//     const driver = await new Builder().forBrowser("chrome").build();
//     const loginPage = new LoginPage(driver);

//     try {
//         await loginPage.open(url);
//         await loginPage.clickLoginButton();
//         await loginPage.enterEmail(email);
//         await loginPage.enterPassword(password);

//         // Проверяем, что кнопка Submit кликабельна
//         await loginPage.submit();

//         console.log(`✔ Login test passed for ${url}`);
//     } catch (err) {
//         console.error(`❌ Login test failed for ${url}: ${err.message}`);
//         throw err;  // Обязательно пробрасываем в runAll.js для отчета
//     } finally {
//         await driver.quit();
//     }
// }

// module.exports = loginCustomTest;


const { Builder } = require("selenium-webdriver");
require("chromedriver");
const LoginPage = require("../pages/loginPage");

async function loginCustomTest(url, email, password) {
    const driver = await new Builder().forBrowser("chrome").build();
    const loginPage = new LoginPage(driver);

    try {
        await loginPage.open(url);
        await loginPage.clickLoginButton();
        await loginPage.enterEmail(email);
        await loginPage.enterPassword(password);
        await loginPage.submit();

        console.log(`✔ Login test passed for ${url}`);
    } catch (err) {
        console.error(`❌ Login test failed for ${url}: ${err.message}`);
        throw err;
    } finally {
        await driver.quit();
    }
}

module.exports = loginCustomTest;
