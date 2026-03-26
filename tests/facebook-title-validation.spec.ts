
import { test, expect } from '@playwright/test';
// spec: Facebook Title Validation

test.describe('Facebook Title Validation', () => {
  test('Valid Facebook Title Check', async ({ page }) => {
    // 1. Navigate to https://www.facebook.com
    await page.goto('https://www.facebook.com');

    // 2. Verify the page title is either "Facebook" or "Facebook – log in or sign up"
    const title = await page.title();
    expect([
      'Facebook',
      'Facebook – log in or sign up',
    ]).toContain(title);
  });
});
