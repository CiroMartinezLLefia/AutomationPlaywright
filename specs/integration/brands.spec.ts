import { expect, test } from "@playwright/test";
import { BrandsAPI } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/integration/brands.ts";

let brandsAPI: BrandsAPI;

test.beforeEach(({ request }) => {
  brandsAPI = new BrandsAPI(request);
});

test("API test 3: Get ALL brands List", async () => {
  const response = await brandsAPI.getAllBrandsList();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

test("API test 4: PUT to ALL brands List", async () => {
  const response = await brandsAPI.putAllBrandsList();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 405,
    message: "This request method is not supported.",
  });
  console.log(responseBody);
});
