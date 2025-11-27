import { expect, test } from "@playwright/test";
import { AccountManagementAPI } from "/Users/cmartinezm/Desktop/AutomationPlaywright/components/integration/accountManagement.ts";

let accountAPI: AccountManagementAPI;

test.beforeEach(({ request }) => {
  accountAPI = new AccountManagementAPI(request);
});

test("API test 8: POST To Verify Login no email", async () => {
  const response = await accountAPI.verifyLoginNoEmail(
    process.env.PASSWORD as string
  );
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 400,
    message:
      "Bad request, email or password parameter is missing in POST request.",
  });
  console.log(responseBody);
});

test("API test 9: DELETE To Verify Login", async () => {
  const response = await accountAPI.verifyLoginDelete();
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 405,
    message: "This request method is not supported.",
  });
  console.log(responseBody);
});

test("API test 10: POST To Verify Login !validdetails", async () => {
  const response = await accountAPI.verifyLoginInvalid("INVALIDO", "INVALIDO");
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 404,
    message: "User not found!",
  });
  console.log(responseBody);
});

test("API test 11: POST To Create Account", async () => {
  const response = await accountAPI.createAccount({
    name: process.env.USERNAME as string,
    email: process.env.EMAIL as string,
    password: process.env.PASSWORD as string,
    title: "Mr",
    birth_date: "10",
    birth_month: "May",
    birth_year: "1990",
    firstname: process.env.NAME as string,
    lastname: process.env.LAST_NAME as string,
    company: process.env.COMPANY as string,
    address1: process.env.ADDRESS1 as string,
    address2: process.env.ADDRESS2 as string,
    country: process.env.COUNTRY as string,
    zipcode: process.env.ZIPCODE as string,
    state: process.env.STATE as string,
    city: process.env.CITY as string,
    mobile_number: process.env.MOBILE_NUMBER as string,
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 201,
    message: "User created!",
  });
  console.log(responseBody);
});

test("API test 7: POST To Verify Login", async () => {
  const response = await accountAPI.verifyLogin(
    process.env.EMAIL as string,
    process.env.PASSWORD as string
  );
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 200,
    message: "User exists!",
  });
  console.log(responseBody);
});

test("API test 13: PUT METHOD To Update User Account", async () => {
  const response = await accountAPI.updateAccount({
    name: process.env.USERNAME as string,
    email: process.env.EMAIL as string,
    password: process.env.PASSWORD as string,
    title: "Mr",
    birth_date: "122",
    birth_month: "122",
    birth_year: "122",
    firstname: process.env.NAME as string,
    lastname: process.env.LAST_NAME as string,
    company: process.env.COMPANY as string,
    address1: process.env.ADDRESS1 as string,
    address2: process.env.ADDRESS2 as string,
    country: process.env.COUNTRY as string,
    zipcode: process.env.ZIPCODE as string,
    state: process.env.STATE as string,
    city: process.env.CITY as string,
    mobile_number: process.env.MOBILE_NUMBER as string,
  });
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 200,
    message: "User updated!",
  });
  console.log(responseBody);
});

test("API test 14: GET To Account Details", async () => {
  const response = await accountAPI.getUserDetailByEmail(
    process.env.EMAIL as string
  );
  const responseBody = await response.json();
  console.log(responseBody);
});

test("API test 12: DELETE To Delete User Account", async () => {
  const response = await accountAPI.deleteAccount(
    process.env.EMAIL as string,
    process.env.PASSWORD as string
  );
  const responseBody = await response.json();
  expect(responseBody).toEqual({
    responseCode: 200,
    message: "Account deleted!",
  });
  console.log(responseBody);
});
