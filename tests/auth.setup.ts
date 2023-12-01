import {test as setup} from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import data from "./fixtures/data/users.json";
import { STORAGE_STATE } from "../playwright.config";
let loginPage: LoginPage;

setup('authenticate', async({page}) => {
  loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.formComponent.fill(data.success);
  await loginPage.formComponent.submit();
  await page.waitForLoadState('networkidle');

  await page.context().storageState({path: STORAGE_STATE});
})