import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://netbanking.hdfcbank.com/netbanking/IpinResetUsingOTP.htm');

    // Dialog handler (alert / confirm / prompt)
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    // Click Go button (XPath)
    await page.locator("//img[@alt='Go']").click();

    await page.waitForTimeout(5000);
    await browser.close();



    await page.waitForTimeout(5000);

    await browser.close();
}

run();