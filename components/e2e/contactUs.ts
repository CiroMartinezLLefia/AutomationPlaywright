import { expect, type Locator, type Page } from "@playwright/test";
import { openPages } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/openPages.ts";

export class contactUs {
  readonly openPage: openPages;
  readonly page: Page;
  readonly nameContactUs: Locator;
  readonly emailContactUs: Locator;
  readonly subjectContactUs: Locator;
  readonly messageContactUs: Locator;
  readonly fileContactUs: Locator;
  readonly submitContactUs: Locator;

  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;

  constructor(page: Page) {
    this.openPage = new openPages(page);
    this.page = page;

    // LOCATORS
    this.nameContactUs = page.locator("//input[@data-qa='name']");
    this.emailContactUs = page.locator("//input[@data-qa='email']");
    this.subjectContactUs = page.locator("//input[@data-qa='subject']");
    this.messageContactUs = page.locator("//textarea[@data-qa='message']");

    this.fileContactUs = page.locator("//input[@name='upload_file']");
    this.submitContactUs = page.locator("//input[@data-qa='submit-button']");

    // VARIABLES
    this.name = "Test User";
    this.email = "testing11@mail.com";
    this.subject = "Test Subject";
    this.message = "This is a test message for Contact Us form.";
  }

  // Fills contact us form and uploads a .txt file, then it accpets pop-up and sumbits
  async fillContactUs() {
    await expect(
      this.page.getByRole("heading", { name: "GET IN TOUCH" })
    ).toBeVisible();

    await this.nameContactUs.fill(this.name);
    await this.emailContactUs.fill(this.email);
    await this.subjectContactUs.fill(this.subject);
    await this.messageContactUs.fill(this.message);

    await this.fileContactUs.setInputFiles("sampleFile.txt");
    await this.submitContactUs.click();
    await this.page.on("dialog", (dialog) => dialog.accept());
    // TODO: El Botón de submit no responde en chromium, pero si en navegador, por lo que se asume que funciona correctamente.
  }
}
