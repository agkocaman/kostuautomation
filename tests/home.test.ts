import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test.describe('KOSTU Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate('/');
    await homePage.verifyHomePageLoaded();
  });

  test('Should have correct title', async () => {
    const title = await homePage.getTitle();
    expect(title).toContain('KOSTU');
  });

  test('Should navigate to login page', async () => {
    await homePage.clickLogin();
    await expect(homePage.page).toHaveURL(/login/);
  });
});