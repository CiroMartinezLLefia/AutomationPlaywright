import { expect, type Locator, type Page } from "@playwright/test";
import { openPages } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/openPages.ts";
import { credentials } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/credentials.ts";

export class checkout {
  readonly openPage: openPages;
  readonly credentialHolder: credentials;
  readonly page: Page;

  readonly checkOutBtn: Locator;
  readonly signUpBtn: Locator;
  readonly commentArea: Locator;
  readonly placeOrderBtn: Locator;

  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expirationMonthInput: Locator;
  readonly expirationYearInput: Locator;
  readonly submitPaymentBtn: Locator;

  readonly downloadInvoiceBtn: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.openPage = new openPages(page);
    this.credentialHolder = new credentials(page);
    this.page = page;

    // LOCATORS
    this.checkOutBtn = page.getByText("Proceed To Checkout");
    this.signUpBtn = page.getByRole("link", { name: "Register / Login" });
    this.commentArea = this.page.locator('textarea[name="message"]');
    this.placeOrderBtn = page.locator("//a[@href='/payment']");
    this.submitPaymentBtn = page.locator("//button[@data-qa='pay-button']");

    // Payment info
    this.nameOnCardInput = page.locator("//input[@data-qa='name-on-card']");
    this.cardNumberInput = page.locator("//input[@data-qa='card-number']");
    this.cvcInput = page.locator("//input[@data-qa='cvc']");
    this.expirationMonthInput = page.locator(
      "//input[@data-qa='expiry-month']"
    );
    this.expirationYearInput = page.locator("//input[@data-qa='expiry-year']");

    this.downloadInvoiceBtn = page.locator(
      "//a[@href='/download_invoice/978']"
    );

    this.continueBtn = page.locator("//a[@data-qa='continue-button']");
  }

  // Open checkout when on Cart
  async checkOut() {
    await this.checkOutBtn.click();
  }

  // Open Register / Login on Checkout pop-up
  async checkoutSignUp() {
    await this.signUpBtn.click();
  }

  // Verifies credentials.ts (TODO: Move credentials.ts to .env)
  async verifyCheckOut() {
    await expect(
      this.page.getByText(this.credentialHolder.name).first()
    ).toBeVisible();
    await expect(
      this.page.getByText(this.credentialHolder.companySignUp).first()
    ).toBeVisible();
    await expect(
      this.page.getByText(this.credentialHolder.address1SignUp).first()
    ).toBeVisible();
    await expect(
      this.page.getByText(this.credentialHolder.address2SignUp).first()
    ).toBeVisible();
    await expect(
      this.page.getByText(this.credentialHolder.citySignUp).first()
    ).toBeVisible();
    await expect(
      this.page.getByText(this.credentialHolder.countrySignUp).first()
    ).toBeVisible();
    await expect(
      this.page.getByText(this.credentialHolder.mobileNumberSignUp).first()
    ).toBeVisible();
  }

  // Send comment and go to Payment page
  async buy() {
    await this.commentArea.fill("Lorem Ipsum Dolor");
    await this.placeOrderBtn.click();

    // Fills based on credentials.ts (TODO: Move credentials.ts to .env)
    await this.nameOnCardInput.fill(this.credentialHolder.nameOnCard);
    await this.cardNumberInput.fill(this.credentialHolder.cardNumber);
    await this.cvcInput.fill(this.credentialHolder.cvc);
    await this.expirationMonthInput.fill(
      this.credentialHolder.expirationDateMonth
    );
    await this.expirationYearInput.fill(
      this.credentialHolder.expirationDateYear
    );

    await this.submitPaymentBtn.click();

    await expect(
      this.page
        .getByText("Congratulations! Your order has been confirmed!")
        .first()
    ).toBeVisible();
  }

  async checkOutVerifyAndBuy() {
    await this.checkOut();
    await this.verifyCheckOut();
    await this.buy();
  }

  async downloadAndDelete() {
    const downloadPromise = this.page.waitForEvent("download");
    await this.downloadInvoiceBtn.click();
    await downloadPromise;

    await this.continueBtn.click();
  }
}
