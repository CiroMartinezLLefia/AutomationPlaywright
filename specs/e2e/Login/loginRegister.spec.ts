import { test } from "@playwright/test";
import { loginRegister } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/loginRegister.ts";

test("Test Case 1: sign in and delete", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();
  await loginReg.deleteAccount();
});

// THIS IS TO ALLOW CONTINOUS TESTING
test("DEBUG CASE 4: JUST sign up", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();
});

test("Test Case 2: log and delete", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.logIn();
  await loginReg.deleteAccount();
});

test("Test Case 3: log in with broken credentials", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.BrokenLogIn();
});
