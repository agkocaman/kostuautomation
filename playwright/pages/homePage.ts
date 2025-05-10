import { Page, Locator, expect } from '@playwright/test';


export class HomePage {
   page: Page;
   loginButton: Locator;
   trLangBtn: Locator;
   enLangBtn: Locator;
   phoneNumber: Locator;
   homePageHeader: Locator;
   emailTxt: Locator;
   socialMedia: Locator;
   prospectiveStudentLbl: Locator;
   searchBtn: Locator;
   searchInput: Locator;
   searchResultsH1: Locator;

   constructor(page: Page) {
      this.page = page;
      this.loginButton = page.locator('.btn-success');
      this.trLangBtn = page.locator('a[lang="tr-TR"]');
      this.enLangBtn = page.locator('a[lang="en-GB"]');
      this.phoneNumber = page.locator('.value');
      this.homePageHeader = page.locator('#masthead');
      this.emailTxt = page.locator('.email');
      this.socialMedia = page.locator('.social-accounts > li');
      this.prospectiveStudentLbl = page.locator('.aday-ogrenci-widget');
      this.searchBtn = page.locator('.search-form');
      this.searchInput = page.locator('.search-field');
      this.searchResultsH1 = page.locator('.kostu-title-overflow');

   }

   async langTr() {
      await expect(this.trLangBtn).toBeVisible();
      await this.trLangBtn.click();
   }
      async langEn() {
      await expect(this.enLangBtn).toBeVisible();
      await this.enLangBtn.click();
   }
}