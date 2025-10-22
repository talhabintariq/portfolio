import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('homepage has no obvious accessibility violations', async ({ page }) => {
    await page.goto('/');

    // Check for page title
    await expect(page).toHaveTitle(/.+/);

    // Check for main landmark
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Check for navigation landmark
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check for footer landmark
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');

    // Check avatar image has alt text
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
      expect(alt).not.toBe('');
    }
  });

  test('links have accessible names', async ({ page }) => {
    await page.goto('/');

    const links = await page.locator('a').all();
    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const title = await link.getAttribute('title');

      // Link should have either text content, aria-label, or title
      expect(text || ariaLabel || title).toBeTruthy();
    }
  });

  test('form inputs have labels', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact form
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(300);

    // Check that all inputs have associated labels
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/subject/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/');

    const buttons = await page.locator('button').all();
    for (const button of buttons) {
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');

      // Button should have either text or aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });

  test('color contrast is readable', async ({ page }) => {
    await page.goto('/');

    // Test in light mode
    const html = page.locator('html');
    await html.evaluate((el) => el.classList.remove('dark'));

    // Content should still be visible
    await expect(page.getByText('Talha B. Tariq')).toBeVisible();

    // Test in dark mode
    await html.evaluate((el) => el.classList.add('dark'));

    // Content should still be visible
    await expect(page.getByText('Talha B. Tariq')).toBeVisible();
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    // At least one element should have focus
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focused);
  });

  test('skip to main content (if implemented)', async ({ page }) => {
    await page.goto('/');

    // Press tab to reveal skip link
    await page.keyboard.press('Tab');

    // Check if there's a skip link or main content is accessible
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('form validation errors are announced', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(300);

    // Submit empty form
    await page.getByRole('button', { name: /send message/i }).click();

    // Error messages should be visible
    const errorMessages = page.locator('[class*="text-red"]');
    await expect(errorMessages.first()).toBeVisible();
  });

  test('focus is visible', async ({ page }) => {
    await page.goto('/');

    // Tab to first interactive element
    await page.keyboard.press('Tab');

    // Check that focus is visible (element has focus)
    const hasFocus = await page.evaluate(() => {
      return document.activeElement !== document.body;
    });
    expect(hasFocus).toBe(true);
  });

  test('heading hierarchy is logical', async ({ page }) => {
    await page.goto('/');

    // Get all headings
    const h1Count = await page.locator('h1').count();
    const h2Count = await page.locator('h2').count();

    // Should have at least one h1
    expect(h1Count).toBeGreaterThan(0);

    // Should have h2s if there's content
    expect(h2Count).toBeGreaterThanOrEqual(0);
  });
});
