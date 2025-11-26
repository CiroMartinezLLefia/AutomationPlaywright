import { expect, Locator, type Page } from "@playwright/test";
import { openPages } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/openPages.ts";
import { setTimeout } from "timers/promises";

export class scrollUp {
  readonly openPage: openPages;
  readonly page: Page;

  readonly arrowBtn: Locator;

  constructor(page: Page) {
    this.openPage = new openPages(page);
    this.page = page;

    this.arrowBtn = page.getByRole("link", { name: "" });
  }

  async scrollDown() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(
      this.page.getByRole("heading", {
        name: "Full-Fledged practice website for Automation Engineers",
      })
    ).toBeVisible();
  }

  async verifyArrowScroll() {
    await this.arrowBtn.click();
  }

  async verifyScrollUp() {
    await setTimeout(500);

    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

  async verifyOnTop() {
    await expect(
      this.page.getByRole("heading", {
        name: "Full-Fledged practice website for Automation Engineers",
      })
    ).toBeInViewport();
  }
}
