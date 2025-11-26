import { expect, type Locator, type Page } from "@playwright/test";

export class openPages {
  readonly page: Page;
  readonly homeBtn: Locator;
  readonly productsBtn: Locator;
  readonly cartBtn: Locator;
  readonly signupLoginBtn: Locator;
  readonly testCasesBtn: Locator;
  readonly apiTestingBtn: Locator;
  readonly videoTutorialsBtn: Locator;
  readonly contactUsBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // LOCATORS
    this.homeBtn = page.locator("//a[@href='/']");
    this.productsBtn = page.locator("//a[@href='/products']").first();
    this.cartBtn = page.locator("//a[@href='/view_cart']").first();
    this.signupLoginBtn = page.locator("//a[@href='/login']").first();
    this.testCasesBtn = page.locator("//a[@href='/test_cases']").first();
    this.apiTestingBtn = page.locator("//a[@href='/api_list']").first();
    this.videoTutorialsBtn = page
      .locator("//a[@href='/video_tutorials']")
      .first();
    this.contactUsBtn = page.locator("//a[@href='/contact_us']").first();
  }

  // Abre automation exercise
  async goto() {
    await this.homeBtn.first().click();

    await expect(this.page).toHaveTitle("Automation Exercise");
  }

  // Opens Products Page
  async openProductsPage() {
    await this.productsBtn.click();
  }

  // Opens Cart Page
  async openCartPage() {
    await this.cartBtn.click();
  }

  // Opens Sign Up / Log In Page
  async openSignUpLoginPage() {
    await this.signupLoginBtn.click();
  }

  // Opens Test Cases Page
  async openTestCasesPage() {
    await this.testCasesBtn.click();
  }

  // Opens API Tests Page
  async openApiTestingCase() {
    await this.apiTestingBtn.click();
  }

  // Opens Video Tutorials Page
  async openVideoTutorialsPage() {
    await this.videoTutorialsBtn.click();
  }

  // Opens Contact Us Page
  async openContactUsPage() {
    await this.contactUsBtn.click();
  }
}
