import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Talha B. Tariq/);
  });

  test('displays hero section', async ({ page }) => {
    await expect(page.getByText('Talha B. Tariq')).toBeVisible();
    await expect(page.getByText(/Senior Frontend Engineer/i)).toBeVisible();
  });

  test('displays navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /toggle theme/i });
    await expect(themeButton).toBeVisible();

    // Get initial theme
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');

    // Toggle theme
    await themeButton.click();

    // Wait a bit for theme change
    await page.waitForTimeout(300);

    // Theme should have changed
    const newClass = await html.getAttribute('class');
    expect(newClass).not.toBe(initialClass);
  });

  test('navigates to blog page', async ({ page }) => {
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL('/blog');
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  });

  test('smooth scrolls to sections', async ({ page }) => {
    // Scroll to projects
    await page.getByRole('link', { name: 'Projects' }).click();
    await page.waitForTimeout(500);

    // Check if projects section is in viewport
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeInViewport();
  });

  test('displays skills section', async ({ page }) => {
    await expect(page.getByText('Skills & Technologies')).toBeVisible();
    await expect(page.getByText('Frontend')).toBeVisible();
    await expect(page.getByText('Backend')).toBeVisible();
  });

  test('displays projects section', async ({ page }) => {
    await expect(page.getByText('Featured Projects')).toBeVisible();

    // Check for at least one project
    await expect(page.getByText('Hope For Your Garden')).toBeVisible();
  });

  test('displays contact section', async ({ page }) => {
    await expect(page.getByText('Get In Touch')).toBeVisible();
    await expect(page.getByRole('textbox', { name: /name/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
  });

  test('footer displays social links', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: /github/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /linkedin/i })).toBeVisible();
  });

  test('external links open in new tab', async ({ page }) => {
    const githubLink = page.locator('footer').getByRole('link', { name: /github/i });
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
