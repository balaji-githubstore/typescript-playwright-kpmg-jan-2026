# Facebook Login Page - Basic Operations Test Plan

## Application Overview

This test plan covers the basic operations and user flows for the Facebook login page. It includes positive and negative scenarios for login, password recovery, and navigation to sign-up, ensuring robust validation and error handling.

## Test Scenarios

### 1. Login Functionality

**Seed:** `seed.spec.ts`

#### 1.1. Login with valid credentials

**File:** `tests/login-valid-credentials.spec.ts`

**Steps:**
  1. Enter a valid email or phone number in the 'Email address or phone number' textbox.
    - expect: The email/phone textbox contains the entered value.
  2. Enter a valid password in the 'Password' textbox.
    - expect: The password textbox contains the entered value.
  3. Click the 'Log in' button.
    - expect: User is redirected to the Facebook home page or news feed.

#### 1.2. Login with invalid credentials

**File:** `tests/login-invalid-credentials.spec.ts`

**Steps:**
  1. Enter an invalid email or phone number in the 'Email address or phone number' textbox.
    - expect: The email/phone textbox contains the entered value.
  2. Enter an invalid password in the 'Password' textbox.
    - expect: The password textbox contains the entered value.
  3. Click the 'Log in' button.
    - expect: An error message is displayed indicating incorrect credentials.

#### 1.3. Login with empty fields

**File:** `tests/login-empty-fields.spec.ts`

**Steps:**
  1. Leave both the 'Email address or phone number' and 'Password' textboxes empty.
    - expect: Both fields are empty.
  2. Click the 'Log in' button.
    - expect: An error message is displayed indicating that both fields are required.

#### 1.4. Login with empty password

**File:** `tests/login-empty-password.spec.ts`

**Steps:**
  1. Enter a valid email or phone number in the 'Email address or phone number' textbox.
    - expect: The email/phone textbox contains the entered value.
  2. Leave the 'Password' textbox empty.
    - expect: The password textbox is empty.
  3. Click the 'Log in' button.
    - expect: An error message is displayed indicating that the password is required.

#### 1.5. Login with empty email/phone

**File:** `tests/login-empty-email.spec.ts`

**Steps:**
  1. Leave the 'Email address or phone number' textbox empty.
    - expect: The email/phone textbox is empty.
  2. Enter a valid password in the 'Password' textbox.
    - expect: The password textbox contains the entered value.
  3. Click the 'Log in' button.
    - expect: An error message is displayed indicating that the email/phone is required.

#### 1.6. Password recovery flow

**File:** `tests/password-recovery.spec.ts`

**Steps:**
  1. Click the 'Forgotten account?' link.
    - expect: User is redirected to the password recovery page.
