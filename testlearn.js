const {Builder, By, Key, Until} = require('selenium-webdriver');
const assert = require('assert');

(async function logintestfunctionality() {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            //Navigage to the homepage
            await driver.get('example');

            // Test case 1:successful login
            await driver.findElemet(By.id("username")).sendKeys('user');
            await driver.findElemet(By.id("password")).sendKeys('password');
            await driver.findElemet(By.id('login-button')).click();

            // Message
            await driver.wait(until.urlIs("webpage"), 10000);
            let Welcome = await driver.findElemet(By.className('any')).getText()
            assert.strictEqual(Welcome, 'actually expectted to see in the page', 'Test Case 1 passed');


        }
        finally {
            await driver.quit();
        }
})();









