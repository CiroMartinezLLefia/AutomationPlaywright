import { expect, test } from "@playwright/test";
import { ProductsAPI } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/integration/products.ts";

let productsAPI: ProductsAPI;

test.beforeEach(({ request }) => {
  productsAPI = new ProductsAPI(request);
});

test("API test 1: Get ALL Products List", async () => {
  const response = await productsAPI.getAllProductsList();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

test("API test 2: Post ALL Products List", async () => {
  const response = await productsAPI.postAllProductsList();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 405,
    message: "This request method is not supported.",
  });
  console.log(responseBody);
});

test("API test 3: Get ALL brands List", async () => {
  const response = await productsAPI.getAllBrandsList();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

test("API test 4: PUT to ALL brands List", async () => {
  const response = await productsAPI.putAllBrandsList();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 405,
    message: "This request method is not supported.",
  });
  console.log(responseBody);
});

test("API test 5: Post SEARCH Products List", async () => {
  const response = await productsAPI.searchProduct("top");
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

test("API test 6: Post SEARCH (!search_product)", async () => {
  const response = await productsAPI.searchProductEmpty();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 400,
    message:
      "Bad request, search_product parameter is missing in POST request.",
  });
  console.log(responseBody);
});
