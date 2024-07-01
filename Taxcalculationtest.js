const {Builder, By, Until} = require('selenium-webdriver');

(async function testcalculatingtax(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
       // Navigate to the land taxcaluclating page
       await driver.get('https://services.wra.gov.wales/land-transaction-tax-calculator')













    }

finally {
        await driver.quit();
    }
    
})