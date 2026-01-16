import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://netbanking.hdfcbank.com/netbanking/');


    const frame = page.frameLocator("//frame[@name='login_page']");

    await frame.locator("//input[@name='fldLoginUserId']").fill("hello123");



    await page.waitForTimeout(5000);

    await browser.close();
}

run();