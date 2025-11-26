import { test } from "@playwright/test";
import { scrollUp } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/scrollUp.ts";

test("Test Case 25: Verify Scroll Up using arrow", async ({ page }) => {
  const scroll = new scrollUp(page);

  await scroll.openPage.goto();
  await scroll.scrollDown();
  await scroll.verifyArrowScroll();
  await scroll.verifyOnTop();
});

test("Test Case 26: Verify Scroll Up NOT using arrow", async ({ page }) => {
  const scroll = new scrollUp(page);

  await scroll.openPage.goto();
  await scroll.scrollDown();
  await scroll.verifyScrollUp();
  await scroll.verifyOnTop();
});
