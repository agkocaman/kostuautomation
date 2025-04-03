import { Page, Locator } from '@playwright/test';

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(`https://kostu.com.tr${path}`);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}