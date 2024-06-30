const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

(async function loginFunctionalityTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the login page
        await driver.get('https://www.saucedemo.com/');

        // Test Case 1: Successful login with valid credentials
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        // Wait for navigation to the home page
        await driver.wait(until.urlIs('https://www.saucedemo.com/inventory.html'), 25000);
        let welcomeMessage = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(welcomeMessage, 'Products');

        // Test Case 2: Unsuccessful login with invalid credentials
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user1');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce1');
        await driver.findElement(By.id('login-button')).click();

        // Wait for error message
        await driver.wait(until.urlIs('https://www.saucedemo.com/'), 25000);
        let errorMessage = await driver.findElement(By.className('error-message-container error')).getText();
        assert.strictEqual(errorMessage, 'Epic sadface: Username and password do not match any user in this service');

        // Test Case 3: Handling empty input fields
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('login-button')).click();

        // Wait for error messages
        let EmptyError = await driver.findElement(By.className('error-message-container error')).getText();
        assert.strictEqual(EmptyError, 'Epic sadface: Username is required');

        console.log('All test cases passed!');
    }
    finally {
        // Close the browser
        await driver.quit();
    }
})();
