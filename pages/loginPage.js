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


const { By, until } = require("selenium-webdriver");

class LoginPage {
    constructor(driver) {
        this.driver = driver;

        this.loginBtnSelector = By.css("span.vi__icon_text");
        this.emailSelector = By.css("input[name='login']");
        this.passwordSelector = By.css("input[name='password']");
        this.submitSelector = By.css("input#register_login");
        this.errorSelector = By.css(".error, .alert, .help-block");
    }

    async open(url) {
        await this.driver.get(url);
    }

    async clickLoginButton() {
        const loginBtn = await this.driver.wait(
            until.elementLocated(this.loginBtnSelector),
            15000,
            "Login button not found"
        );
        await this.driver.actions({ bridge: true }).move({ origin: loginBtn }).click().perform();
        await this.driver.sleep(1000); // подождать появления формы
    }

    async enterEmail(email) {
        const emailField = await this.driver.wait(
            until.elementLocated(this.emailSelector),
            15000,
            "Email field not found"
        );
        await emailField.sendKeys(email);
        console.log(`✅ Email entered: ${email}`);
    }

    async enterPassword(password) {
        const passwordField = await this.driver.wait(
            until.elementLocated(this.passwordSelector),
            15000,
            "Password field not found"
        );
        await passwordField.sendKeys(password);
        console.log(`✅ Password entered: ${"*".repeat(password.length)}`);
    }

    async submit() {
        const submitBtn = await this.driver.wait(
            until.elementLocated(this.submitSelector),
            15000,
            "Submit button not found"
        );

        await this.driver.actions({ bridge: true }).move({ origin: submitBtn }).click().perform();
        await this.driver.sleep(500);

        // Проверка ошибок формы
        try {
            const errorElem = await this.driver.findElement(this.errorSelector);
            const text = await errorElem.getText();
            if (text && text.trim().length > 0) {
                throw new Error(`Form error: ${text}`);
            }
        } catch (e) {
            // если ошибки нет, игнорируем
        }
    }
}

module.exports = LoginPage;
