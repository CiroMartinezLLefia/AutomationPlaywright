import { APIRequestContext } from "@playwright/test";

export class ProductsAPI {
  constructor(private request: APIRequestContext) {}

  async getAllProductsList() {
    return await this.request.get(
      "https://automationexercise.com/api/productsList"
    );
  }

  async postAllProductsList() {
    return await this.request.post(
      "https://automationexercise.com/api/productsList"
    );
  }

  async getAllBrandsList() {
    return await this.request.get(
      "https://automationexercise.com/api/brandsList"
    );
  }

  async putAllBrandsList() {
    return await this.request.put(
      "https://automationexercise.com/api/brandsList"
    );
  }

  async searchProduct(searchTerm: string) {
    return await this.request.post(
      "https://automationexercise.com/api/searchProduct",
      {
        form: {
          search_product: searchTerm,
        },
      }
    );
  }

  async searchProductEmpty() {
    return await this.request.post(
      "https://automationexercise.com/api/searchProduct"
    );
  }
}
