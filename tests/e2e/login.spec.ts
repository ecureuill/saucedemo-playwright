// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import data from '../fixtures/data/users.json';
// import { InventoryPage } from '../pages/InventoryPage';
// let loginPage: LoginPage;

// test.use({ storageState: { cookies: [], origins: [] } });

// test.beforeEach(async ({page}) => {
//   loginPage = new LoginPage(page);
//   await loginPage.visit();
//   await loginPage.toBe();
// })

// test.describe('login feature', () => {
//   test('should login', async ({ page }) => {
//     await loginPage.formComponent.fill(data.success);
//     await loginPage.formComponent.submit()
//     await new InventoryPage(page).toBe();
//   });

//   test('should login with visual user', async ({ page }) => {
//     await loginPage.formComponent.fill(data.visual_user);
//     await loginPage.formComponent.submit()
//     await new InventoryPage(page).toBe();
//   });

//   test('should login with error user', async ({ page }) => {
//     await loginPage.formComponent.fill(data.error_user);
//     await loginPage.formComponent.submit()
//     await new InventoryPage(page).toBe();
//   });

//   test('should login with problem user', async ({ page }) => {
//     await loginPage.formComponent.fill(data.problem_user);
//     await loginPage.formComponent.submit()
//     await new InventoryPage(page).toBe();
//   });

//   test('should login with performance user', async ({ page }) => {
//     await loginPage.formComponent.fill(data.performance_user);
//     await loginPage.formComponent.submit()
//     await new InventoryPage(page).toBe();
//   });
  
//   test('should not login with wrong credentials', async({page}) => {
//     await loginPage.formComponent.fill(data.bad_credential);
//     await loginPage.formComponent.submit()
//     await loginPage.validateErrorUX();
//     await loginPage.formComponent.errorComponent.hasMessage('Username and password do not match any user in this service');
//   })
  
//   test('should not login with locked user', async({page}) => {
//     await loginPage.formComponent.fill(data.locked_user);
//     await loginPage.formComponent.submit()
//     await loginPage.validateErrorUX();
//     await loginPage.formComponent.errorComponent.hasMessage('Sorry, this user has been locked out.');
//   })
  
//   test('should not login with empty user', async({page}) => {
//     await loginPage.formComponent.fill(data.empty_user);
//     await loginPage.formComponent.submit()
//     await loginPage.validateErrorUX();
//     await loginPage.formComponent.errorComponent.hasMessage('Username is required');
//   })
  
//   test('should not login with empty password', async({page}) => {
//     await loginPage.formComponent.fill(data.empty_password);
//     await loginPage.formComponent.submit()
//     await loginPage.validateErrorUX();
//     await loginPage.formComponent.errorComponent.hasMessage('Password is required');
//   })
  
//   test('should not login with empty credential', async({page}) => {
//     await loginPage.formComponent.fill(data.empty_credential);
//     await loginPage.formComponent.submit()
//     await loginPage.validateErrorUX();
//     await loginPage.formComponent.errorComponent.hasMessage('Username is required');
//   })
// })