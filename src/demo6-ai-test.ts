
import { chromium } from 'playwright';

(async () => {
	const browser = await chromium.launch({ headless: false });
	const context = await browser.newContext();
	const page = await context.newPage();
	try {
		// 1. Navigate to Facebook
		await page.goto('https://www.facebook.com/');

		// 2. Enter invalid email and password
		await page.fill('input[name="email"]', 'invaliduser@example.com');
		await page.fill('input[name="pass"]', 'invalidpassword');

		// 3. Click the Login button
		await page.click('button[name="login"]');

		// 4. Wait for error message
		const errorSelector = 'div[role="alert"]';
		await page.waitForSelector(errorSelector, { timeout: 10000 });

		// 5. Assert error message is visible
		const isVisible = await page.isVisible(errorSelector);
		if (isVisible) {
			const errorMsg = await page.textContent(errorSelector);
			console.log('Test Passed: Error message displayed:', errorMsg?.trim());
		} else {
			console.log('Test Failed: Error message not visible');
		}
	} catch (err) {
		console.error('Test Failed with error:', err);
	} finally {
		// 6. Close browser
		await browser.close();
	}
})();
