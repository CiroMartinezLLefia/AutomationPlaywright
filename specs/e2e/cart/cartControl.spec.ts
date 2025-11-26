import { test } from "@playwright/test";
import { cartControl } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/cartControl.ts";
import { checkout } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/checkout.ts";
import { loginRegister } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/loginRegister.ts";

test.beforeEach("Setup", async ({ page }) => {
  await page.goto("http://automationexercise.com");
});

test("Test Case 12: Add products to cart", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.addProduct();
});

test("Test Case 13: Add various of one product to cart", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.addManyProducts();
});

test("Test Case 14: Sign up on checkout", async ({ page }) => {
  const cart = new cartControl(page);
  const check = new checkout(page);
  const loginReg = new loginRegister(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.addProduct();

  // Opens checkOut and signs up from the checkout Pop-up
  await check.checkOut();
  await check.checkoutSignUp();

  await loginReg.signUp();

  // Goes to the cart page and checks out again, this time without sign up
  await cart.openPage.openCartPage();
  await check.checkOutVerifyAndBuy();
  // Deletes acc (Allows to loop the test without repeating credentials once you sign up again)
  await loginReg.deleteAccount();
});

test("Test Case 15: Sign up before checkout", async ({ page }) => {
  const cart = new cartControl(page);
  const check = new checkout(page);
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();

  // Signs up beforehand using loginRegister.ts
  await loginReg.signUp();

  // Buys products, we already signed up, so that step is skipped
  await cart.openPage.openProductsPage();
  // IMPORTANT adds product, since we skipped that part to sign up directly
  await cart.addProduct();
  await check.checkOutVerifyAndBuy();
  // Deletes acc (Allows to loop the test without repeating credentials once you sign up again)
  await loginReg.deleteAccount();
});

// THIS IS TO ALLOW CONTINOUS TESTING
test("DEBUG CASE 1: JUST sign up", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();
});

// For this test is mandatory to have signed up WITHOUT deleting the account after
test("Test Case 16: LOG in before checkout", async ({ page }) => {
  const cart = new cartControl(page);
  const check = new checkout(page);
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();

  // Logs in beforehand using loginRegister.ts
  await loginReg.logIn();

  // Buys products, we already logged in, so that step is skipped
  await cart.openPage.openProductsPage();
  // IMPORTANT adds product, since we skipped that part to logged in directly
  await cart.addProduct();
  await check.checkOutVerifyAndBuy();
  // Deletes acc (Allows to loop the test without repeating credentials once you sign up again)
  await loginReg.deleteAccount();
});

test("Test Case 17: Remove products from cart", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.addProduct();
  await cart.removeFromCart();
});

test("Test Case 18: View Category Products", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.verifyCategoriesAndBrands();
  await cart.gotoWomenAndMen();
});

test("Test Case 19: View and Cart Brand Products", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.verifyCategoriesAndBrands();
  await cart.gotoWomenAndMen();
  await cart.gotoBrands();
});

// THIS IS TO ALLOW CONTINOUS TESTING
test("DEBUG CASE 2: JUST sign up", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();
});

test("Test Case 20: Search Products and Cart After Login", async ({ page }) => {
  const cart = new cartControl(page);
  const loginReg = new loginRegister(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.verification.verifyProductSearch();
  await cart.addProduct();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.logIn();
  await cart.openPage.openCartPage();
});

test("Test Case 21: Add review", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.reviewProduct();
});

test("Test Case 22: Add to Cart from Recommended", async ({ page }) => {
  const cart = new cartControl(page);

  await cart.openPage.goto();
  await cart.addRecommended();
});

// THIS IS TO ALLOW CONTINOUS TESTING
test("DEBUG CASE 3: log and delete", async ({ page }) => {
  const loginReg = new loginRegister(page);

  await loginReg.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.logIn();
  await loginReg.deleteAccount();
});

// This test is a clone of Test case 15
// since we use credentials.ts, we already verify the adress details
test("Test Case 23: Verify Adress Details on Checkout", async ({ page }) => {
  const cart = new cartControl(page);
  const check = new checkout(page);
  const loginReg = new loginRegister(page);

  await cart.openPage.goto();
  await loginReg.openPage.openSignUpLoginPage();
  await loginReg.signUp();

  await cart.openPage.openProductsPage();
  await cart.addProduct();
  await check.checkOut();

  await loginReg.deleteAccount();
});

test("Test Case 24: Verify Adress Details on Checkout", async ({ page }) => {
  const cart = new cartControl(page);
  const check = new checkout(page);
  const loginReg = new loginRegister(page);

  await cart.openPage.goto();
  await cart.openPage.openProductsPage();
  await cart.addProduct();
  await check.checkOut();
  await check.checkoutSignUp();
  await loginReg.signUp();
  await cart.openPage.openCartPage();
  await check.checkOutVerifyAndBuy();
  await check.downloadAndDelete();
  await loginReg.deleteAccount();
});
