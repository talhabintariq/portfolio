import { test, expect } from '@playwright/test';

test.describe('Error Pages', () => {
  test('404 page displays correctly', async ({ page }) => {
    const response = await page.goto('/non-existent-page');

    // Should return 404 status
    expect(response?.status()).toBe(404);

    // Should display 404 page
    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByText(/page not found/i)).toBeVisible();
  });

  test('404 page has navigation options', async ({ page }) => {
    await page.goto('/non-existent-page');

    // Should have Go Home button
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();

    // Should have Go Back button
    await expect(page.getByRole('button', { name: /go back/i })).toBeVisible();
  });

  test('can navigate home from 404 page', async ({ page }) => {
    await page.goto('/non-existent-page');

    await page.getByRole('link', { name: /go home/i }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByText('Talha B. Tariq')).toBeVisible();
  });

  test('go back button works on 404 page', async ({ page }) => {
    // First navigate to home
    await page.goto('/');

    // Then navigate to 404 page
    await page.goto('/non-existent-page');

    // Click go back
    await page.getByRole('button', { name: /go back/i }).click();

    // Should be back at home
    await expect(page).toHaveURL('/');
  });

  test('404 page maintains theme', async ({ page }) => {
    await page.goto('/');

    // Set to dark mode
    const html = page.locator('html');
    await html.evaluate((el) => el.classList.add('dark'));

    // Navigate to 404
    await page.goto('/non-existent-page');

    // Should still be dark mode
    const isDark = await html.evaluate((el) => el.classList.contains('dark'));
    expect(isDark).toBe(true);
  });

  test('404 page has navigation bar', async ({ page }) => {
    await page.goto('/non-existent-page');

    // Navigation should still be visible
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText('TT')).toBeVisible();
  });
});
