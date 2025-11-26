import { test } from "@playwright/test";
import { contactUs } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/contactUs.ts";

test.beforeEach("Setup", async ({ page }) => {
  await page.goto("http://automationexercise.com");
});

test("Test Case 6: Contact Us", async ({ page }) => {
  const contact = new contactUs(page);

  await contact.openPage.goto();
  await contact.openPage.openContactUsPage();
  await contact.fillContactUs();
});
