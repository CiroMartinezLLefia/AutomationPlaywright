import { type Page } from "@playwright/test";

// CREDENTIAL LIST
// TODO: Move the credentials to .env
export class credentials {
  readonly page: Page;

  readonly username: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly companySignUp: string;
  readonly address1SignUp: string;
  readonly address2SignUp: string;
  readonly countrySignUp: string;
  readonly stateSignUp: string;
  readonly citySignUp: string;
  readonly zipCodeSignUp: string;
  readonly mobileNumberSignUp: string;

  readonly nameOnCard: string;
  readonly cardNumber: string;
  readonly cvc: string;
  readonly expirationDateMonth: string;
  readonly expirationDateYear: string;

  constructor(page: Page) {
    this.page = page;
    this.username = "Testing11";
    this.name = "Testing";
    this.lastName = "Automation";
    this.email = "testing11@mail.com";
    this.password = "Password";
    this.companySignUp = "Testing Company";
    this.address1SignUp = "123 Testing St";
    this.address2SignUp = "Suite 100";
    this.countrySignUp = "Canada";
    this.stateSignUp = "Test State";
    this.citySignUp = "Test City";
    this.zipCodeSignUp = "A1B2C3";
    this.mobileNumberSignUp = "1234567890";

    this.nameOnCard = "Card Test Name";
    this.cardNumber = "ES12 3456 7890 1234";
    this.cvc = "123";
    this.expirationDateMonth = "12";
    this.expirationDateYear = "2030";
  }
}
