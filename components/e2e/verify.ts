import { expect, type Locator, type Page } from "@playwright/test";
import { openPages } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/openPages.ts";

export class verify {
  readonly openPage: openPages;
  readonly page: Page;
  readonly product: Locator;
  readonly productId: number;

  readonly productSearchInput: Locator;
  readonly productSearchBtn: Locator;
  readonly productName: string;

  readonly subscriptionInput: Locator;

  readonly cartBtn: Locator;

  constructor(page: Page) {
    this.openPage = new openPages(page);
    this.page = page;

    // VARIABLES
    this.productId = 1;
    this.productName = "Blue";

    // LOCATORS
    this.product = page.locator(
      `//a[@href='/product_details/${this.productId}']`
    );
    this.productSearchInput = page.locator("//input[@id='search_product']");
    this.productSearchBtn = page.locator("//button[@id='submit_search']");
    this.subscriptionInput = page.locator("//input[@id='susbscribe_email']");

    this.cartBtn = page.locator("//a[@href='/view_cart']");
  }

  // Opens product page (Based on productId) and verifies its contents
  async verifyProducts() {
    await this.product.click();

    await expect(
      this.page.getByRole("heading", { name: "Blue Top" })
    ).toBeVisible();

    await expect(this.page.getByText("Category: Women > Tops")).toBeVisible();
    await expect(this.page.getByText("Rs. 500")).toBeVisible();
    await expect(this.page.getByText("Availability: In Stock")).toBeVisible();
    await expect(this.page.getByText("Condition: New")).toBeVisible();
    await expect(this.page.getByText("Brand: Polo")).toBeVisible();
  }

  // Searches for product (Based on productName) and verifies that it exists
  async verifyProductSearch() {
    await this.productSearchInput.fill(`${this.productName}`);
    await this.productSearchBtn.click();

    await expect(
      this.page.getByRole("heading", { name: "SEARCHED PRODUCTS" })
    ).toBeVisible();
    await expect(
      this.page.getByText(`${this.productName}`).first()
    ).toBeVisible();
  }

  // Scrolls to the bottom of the page and fills the subscription email, then uses keyboard control to submit
  async verifySubscriptionPage() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(
      this.page.getByRole("heading", { name: "SUBSCRIPTION" })
    ).toBeVisible();

    await this.subscriptionInput.fill("test11@email.com");
    await this.subscriptionInput.press("Enter");

    await expect(
      this.page.getByText("You have been successfully subscribed!")
    ).toBeVisible();
  }
}
