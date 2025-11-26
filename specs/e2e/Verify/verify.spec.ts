import { test } from "@playwright/test";
import { verify } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/verify.ts";

test("Test Case 7: Verify test cases", async ({ page }) => {
  const verifyPage = new verify(page);

  await verifyPage.openPage.goto();
  await verifyPage.openPage.openTestCasesPage();
});

test("Test Case 8: Verify product page", async ({ page }) => {
  const verifyPage = new verify(page);

  await verifyPage.openPage.goto();
  await verifyPage.openPage.openProductsPage();
  await verifyPage.verifyProducts();
});

test("Test Case 9: Verify product search", async ({ page }) => {
  const verifyPage = new verify(page);

  await verifyPage.openPage.goto();
  await verifyPage.openPage.openProductsPage();
  await verifyPage.verifyProductSearch();
});

test("Test Case 10: Verify subscription page", async ({ page }) => {
  const verifyPage = new verify(page);

  await verifyPage.openPage.goto();
  await verifyPage.verifySubscriptionPage();
});

test("Test Case 11: Verify subscription page from cart", async ({ page }) => {
  const verifyPage = new verify(page);

  await verifyPage.openPage.goto();
  await verifyPage.openPage.openCartPage();
  await verifyPage.verifySubscriptionPage();
});
