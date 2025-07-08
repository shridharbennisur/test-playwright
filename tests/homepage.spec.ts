import { test, expect } from '@playwright/test';

test('Lowe’s homepage loads and header is visible', async ({ page }) => {
  await page.goto('https://www.lowes.com');
  await expect(page).toHaveTitle(/Lowe’s Home Improvement/);
});
