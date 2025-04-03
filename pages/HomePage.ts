import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly loginButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButton = page.locator('a.login-button');
    this.searchInput = page.locator('#search-input');
    this.searchButton = page.locator('#search-button');
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForURL(/login/);
  }

  async searchForProduct(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async verifyHomePageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/KOSTU/);
    await expect(this.searchInput).toBeVisible();
  }
}