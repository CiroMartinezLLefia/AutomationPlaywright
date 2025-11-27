import { APIRequestContext } from "@playwright/test";

export class AccountManagementAPI {
  constructor(private request: APIRequestContext) {}

  async verifyLogin(email: string, password: string) {
    return await this.request.post(
      "https://automationexercise.com/api/verifyLogin",
      {
        form: {
          email,
          password,
        },
      }
    );
  }

  async verifyLoginNoEmail(password: string) {
    return await this.request.post(
      "https://automationexercise.com/api/verifyLogin",
      {
        form: {
          password,
        },
      }
    );
  }

  async verifyLoginDelete() {
    return await this.request.delete(
      "https://automationexercise.com/api/verifyLogin"
    );
  }

  async verifyLoginInvalid(email: string, password: string) {
    return await this.request.post(
      "https://automationexercise.com/api/verifyLogin",
      {
        form: {
          email,
          password,
        },
      }
    );
  }

  async createAccount(accountData: Record<string, string>) {
    return await this.request.post(
      "https://automationexercise.com/api/createAccount",
      {
        form: accountData,
      }
    );
  }

  async deleteAccount(email: string, password: string) {
    return await this.request.delete(
      "https://automationexercise.com/api/deleteAccount",
      {
        form: {
          email,
          password,
        },
      }
    );
  }

  async updateAccount(accountData: Record<string, string>) {
    return await this.request.put(
      "https://automationexercise.com/api/updateAccount",
      {
        form: accountData,
      }
    );
  }

  async getUserDetailByEmail(email: string) {
    return await this.request.post(
      "https://automationexercise.com/api/getUserDetailByEmail",
      {
        form: {
          email,
        },
      }
    );
  }
}
