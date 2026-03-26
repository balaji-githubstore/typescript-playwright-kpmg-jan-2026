import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome',
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.facebook.com/');

  // Create new account
  await page.locator("//a[text()='Create new account']").click();

  // First name
  await page.locator("//input[@name='firstname']").fill('john');


  await browser.close();
}

run();