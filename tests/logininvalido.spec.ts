const { test, expect } = require('@playwright/test');

test('Manejar alerta simple', async ({ page }) => {
  // 1. Escuchar el evento de diálogo antes de hacer clic
  page.on('dialog', async (dialog) => {
    console.log('alert', dialog.type()); // "alert", "confirm" o "prompt"
    console.log('Invalid credentials', dialog.message()); // Obtener el texto

    // 2. Aceptar la alerta (equivalente a hacer clic en "Aceptar" / "OK")
    await dialog.accept(); 
    // O si fuera un confirm y quisieras cancelar: await dialog.dismiss();
    // O si fuera un prompt y quisieras escribir texto: await dialog.accept('Mi texto');
  });

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
  // 3. Hacer clic en el botón que activa la alerta
  await page.locator('button:has-text("Login")').click();
});