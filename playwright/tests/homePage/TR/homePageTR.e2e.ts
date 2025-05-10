import { expect } from '@playwright/test';
import { HomePage } from '../../../pages/homePage';
import { configEnv } from 'config/config'

let homePage: HomePage;
export const home = {
    beforeEach: async ({ page }) => {
        homePage = new HomePage(page);
    },
    E2E: {
        homePageTitle: {
            notes: 'home page title verification',
            tag: '',
            run: async ({ page }) => {
                await page.goto("");
                await expect(page).toHaveTitle(configEnv.titleTR);
            }
        },
        homePageToolbarContainer: {
            notes: 'Home toolbar container validation',
            tag: '',
            run: async ({ page }) => {
                await page.goto("");
                await expect(homePage.homePageHeader).toBeVisible();

                //contact info
                await expect(homePage.phoneNumber).toHaveText(configEnv.number);
                await expect(homePage.emailTxt).toHaveText(configEnv.email);

                //social media
                await expect(homePage.socialMedia.nth(0)).toBeVisible();
                await expect(homePage.socialMedia.nth(0).locator("> a")).toHaveAttribute('href', configEnv.facebook);
                await expect(homePage.socialMedia.nth(1).locator("> a")).toHaveAttribute('href', configEnv.twitter);
                await expect(homePage.socialMedia.nth(2).locator("> a")).toHaveAttribute('href', configEnv.instagram);
                await expect(homePage.socialMedia.nth(3).locator("> a")).toHaveAttribute('href', configEnv.linkedin);
                await expect(homePage.socialMedia.nth(4).locator("> a")).toHaveAttribute('href', configEnv.youtube);

                //prospective student TR
                await expect(homePage.prospectiveStudentLbl).toBeVisible();
                await expect(homePage.prospectiveStudentLbl.locator('> * a')).toHaveAttribute('href', configEnv.prospectiveStudentUrlTR);
                await expect(homePage.prospectiveStudentLbl.locator('> * a')).toContainText(configEnv.prospectiveStudentTR);


                //search
                await expect(homePage.searchBtn).toBeVisible();
                await homePage.searchInput.click();
                await expect(homePage.searchInput).toBeVisible();
                await homePage.searchInput.fill('test');
                await homePage.searchInput.press('Enter');
                await expect(page).toHaveURL('https://kocaelisaglik.edu.tr/?s=test');
                await expect(homePage.searchResultsH1).toBeVisible();
                await expect(homePage.searchResultsH1).toContainText('test için Arama Sonuçları:');
                await page.goBack();

            }
        }

    }
}