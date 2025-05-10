import { devices, defineConfig } from "@playwright/test";
import { configEnv } from './config/config'
export default defineConfig({
  retries: 2,
  workers: process.env.CI ? 2 : undefined,
  fullyParallel: true,
  timeout: 210 * 1000,
  expect: {
    timeout: 40 * 1000
  },
  reporter: [
    ['html', { outputFolder: 'report' }]],
  use: {
    headless: true,
    baseURL: configEnv.baseURL,
    trace: 'retain-on-failure',
    actionTimeout: 40000,
    navigationTimeout: 70000,
  },
  projects: [
    {
      name: "chromeTR",
      use: {
        ...devices["Chrome"],
        viewport: { width: 1920, height: 1080 },
        locale: 'tr-TR',
        timezoneId: 'Europe/Istanbul',
        geolocation: { latitude: 41.0082, longitude: 28.9784 },
        permissions: ['geolocation']
      }
    },
    {
      name: "chromeEN",
      use: {
        ...devices["Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Firefox"],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices["Webkit"],
      },
    },
    {
      name: 'mobile',
      use: {
        ignoreHTTPSErrors: true,
        bypassCSP: true,
        ...devices["iPhone 14 Pro Max"],

      },
    },

  ],

});