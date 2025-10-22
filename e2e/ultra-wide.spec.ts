import { test, expect } from '@playwright/test';

test.describe('Ultra-Wide Monitor Support', () => {
  test.describe('2560px Display (2K Ultra-Wide)', () => {
    test.use({ viewport: { width: 2560, height: 1440 } });

    test('content is centered on ultra-wide display', async ({ page }) => {
      await page.goto('/');

      // Get the main container
      const container = page.locator('.container').first();
      await expect(container).toBeVisible();

      // Check that container has max-width and is centered
      const containerBox = await container.boundingBox();
      expect(containerBox).not.toBeNull();

      if (containerBox) {
        // Container should not span full width (should have max-width)
        expect(containerBox.width).toBeLessThanOrEqual(1280);

        // Container should be centered (have equal margins on both sides)
        // Calculate left margin
        const leftMargin = containerBox.x;
        // Calculate right margin
        const rightMargin = 2560 - (containerBox.x + containerBox.width);

        // Margins should be roughly equal (within a few pixels for padding)
        expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(50);
      }
    });

    test('all sections are properly centered', async ({ page }) => {
      await page.goto('/');

      const sections = await page.locator('section').all();

      for (const section of sections) {
        const container = section.locator('.container').first();
        const box = await container.boundingBox();

        if (box) {
          // Each section's container should not exceed max-width
          expect(box.width).toBeLessThanOrEqual(1280);
        }
      }
    });

    test('navigation spans full width but content is centered', async ({ page }) => {
      await page.goto('/');

      // Navigation bar should span full width
      const nav = page.locator('nav');
      const navBox = await nav.boundingBox();

      if (navBox) {
        expect(navBox.width).toBeGreaterThan(2500);
      }

      // But navigation content should be centered
      const navContainer = nav.locator('.container');
      const navContainerBox = await navContainer.boundingBox();

      if (navContainerBox) {
        expect(navContainerBox.width).toBeLessThanOrEqual(1280);
      }
    });

    test('footer spans full width but content is centered', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      const footerBox = await footer.boundingBox();

      if (footerBox) {
        expect(footerBox.width).toBeGreaterThan(2500);
      }

      // Footer content should be centered
      const footerContainer = footer.locator('.container');
      const footerContainerBox = await footerContainer.boundingBox();

      if (footerContainerBox) {
        expect(footerContainerBox.width).toBeLessThanOrEqual(1280);
      }
    });

    test('no horizontal scrolling on ultra-wide', async ({ page }) => {
      await page.goto('/');

      // Check that body doesn't cause horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.viewportSize();

      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth?.width || 2560);
    });
  });

  test.describe('3440px Display (Ultra-Wide Gaming Monitor)', () => {
    test.use({ viewport: { width: 3440, height: 1440 } });

    test('content remains centered on 3440px display', async ({ page }) => {
      await page.goto('/');

      const container = page.locator('.container').first();
      const containerBox = await container.boundingBox();

      if (containerBox) {
        // Container should have max-width
        expect(containerBox.width).toBeLessThanOrEqual(1280);

        // Should be centered
        const leftMargin = containerBox.x;
        const rightMargin = 3440 - (containerBox.x + containerBox.width);
        expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(50);
      }
    });

    test('content is readable and not stretched', async ({ page }) => {
      await page.goto('/');

      // Text should not be extremely wide (bad for readability)
      const heroSection = page.locator('section').first();
      const heroBox = await heroSection.boundingBox();

      if (heroBox) {
        // Content width should be reasonable for reading
        expect(heroBox.width).toBeLessThanOrEqual(1400);
      }
    });
  });

  test.describe('4K Display (3840px)', () => {
    test.use({ viewport: { width: 3840, height: 2160 } });

    test('content is centered on 4K display', async ({ page }) => {
      await page.goto('/');

      const container = page.locator('.container').first();
      const containerBox = await container.boundingBox();

      if (containerBox) {
        expect(containerBox.width).toBeLessThanOrEqual(1280);

        const leftMargin = containerBox.x;
        const rightMargin = 3840 - (containerBox.x + containerBox.width);
        expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(50);
      }
    });

    test('all interactive elements are accessible', async ({ page }) => {
      await page.goto('/');

      // Buttons and links should still be clickable
      const viewWorkButton = page.getByRole('link', { name: /view my work/i });
      await expect(viewWorkButton).toBeVisible();
      await expect(viewWorkButton).toBeEnabled();
    });

    test('images scale appropriately', async ({ page }) => {
      await page.goto('/');

      // Avatar image should not be distorted
      const avatar = page.locator('img').first();
      const avatarBox = await avatar.boundingBox();

      if (avatarBox) {
        // Image should maintain aspect ratio (roughly square for avatar)
        const aspectRatio = avatarBox.width / avatarBox.height;
        expect(aspectRatio).toBeGreaterThan(0.9);
        expect(aspectRatio).toBeLessThan(1.1);
      }
    });
  });

  test.describe('5K Display (5120px)', () => {
    test.use({ viewport: { width: 5120, height: 2880 } });

    test('extreme wide display still centers content', async ({ page }) => {
      await page.goto('/');

      const container = page.locator('.container').first();
      const containerBox = await container.boundingBox();

      if (containerBox) {
        // Even on 5K, max-width is enforced
        expect(containerBox.width).toBeLessThanOrEqual(1280);

        // Content is centered
        const leftMargin = containerBox.x;
        const rightMargin = 5120 - (containerBox.x + containerBox.width);

        // Should have substantial margins on both sides
        expect(leftMargin).toBeGreaterThan(1800);
        expect(rightMargin).toBeGreaterThan(1800);
        expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(50);
      }
    });
  });

  test.describe('Container Responsive Padding', () => {
    test('has correct padding on large screens', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');

      const container = page.locator('.container').first();

      // Check computed styles for padding
      const padding = await container.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          left: styles.paddingLeft,
          right: styles.paddingRight,
        };
      });

      // lg:px-8 means 32px (2rem) padding on large screens
      expect(padding.left).toBe('32px');
      expect(padding.right).toBe('32px');
    });

    test('has correct padding on medium screens', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const container = page.locator('.container').first();

      const padding = await container.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          left: styles.paddingLeft,
          right: styles.paddingRight,
        };
      });

      // sm:px-6 means 24px (1.5rem) padding on small screens
      expect(padding.left).toBe('24px');
      expect(padding.right).toBe('24px');
    });

    test('has correct padding on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const container = page.locator('.container').first();

      const padding = await container.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          left: styles.paddingLeft,
          right: styles.paddingRight,
        };
      });

      // px-4 means 16px (1rem) padding on mobile
      expect(padding.left).toBe('16px');
      expect(padding.right).toBe('16px');
    });
  });

  test.describe('Container Max Width Enforcement', () => {
    test('container never exceeds 1280px width', async ({ page }) => {
      const viewportSizes = [
        { width: 1280, height: 720 },
        { width: 1920, height: 1080 },
        { width: 2560, height: 1440 },
        { width: 3840, height: 2160 },
      ];

      for (const size of viewportSizes) {
        await page.setViewportSize(size);
        await page.goto('/');

        const container = page.locator('.container').first();
        const box = await container.boundingBox();

        if (box) {
          expect(box.width).toBeLessThanOrEqual(1280 + 64); // +64 for padding
        }
      }
    });
  });

  test.describe('Content Readability on Wide Displays', () => {
    test.use({ viewport: { width: 2560, height: 1440 } });

    test('text line length is optimal for reading', async ({ page }) => {
      await page.goto('/');

      // Check that paragraphs don't stretch too wide
      const description = page.getByText(/Building modern web applications/i);
      const descBox = await description.boundingBox();

      if (descBox) {
        // Optimal line length is 50-75 characters, roughly 600-800px
        // With our 1280px container, this should be well within bounds
        expect(descBox.width).toBeLessThan(1000);
      }
    });

    test('form fields are reasonably sized', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      const nameInput = page.getByLabel(/name/i);
      const inputBox = await nameInput.boundingBox();

      if (inputBox) {
        // Input fields shouldn't be excessively wide
        expect(inputBox.width).toBeLessThan(800);
      }
    });
  });
});
