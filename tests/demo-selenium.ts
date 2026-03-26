import { Builder, By, until, WebDriver } from 'selenium-webdriver';

async function testFacebookInvalidLogin() {
    let driver: WebDriver;

    try {
        // Initialize browser
        driver = await new Builder().forBrowser('chrome').build();
        console.log('Browser started successfully');

        // Navigate to Facebook
        await driver.get('https://www.facebook.com');
        console.log('Navigated to Facebook');

        // Enter invalid email
        const emailInput = await driver.findElement(By.name('email'));
        await emailInput.sendKeys('invaliduser@test.com');
        console.log('Entered invalid email');

        // Enter invalid password
        const passwordInput = await driver.findElement(By.name('pass'));
        await passwordInput.sendKeys('wrongpassword123');
        console.log('Entered invalid password');

        // Click Login button using JavaScript (Facebook uses role="button")
        await driver.executeScript(`
            var items = document.querySelectorAll('[role="button"]');
            for (var i = 0; i < items.length; i++) {
                if (items[i].innerText === 'Log in') {
                    items[i].click();
                    break;
                }
            }
        `);
        console.log('Clicked Login button');

        // Wait for error message to appear
        await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), \"isn't connected to an account\")]")), 10000);

        // Verify error message is displayed
        const errorMessage = await driver.findElement(By.xpath("//*[contains(text(), \"isn't connected to an account\")]"));
        const errorText = await errorMessage.getText();
        
        if (errorText.includes("isn't connected to an account")) {
            console.log('TEST PASSED: Error message displayed correctly');
            console.log('Error text:', errorText);
        } else {
            console.log('TEST FAILED: Expected error message not found');
        }

    } catch (error) {
        console.error('TEST FAILED with error:', error);
    } finally {
        // Close the browser
        if (driver!) {
            await driver.quit();
            console.log('Browser closed');
        }
    }
}

// Run the test
testFacebookInvalidLogin();