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

  // Last name
  await page.locator("//input[@name='lastname']").fill('john');

  // Date of birth
  await page.locator("//select[@title='Day']").selectOption('8');
  await page.locator("//select[@title='Month']").selectOption({ label: 'Dec' });
  await page.locator("//select[@title='Year']").selectOption({ index: 11 });

  // Gender - Custom
  await page.locator("//input[@value='-1']").click();

  await page.waitForTimeout(5000);

  await browser.close();
}

run();