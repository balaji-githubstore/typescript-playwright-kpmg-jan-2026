import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({
        headless: false,
        channel: 'chrome',
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.ilovepdf.com/pdf_to_word');

    // ===== OPTION 1: Direct input[type=file] =====
    await page.locator("//input[@type='file']")
        .setInputFiles('D:/Mine/Balaji Dinakaran Trainer Profile - AI.pdf');

    await page.waitForTimeout(5000);

    // Reload page for option 2 demo
    await page.goto('https://www.ilovepdf.com/pdf_to_word');

    // ===== OPTION 2: FileChooser (button click) =====
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator("//span[text()='Select PDF file']").click(),
    ]);

    await fileChooser.setFiles('D:/Mine/Balaji Dinakaran Trainer Profile - AI.pdf');

    await page.waitForTimeout(5000);
    await browser.close();

}

run();