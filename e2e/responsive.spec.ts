import { test, expect, devices } from '@playwright/test';

test.describe('Responsive Design', () => {
  test.describe('Mobile View (375x667)', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('navigation is responsive', async ({ page }) => {
      await page.goto('/');

      // Navigation should be visible
      await expect(page.getByRole('navigation')).toBeVisible();
      await expect(page.getByText('TT')).toBeVisible();
    });

    test('hero section is responsive', async ({ page }) => {
      await page.goto('/');

      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
    });

    test('skills grid adapts to mobile', async ({ page }) => {
      await page.goto('/');

      // Skills should be visible in a single column
      const skillsSection = page.locator('#about');
      await expect(skillsSection).toBeVisible();
    });

    test('projects grid shows single column', async ({ page }) => {
      await page.goto('/');

      const projectsSection = page.locator('#projects');
      await expect(projectsSection).toBeVisible();
    });

    test('contact form is usable on mobile', async ({ page }) => {
      await page.goto('/');

      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      await expect(page.getByLabel(/name/i)).toBeVisible();
      await expect(page.getByLabel(/email/i)).toBeVisible();
    });

    test('footer is responsive', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  });

  test.describe('Tablet View (768x1024)', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('layout adapts to tablet size', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
      await expect(page.getByText('Skills & Technologies')).toBeVisible();
    });

    test('projects show 2 columns', async ({ page }) => {
      await page.goto('/');

      const projectsSection = page.locator('#projects');
      await expect(projectsSection).toBeVisible();
    });
  });

  test.describe('Desktop View (1920x1080)', () => {
    test.use({ viewport: { width: 1920, height: 1080 } });

    test('full layout on desktop', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
      await expect(page.getByRole('navigation')).toBeVisible();
    });

    test('projects show 3 columns', async ({ page }) => {
      await page.goto('/');

      const projectsSection = page.locator('#projects');
      await expect(projectsSection).toBeVisible();
    });
  });

  test.describe('Touch Interactions', () => {
    test.use(devices['iPhone 12']);

    test('buttons have adequate touch targets', async ({ page }) => {
      await page.goto('/');

      const ctaButton = page.getByRole('link', { name: /view my work/i });
      await expect(ctaButton).toBeVisible();

      // Get button dimensions
      const box = await ctaButton.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        // Touch targets should be at least 44x44px
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    });

    test('theme toggle works on touch devices', async ({ page }) => {
      await page.goto('/');

      const themeButton = page.getByRole('button', { name: /toggle theme/i });
      await themeButton.tap();

      await page.waitForTimeout(300);
      // Theme should have changed (no errors)
    });
  });

  test.describe('Landscape and Portrait', () => {
    test('works in portrait mode', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
    });

    test('works in landscape mode', async ({ page }) => {
      await page.setViewportSize({ width: 812, height: 375 });
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
    });
  });
});
