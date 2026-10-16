import { test, expect } from 'playwright/test';
test ('obtenerUsernameRegistrados', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link',{name: 'Admin'}).click();
  await page.getByRole('navigation',{name:'Topbar Menu'}).getByText('User Management').click();
  await page.getByRole('menuitem',{name:'Users'}).click();
  const rows =page.getByRole('table').getByRole('row');
  const Employees: string[] = [];
  const rowCount = await rows.count();
  for (let i = 1; i < rowCount; i++) {
    const cell = rows.nth(i+2).getByRole('cell').nth(1+2);
    const EmployeeName = await cell.textContent();
    if (EmployeeName) {
      Employees.push(EmployeeName);
    }
    //usernames.push(EmployeeName);
  }
  console.log(Employees);
  //await expect(page.getByRole('link',{name: 'Admin'})).toBeVisible()
  //const username = await page.getByRole('textbox', { name: 'Username' }).inputValue();
  //console.log('Username registrado:', username);
});