import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.db4free.net/');


    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator("//b[contains(text(),'phpMyAd')]").click()
    ])

    console.log(await newPage.title())


    await page.waitForTimeout(5000);

    await browser.close();
}

run();