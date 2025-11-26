import { expect, type Locator, type Page } from "@playwright/test";
import { openPages } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/openPages.ts";
import { verify } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/verify.ts";
import { credentials } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/e2e/credentials.ts";

export class cartControl {
  readonly openPage: openPages;
  readonly credentialHolder = credentials;
  readonly verification: verify;
  readonly page: Page;

  addToCartBtn: Locator;
  removeFromCartBtn: Locator;
  viewProductBtn: Locator;
  idProduct: number;
  cartRow: Locator;

  readonly continueShoppingBtn: Locator;
  readonly viewCartBtn: Locator;

  readonly product: Locator;
  readonly productQuantity: Locator;
  readonly innerAddToCartBtn: Locator;
  readonly womenCategoryBtn: Locator;
  readonly womenSubCategoryBtn: Locator;
  readonly menCategoryBtn: Locator;
  readonly menSubCategoryBtn: Locator;

  readonly brand1CategoryBtn: Locator;
  readonly brand2CategoryBtn: Locator;

  readonly nameReviewInput: Locator;
  readonly emailReviewInput: Locator;
  readonly textReviewInput: Locator;
  readonly submitReviewBtn: Locator;

  readonly addRecommendedBtn: Locator;

  constructor(page: Page) {
    this.openPage = new openPages(page);
    this.verification = new verify(page);
    this.page = page;

    // NON-READONLY VARIABLES
    // Set Product ID (TODO: redundant)
    this.idProduct = 1;

    // NON-READONLY LOCATORS
    // Set addToCartBtn and removeFromCartBtn based on Product ID (TODO: redundant)
    this.addToCartBtn = page.locator(
      `//a[@data-product-id='${this.idProduct}']`
    );
    this.removeFromCartBtn = page.locator(
      `#product-${this.idProduct} > .cart_delete > .cart_quantity_delete`
    );
    // Select the row on the cart table based on Product ID (TODO: redundant)
    this.cartRow = page.locator(`//tr[@id='product-${this.idProduct}']`);

    this.viewProductBtn = page.locator(
      `//a[@href='/product_details/${this.idProduct}']`
    );

    // READONLY LOCATORS
    this.continueShoppingBtn = page.locator(
      "//button[@class='btn btn-success close-modal btn-block']"
    );
    this.viewCartBtn = page.getByText("View Cart");
    this.product = page.locator("//a[@href='/product_details/1']");
    this.productQuantity = page.locator("//input[@id='quantity']");
    this.innerAddToCartBtn = page.getByText("Add to cart");
    this.womenCategoryBtn = page.locator("//a[@href='#Women']");
    this.womenSubCategoryBtn = page.locator(
      "//a[@href='/category_products/1']"
    );
    this.menCategoryBtn = page.locator("//a[@href='#Men']");
    this.menSubCategoryBtn = page.locator("//a[@href='/category_products/3']");

    this.brand1CategoryBtn = page.locator("//a[@href='/brand_products/Polo']");
    this.brand2CategoryBtn = page.locator("//a[@href='/brand_products/H&M']");

    this.nameReviewInput = page.getByRole("textbox", { name: "Your Name" });
    this.emailReviewInput = page.getByRole("textbox", {
      name: "Email Address",
      exact: true,
    });
    this.textReviewInput = page.getByRole("textbox", {
      name: "Add Review Here!",
    });

    this.submitReviewBtn = page.locator("//button[@id='button-review']");

    this.addRecommendedBtn = page
      .locator(
        ".item.active > div > .product-image-wrapper > .single-products > .productinfo > .btn"
      )
      .first();
  }

  // Adds the Product 1 and 16 to the cart, then opens the cart page and verifies products
  async addProduct() {
    await this.addToCartBtn.first().click();

    this.idProduct = 1;
    this.addToCartBtn = this.page.locator(
      `//a[@data-product-id='${this.idProduct}']`
    );
    await this.continueShoppingBtn.click();

    this.idProduct = 16;
    this.addToCartBtn = this.page.locator(
      `//a[@data-product-id='${this.idProduct}']`
    );
    await this.addToCartBtn.first().click();

    await expect(
      this.page.getByText("Your product has been added to cart.")
    ).toBeVisible();

    await this.viewCartBtn.click();

    // TODO REDUNDANCY: START
    this.idProduct = 1;
    this.cartRow = this.page.locator(`//tr[@id='product-${this.idProduct}']`);

    await expect(
      this.cartRow.filter({
        has: this.page.getByRole("button", { name: "1" }),
      })
    ).toBeVisible();
    console.log(this.cartRow);

    this.idProduct = 16;
    this.cartRow = this.page.locator(`//tr[@id='product-${this.idProduct}']`);

    await expect(
      this.cartRow.filter({
        has: this.page.getByRole("button", { name: "1" }),
      })
    ).toBeVisible();
    console.log(this.cartRow);
  }
  // TODO REDUNDANCY: END
  // Repeated functions and weak idProduct Variable

  // Adds 4 products of a product based on idProduct
  async addManyProducts() {
    await this.product.click();

    await this.productQuantity.fill("4");
    await this.innerAddToCartBtn.click();
    await this.viewCartBtn.click();

    // TODO REDUNDANCY: START
    this.idProduct = 1;
    this.cartRow = this.page.locator(`//tr[@id='product-${this.idProduct}']`);
    await expect(
      this.cartRow.filter({
        has: this.page.getByRole("button", { name: "4" }),
      })
    ).toBeVisible();
    // TODO REDUNDANCY: END
  }

  async removeFromCart() {
    this.idProduct = 1;
    await this.removeFromCartBtn.click();
  }

  async verifyCategoriesAndBrands() {
    await expect(this.page.getByRole("heading", { name: "Category" }))
      .toBeVisible;
    await expect(this.page.getByRole("heading", { name: "Brands" }))
      .toBeVisible;
  }

  async gotoWomenAndMen() {
    await this.womenCategoryBtn.click();
    await this.womenSubCategoryBtn.click();
    await expect(
      this.page.getByRole("heading", { name: "Women - Dress Products" })
    ).toBeVisible;
    await this.menCategoryBtn.click();
    await this.menSubCategoryBtn.click();
    await expect(
      this.page.getByRole("heading", { name: "Men - Tshirts Products" })
    ).toBeVisible;
  }

  async gotoBrands() {
    //TODO: NOT USE TWO DIFFERENT LOCATORS
    await this.brand1CategoryBtn.click();
    await expect(
      this.page.getByRole("heading", { name: "Brand - Polo Products" })
    ).toBeVisible;
    await this.brand2CategoryBtn.click();
    await expect(
      this.page.getByRole("heading", { name: "Brand - H&M Products" })
    ).toBeVisible;
  }

  async reviewProduct() {
    this.idProduct = 1;
    this.viewProductBtn = this.page.locator(
      `//a[@href='/product_details/${this.idProduct}']`
    );

    await this.viewProductBtn.click();
    await expect(this.page.getByText("Write Your Review")).toBeVisible();

    await this.nameReviewInput.fill(this.credentialHolder.name);
    await this.emailReviewInput.fill(this.credentialHolder.email);
    await this.textReviewInput.fill("This is a review");
    await this.submitReviewBtn.click();
    await expect(
      this.page.getByText("Thank you for your review.")
    ).toBeVisible();
  }

  async addRecommended() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(this.page.getByRole("heading", { name: "RECOMMENDED ITEMS" }))
      .toBeVisible;

    await this.addRecommendedBtn.click();
    await this.viewCartBtn.click();
    await expect(this.page.getByText("Stylish Dress")).toBeVisible();
  }
}
