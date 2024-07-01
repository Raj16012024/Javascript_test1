const {Builder, By, Key, Until} = require('selenium-webdriver');
const assert = require('assert');

(async function logintestfunctionality(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        // Navigage to the homepage
        await driver.get('example');

        // Test Case 1 : successful login with valid credentials
        await driver.findElement(By.id('username')).sendKeys('user');
        await driver.findElement(By.id('password')).sendKeys('pass');
        await driver.findElement(By.id('login-button')).click();

        // Welcome message
        await driver.wait(until.urlIs('webpage'), 15000);
        let welcome = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(welcome, 'expected', 'Test 1 Failed');

        console.log('All test cases passed');
    }
    finally {
        await driver.quit();}
})

