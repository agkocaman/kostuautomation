import { expect } from '@playwright/test';
import { BasePage } from '../pages/base';

let basePage: BasePage;
export const base = {
    beforeEach: async ({ page }) => {
        basePage = new BasePage(page);
    },
    E2E: {
       loginTest: {
            notes: 'Login',
            tag: '',
            run: async ({ page }) => {
                await page.goto("HYS/#/signin");
                await expect(basePage.loginButton).toBeVisible();
            }
        }
    }
}