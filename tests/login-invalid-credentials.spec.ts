// spec: specs/facebook-login-basic-operations.plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {
  test('Login with invalid credentials', async ({ page }) => {
    // Navigate to Facebook login page for invalid credentials test.
    await page.goto('https://www.facebook.com/login');

    // Enter an invalid email or phone number in the 'Email address or phone number' textbox.
    await page.getByRole('textbox', { name: 'Email address or phone number' }).fill('invalid_user@example.com');

    // Enter an invalid password in the 'Password' textbox.
    await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');

    // Click the 'Log in' button.
    await page.getByRole('button', { name: 'Log in' }).click();

    // Verify error message is displayed indicating incorrect credentials after login attempt with invalid credentials.
    await expect(page.getByText("The email address you entered isn't connected to an account.")).toBeVisible();
  });
});
