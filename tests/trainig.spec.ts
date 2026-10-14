

import { test, expect } from 'playwright/test';
//page = fixture
test('login sauce demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  //const title = page.locator('h1');
  //await expect(title).toHaveText('Example Domain');
});