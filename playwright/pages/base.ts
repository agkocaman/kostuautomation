import { Page, Locator } from '@playwright/test';


export class BasePage {
   page: Page;
   loginButton: Locator;

   constructor(page: Page) {
      this.page = page;
      this.loginButton = page.locator('.btn-success');
   }
}