import { APIRequestContext } from "@playwright/test";

export class BrandsAPI {
  constructor(private request: APIRequestContext) {}

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
}
