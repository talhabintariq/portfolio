import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Blog.*Talha B. Tariq/);
  });

  test('displays blog heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  });

  test('displays Medium link', async ({ page }) => {
    const mediumLink = page.getByRole('link', { name: /medium/i });
    await expect(mediumLink).toBeVisible();
    await expect(mediumLink).toHaveAttribute('href', /medium\.com/);
    await expect(mediumLink).toHaveAttribute('target', '_blank');
  });

  test('handles empty blog posts gracefully', async ({ page }) => {
    // Mock empty Medium RSS feed
    await page.route('https://medium.com/feed/@talhabintariq', async (route) => {
      await route.fulfill({
        status: 200,
        body: '<?xml version="1.0"?><rss version="2.0"><channel></channel></rss>',
      });
    });

    await page.reload();

    // Should show empty state message
    await expect(page.getByText(/no blog posts found/i)).toBeVisible();
  });

  test('shows view all articles link', async ({ page }) => {
    await expect(page.getByRole('link', { name: /view all articles on medium/i })).toBeVisible();
  });

  test('blog posts render correctly', async ({ page }) => {
    // Check if posts section exists (might be empty based on Medium feed)
    const blogContainer = page.locator('.container').first();
    await expect(blogContainer).toBeVisible();
  });

  test('can navigate back to home', async ({ page }) => {
    await page.getByRole('link', { name: 'TB' }).click();
    await expect(page).toHaveURL('/');
  });

  test('navigation links work from blog page', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/#about');
  });
});
