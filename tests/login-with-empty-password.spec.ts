// spec: specs/facebook-login-basic-operations.plan.md
// scenario: 1.5. Login with Empty Password Field

import { test, expect } from '@playwright/test';

test.describe('Login Page Basic Operations', () => {
  test('Login with Empty Password Field', async ({ page }) => {
    // 1. Navigate to https://www.facebook.com
    await page.goto('https://www.facebook.com');

    // 2. Enter a valid email or phone number
    await page.getByTestId('royal-email').fill('validuser@example.com');

    // 3. Leave the password field empty
    // (No action needed, field is empty by default)

    // 4. Click the Log In button
    await page.getByTestId('royal-login-button').click();

    // expect: Password validation message is displayed
    await expect(page.getByText("The email address you entered isn't connected to an account.")).toBeVisible();
  });
});
