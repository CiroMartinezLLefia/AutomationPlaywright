import { expect, type Locator, type Page } from "@playwright/test";
import { openPages } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/openPages.ts";
import { credentials } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/credentials.ts";

export class loginRegister {
  readonly openPage: openPages;
  readonly credentialHolder: credentials;
  readonly page: Page;

  readonly signBtn: Locator;
  readonly logBtn: Locator;
  readonly logOutBtn: Locator;
  readonly nameSignUp: Locator;
  readonly emailSignUp: Locator;
  readonly emailLogin: Locator;
  readonly passwordLogin: Locator;
  readonly passwordSignUp: Locator;
  readonly title: Locator;
  readonly daysSignUp: Locator;
  readonly monthsSignUp: Locator;
  readonly yearsSignUp: Locator;
  readonly newsletterSignUp: Locator;
  readonly offersSignUp: Locator;
  readonly firstNameSignUpInput: Locator;
  readonly lastNameSignUpInput: Locator;
  readonly companySignUpInput: Locator;
  readonly address1SignUpInput: Locator;
  readonly address2SignUpInput: Locator;
  readonly countrySignUpInput: Locator;
  readonly stateSignUpInput: Locator;
  readonly citySignUpInput: Locator;
  readonly zipCodeSignUpInput: Locator;
  readonly mobileNumberSignUpInput: Locator;
  readonly createAccountBtn: Locator;
  readonly continueAccountBtn: Locator;
  readonly deleteAccountBtn: Locator;

  constructor(page: Page) {
    this.openPage = new openPages(page);
    this.credentialHolder = new credentials(page);
    this.page = page;

    // LOCATORS
    this.signBtn = page.locator("//button[@data-qa='signup-button']");
    this.logBtn = page.locator("//button[@data-qa='login-button']");
    this.logOutBtn = page.locator("//a[@href='/logout']");

    this.nameSignUp = page.locator("//input[@data-qa='signup-name']");
    this.emailSignUp = page.locator("//input[@data-qa='signup-email']");
    this.emailLogin = page.locator("//input[@data-qa='login-email']");
    this.passwordLogin = page.locator("//input[@data-qa='login-password']");
    this.passwordSignUp = page.locator("//input[@data-qa='password']");

    this.title = page.locator("//input[@id='id_gender1']");
    this.daysSignUp = page.locator("//select[@data-qa='days']");
    this.monthsSignUp = page.locator("//select[@data-qa='months']");
    this.yearsSignUp = page.locator("//select[@data-qa='years']");

    this.newsletterSignUp = page.locator("//input[@id='newsletter']");
    this.offersSignUp = page.locator("//input[@id='optin']");

    this.firstNameSignUpInput = page.locator("//input[@data-qa='first_name']");
    this.lastNameSignUpInput = page.locator("//input[@data-qa='last_name']");
    this.companySignUpInput = page.locator("//input[@data-qa='company']");
    this.address1SignUpInput = page.locator("//input[@data-qa='address']");
    this.address2SignUpInput = page.locator("//input[@data-qa='address2']");
    this.countrySignUpInput = page.locator("//select[@data-qa='country']");
    this.stateSignUpInput = page.locator("//input[@data-qa='state']");
    this.citySignUpInput = page.locator("//input[@data-qa='city']");
    this.zipCodeSignUpInput = page.locator("//input[@data-qa='zipcode']");
    this.mobileNumberSignUpInput = page.locator(
      "//input[@data-qa='mobile_number']"
    );
    this.createAccountBtn = page.locator("//button[@data-qa='create-account']");
    this.continueAccountBtn = page.locator("//a[@data-qa='continue-button']");
    this.deleteAccountBtn = page.locator("//a[@href='/delete_account']");
  }

  // Fills signUp page with credentials.ts (TODO: Move credentials.ts to .env)
  async signUp() {
    await this.nameSignUp.fill(this.credentialHolder.username);
    await this.emailSignUp.fill(this.credentialHolder.email);
    await this.signBtn.click();

    await expect(
      this.page.getByRole("heading", { name: "ENTER ACCOUNT INFORMATION" })
    ).toBeVisible();

    await this.title.check();
    await this.passwordSignUp.fill(this.credentialHolder.password);

    await this.daysSignUp.selectOption("18");
    await this.monthsSignUp.selectOption("3");
    await this.yearsSignUp.selectOption("2006");

    await this.newsletterSignUp.check();
    await this.offersSignUp.check();

    await this.firstNameSignUpInput.fill(this.credentialHolder.name);
    await this.lastNameSignUpInput.fill(this.credentialHolder.lastName);
    await this.companySignUpInput.fill(this.credentialHolder.companySignUp);
    await this.address1SignUpInput.fill(this.credentialHolder.address1SignUp);
    await this.address2SignUpInput.fill(this.credentialHolder.address2SignUp);
    await this.countrySignUpInput.selectOption(
      this.credentialHolder.countrySignUp
    );
    await this.stateSignUpInput.fill(this.credentialHolder.stateSignUp);
    await this.citySignUpInput.fill(this.credentialHolder.citySignUp);
    await this.zipCodeSignUpInput.fill(this.credentialHolder.zipCodeSignUp);
    await this.mobileNumberSignUpInput.fill(
      this.credentialHolder.mobileNumberSignUp
    );

    await this.createAccountBtn.click();

    await expect(
      this.page.getByRole("heading", { name: "ACCOUNT CREATED!" })
    ).toBeVisible();

    await this.continueAccountBtn.click();

    await expect(
      this.page.getByText(`Logged in as ${this.credentialHolder.username}`)
    ).toBeVisible();
  }

  // BROKEN ASYNC: Signs up with an already created account (Has special expectations to avoid errors, and skips credential fill up, since it can't reach that page)
  async brokenSignUp() {
    await expect(
      this.page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();

    await this.nameSignUp.fill(this.credentialHolder.username);
    await this.emailSignUp.fill(this.credentialHolder.email);
    await this.signBtn.click();

    await expect(
      this.page.getByText("Email Address already exist!")
    ).toBeVisible();
  }

  // Fills logIn page with credentials.ts (TODO: Move credentials.ts to .env)
  async logIn() {
    await expect(
      this.page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();

    await this.emailLogin.fill(this.credentialHolder.email);
    await this.passwordLogin.fill(this.credentialHolder.password);
    await this.logBtn.click();

    await expect(
      this.page.getByText(`Logged in as ${this.credentialHolder.username}`)
    ).toBeVisible();
  }

  // BROKEN ASYNC: Logs in with non-existent credentials
  async BrokenLogIn() {
    await expect(
      this.page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();

    await this.emailLogin.fill("notEmail@bad.email");
    await this.passwordLogin.fill("badPassword");
    await this.logBtn.click();

    await expect(
      this.page.getByText("Your email or password is incorrect!")
    ).toBeVisible();
  }

  // Logs out
  async logOut() {
    await this.logOutBtn.click();

    await expect(
      this.page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();
  }

  // Deletes account
  async deleteAccount() {
    this.deleteAccountBtn.click();

    await expect(
      this.page.getByRole("heading", { name: "ACCOUNT DELETED!" })
    ).toBeVisible();

    await this.continueAccountBtn.click();
  }

  // OBSOLETE ASYNC
  async verifyData() {
    await expect(this.page.getByText("Men Tshirt").first()).toBeVisible();
  }
}
