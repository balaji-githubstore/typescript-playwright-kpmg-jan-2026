# Facebook Application – Basic Authentication Test Plan

## 📌 Overview

The Facebook web application is a social networking platform that enables users to connect, communicate, and share content.  
This document focuses on **basic authentication test scenarios**, covering login validation, error handling, and security-related behaviors.

The purpose of this test plan is to define **clear, repeatable test cases** that can be used for:
- Manual testing
- Automation (Playwright / Selenium)
- AI-driven testing demos (GenAI / MCP)

---

## 🎯 Scope

This test plan covers:

- Login with valid and invalid credentials
- Input validation
- Error message verification
- Session handling after failed login attempts

Out of scope:
- Signup / registration
- Password reset
- Two-factor authentication (2FA)
- Post-login features

---

## 🧪 Test Scenarios

### 1️⃣ Login Functionality

**Test File:** `tests/auth/login.spec.ts`

---

### 1.1 Login with Valid Credentials

**Steps:**
1. Navigate to `https://www.facebook.com`
2. Enter a valid email or phone number
3. Enter a valid password
4. Click the **Log In** button

**Expected Results:**
- User is successfully logged in
- User is redirected to the Facebook home feed
- Profile icon and navigation menu are visible
- No error messages are displayed

---

### 1.2 Login with Invalid Password

**Steps:**
1. Navigate to `https://www.facebook.com`
2. Enter a valid email or phone number
3. Enter an invalid password
4. Click the **Log In** button

**Expected Results:**
- Login attempt fails
- Error message is displayed  
  _“The password you’ve entered is incorrect.”_
- User remains on the login page

---

### 1.3 Login with Invalid Email or Phone Number

**Steps:**
1. Navigate to `https://www.facebook.com`
2. Enter an unregistered email or phone number
3. Enter any password
4. Click the **Log In** button

**Expected Results:**
- Login attempt fails
- Error message indicates account does not exist
- User remains on the login page

---

### 1.4 Login with Empty Credentials

**Steps:**
1. Navigate to `https://www.facebook.com`
2. Leave both email/phone and password fields empty
3. Click the **Log In** button

**Expected Results:**
- Login is blocked
- Validation message prompts user to fill required fields
- No authentication request is sent

---

### 1.5 Login with Empty Password Field

**Steps:**
1. Navigate to `https://www.facebook.com`
2. Enter a valid email or phone number
3. Leave the password field empty
4. Click the **Log In** button

**Expected Results:**
- Login is blocked
- Password validation message is displayed
- User remains on the login page

---

## 🚨 Error Handling

### 2.1 Incorrect Credentials Error Message

**Steps:**
1. Attempt login using incorrect credentials

**Expected Results:**
- Error message is clearly visible
- Message does not reveal sensitive information
- UI remains responsive

---

### 2.2 Multiple Failed Login Attempts

**Steps:**
1. Perform multiple login attempts with invalid credentials

**Expected Results:**
- Error messages remain consistent
- No application crash or UI freeze
- Optional security challenge (CAPTCHA) may appear if enabled

---

## 🤖 Automation & AI Readiness

This test plan can be automated using:
- **Playwright**
- **Selenium**
- **Cypress**

It is also suitable for:
- **GenAI-based test generation**
- **MCP (Ask → Agent → Plan) demos**
- **Copilot Coding Agent workflows**

---

## ✅ Status

- [x] Test scenarios defined
- [ ] Automated scripts implemented
- [ ] AI-assisted execution enabled
