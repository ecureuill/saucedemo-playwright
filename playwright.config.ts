import { defineConfig, devices } from '@playwright/test';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
export const STORAGE_STATE_DEFAULT_USER = path.join(__dirname, 'playwright/.auth/user.json');
export const STORAGE_STATE_PROBLEM_USER = path.join(__dirname, 'playwright/.auth/problemUser.json');
export const STORAGE_STATE_VISUAL_USER = path.join(__dirname, 'playwright/.auth/visualUser.json');
export const STORAGE_STATE_ERROR_USER = path.join(__dirname, 'playwright/.auth/errorUser.json');
export const STORAGE_STATE_PERFORMANCE_USER = path.join(__dirname, 'playwright/.auth/performanceUser.json');

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.saucedemo.com',

    /* Capture failure artifacts for faster debugging in local and CI runs. */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.ts'
    },
    {
      name: 'e2e login',
      testMatch: 'login.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
      }
    },
    {
      name: 'e2e standard user',
      testMatch: '**/e2e/*.spec.ts',
      testIgnore: '**/e2e/login.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE_DEFAULT_USER
      },
      dependencies: ['setup'],
    },
    // {
    //   name: 'e2e problem user',
    //   testMatch: '**/e2e/*.spec.ts',
    //   testIgnore: '**/e2e/login.spec.ts',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: STORAGE_STATE_PROBLEM_USER
    //   },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'e2e visual user',
    //   testMatch: '**/e2e/*.spec.ts',
    //   testIgnore: '**/e2e/login.spec.ts',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: STORAGE_STATE_VISUAL_USER
    //   },
    //   dependencies: ['setup'],
    // },
    {
      name: 'e2e error user',
      testMatch: '**/e2e/*.spec.ts',
      testIgnore: '**/e2e/login.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE_ERROR_USER
      },
      dependencies: ['setup'],
    },
    // {
    //   name: 'e2e performance user',
    //   testMatch: '**/e2e/*.spec.ts',
    //   testIgnore: '**/e2e/login.spec.ts',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: STORAGE_STATE_PERFORMANCE_USER
    //   },
    //   dependencies: ['setup'],
    // },
    {
      name: 'visual on Desktop Chrome',
      testMatch: '**/visual/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
      }
    },
    {
      name: 'visual on Pixel 5',
      testMatch: '**/visual/*.spec.ts',
      use: {
        ...devices['Pixel 5'],
      }
    },
    {
      name: 'visual on iPhone 12',
      testMatch: '**/visual/*.spec.ts',
      use: {
        ...devices['iPhone 12'],
      }
    },
    /* UI Test */
    {
      name: 'UI on Desktop Chrome',
      testMatch: '**/ui/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE_DEFAULT_USER
      },
      dependencies: ['setup'],
    },
    {
      name: 'UI on Desktop Firefox',
      testMatch: '**/ui/*.spec.ts',
      use: {
        ...devices['Desktop Firefox'],
        storageState: STORAGE_STATE_DEFAULT_USER
      },
      dependencies: ['setup'],
    },
    {
      name: 'UI on Desktop Safari',
      testMatch: '**/ui/*.spec.ts',
      use: {
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE_DEFAULT_USER
      },
      dependencies: ['setup'],
    },
    {
      name: 'UI on Pixel 5',
      testMatch: '**/ui/*.spec.ts',
      grepInvert: /@responsive/,
      use: {
        ...devices['Pixel 5'],
        storageState: STORAGE_STATE_DEFAULT_USER
      },
      dependencies: ['setup'],
    },
    {
      name: 'UI on Iphone 12',
      testMatch: '**/ui/*.spec.ts',
      grepInvert: /@responsive/,
      use: {
        ...devices['iPhone 12'],
        storageState: STORAGE_STATE_DEFAULT_USER
      },
      dependencies: ['setup'],
    }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
