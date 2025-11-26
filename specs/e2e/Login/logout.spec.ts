import { test } from "@playwright/test";
import { loginRegister } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/loginRegister.ts";

test.beforeAll("Setup", async ({ page }) => {
  await page.goto("http://automationexercise.com");
});

// THIS IS TO ALLOW CONTINOUS TESTING
test("DEBUG CASE 5: JUST sign up", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();
});

test("Test Case 4: logout", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.logIn();
  await loginReg.logOut();
});

// THIS IS TO ALLOW CONTINOUS TESTING
test("DEBUG CASE 6: log and delete", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.logIn();
  await loginReg.deleteAccount();
});

test("Test Case 5: Register existing email", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();
  await loginReg.logOut();
  await loginReg.brokenSignUp();
});
