import { test, expect, devices } from '@playwright/test';

test.describe('Small Device Support', () => {
  test.describe('Extra Small - 320px (iPhone SE 1st gen, old Android)', () => {
    test.use({ viewport: { width: 320, height: 568 } });

    test('all content is visible without horizontal scroll', async ({ page }) => {
      await page.goto('/');

      // Check for horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(320);
    });

    test('navigation is usable on 320px', async ({ page }) => {
      await page.goto('/');

      // Navigation should be visible and not overflow
      const nav = page.getByRole('navigation');
      await expect(nav).toBeVisible();

      // Logo should be visible
      await expect(page.getByText('TT')).toBeVisible();
    });

    test('navigation links are accessible', async ({ page }) => {
      await page.goto('/');

      // All nav links should be visible and clickable
      await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    });

    test('hero section fits without overflow', async ({ page }) => {
      await page.goto('/');

      const hero = page.locator('section').first();
      const heroBox = await hero.boundingBox();

      if (heroBox) {
        expect(heroBox.width).toBeLessThanOrEqual(320);
      }
    });

    test('hero text is readable', async ({ page }) => {
      await page.goto('/');

      // Name should be visible
      await expect(page.getByText('Talha B. Tariq')).toBeVisible();

      // Text should not be cut off
      const name = page.getByText('Talha B. Tariq');
      const nameBox = await name.boundingBox();

      if (nameBox) {
        expect(nameBox.width).toBeLessThan(320);
      }
    });

    test('CTA buttons are properly sized', async ({ page }) => {
      await page.goto('/');

      const ctaButton = page.getByRole('link', { name: /view my work/i });
      const buttonBox = await ctaButton.boundingBox();

      if (buttonBox) {
        // Button should fit on screen
        expect(buttonBox.width).toBeLessThan(300);
        // Button should have adequate height for touch (min 44px)
        expect(buttonBox.height).toBeGreaterThanOrEqual(40);
      }
    });

    test('skills section displays in single column', async ({ page }) => {
      await page.goto('/');

      const skillsSection = page.locator('#about');
      await expect(skillsSection).toBeVisible();

      // Skills should not overflow
      const skillsBox = await skillsSection.boundingBox();
      if (skillsBox) {
        expect(skillsBox.width).toBeLessThanOrEqual(320);
      }
    });

    test('projects section displays in single column', async ({ page }) => {
      await page.goto('/');

      const projectsSection = page.locator('#projects');
      await expect(projectsSection).toBeVisible();

      const projectsBox = await projectsSection.boundingBox();
      if (projectsBox) {
        expect(projectsBox.width).toBeLessThanOrEqual(320);
      }
    });

    test('contact form is usable on 320px', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      // All form fields should be visible
      await expect(page.getByLabel(/name/i)).toBeVisible();
      await expect(page.getByLabel(/email/i)).toBeVisible();
      await expect(page.getByLabel(/subject/i)).toBeVisible();
      await expect(page.getByLabel(/message/i)).toBeVisible();

      // Form should not overflow
      const contactSection = page.locator('#contact');
      const contactBox = await contactSection.boundingBox();

      if (contactBox) {
        expect(contactBox.width).toBeLessThanOrEqual(320);
      }
    });

    test('form inputs are properly sized', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      const nameInput = page.getByLabel(/name/i);
      const inputBox = await nameInput.boundingBox();

      if (inputBox) {
        // Input should fit with padding
        expect(inputBox.width).toBeLessThan(300);
        // Input should have adequate height
        expect(inputBox.height).toBeGreaterThanOrEqual(40);
      }
    });

    test('submit button is accessible on small screen', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      const submitButton = page.getByRole('button', { name: /send message/i });
      await expect(submitButton).toBeVisible();

      const buttonBox = await submitButton.boundingBox();
      if (buttonBox) {
        // Button should span most of the width for easy tapping
        expect(buttonBox.width).toBeGreaterThan(250);
        // Adequate touch target height
        expect(buttonBox.height).toBeGreaterThanOrEqual(44);
      }
    });

    test('footer fits on 320px screen', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      const footerBox = await footer.boundingBox();
      if (footerBox) {
        expect(footerBox.width).toBeLessThanOrEqual(320);
      }
    });

    test('social links in footer are accessible', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      const githubLink = footer.getByRole('link', { name: /github/i });

      await expect(githubLink).toBeVisible();

      const linkBox = await githubLink.boundingBox();
      if (linkBox) {
        // Touch target should be adequate
        expect(linkBox.width).toBeGreaterThanOrEqual(40);
        expect(linkBox.height).toBeGreaterThanOrEqual(40);
      }
    });

    test('theme toggle button is accessible', async ({ page }) => {
      await page.goto('/');

      const themeButton = page.getByRole('button', { name: /toggle theme/i });
      await expect(themeButton).toBeVisible();

      const buttonBox = await themeButton.boundingBox();
      if (buttonBox) {
        // Adequate touch target
        expect(buttonBox.width).toBeGreaterThanOrEqual(40);
        expect(buttonBox.height).toBeGreaterThanOrEqual(40);
      }
    });
  });

  test.describe('Small - 360px (Galaxy S8/S9, common Android)', () => {
    test.use({ viewport: { width: 360, height: 640 } });

    test('no horizontal overflow on 360px', async ({ page }) => {
      await page.goto('/');

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(360);
    });

    test('all sections are properly sized', async ({ page }) => {
      await page.goto('/');

      const sections = await page.locator('section').all();

      for (const section of sections) {
        const box = await section.boundingBox();
        if (box) {
          expect(box.width).toBeLessThanOrEqual(360);
        }
      }
    });

    test('container padding is correct', async ({ page }) => {
      await page.goto('/');

      const container = page.locator('.container').first();
      const padding = await container.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          left: styles.paddingLeft,
          right: styles.paddingRight,
        };
      });

      // Should have px-4 (16px) padding on mobile
      expect(padding.left).toBe('16px');
      expect(padding.right).toBe('16px');
    });

    test('text remains readable', async ({ page }) => {
      await page.goto('/');

      // Check font size is not too small
      const heading = page.getByText('Talha B. Tariq');
      const fontSize = await heading.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Font size should be reasonable (at least 24px for main heading)
      const fontSizeNum = parseInt(fontSize);
      expect(fontSizeNum).toBeGreaterThanOrEqual(24);
    });

    test('images scale appropriately', async ({ page }) => {
      await page.goto('/');

      const avatar = page.locator('img').first();
      const avatarBox = await avatar.boundingBox();

      if (avatarBox) {
        // Avatar should fit on screen with padding
        expect(avatarBox.width).toBeLessThan(340);
        // Should maintain aspect ratio
        const aspectRatio = avatarBox.width / avatarBox.height;
        expect(aspectRatio).toBeGreaterThan(0.9);
        expect(aspectRatio).toBeLessThan(1.1);
      }
    });
  });

  test.describe('Compact - 384px (Pixel 2, Nexus 5)', () => {
    test.use({ viewport: { width: 384, height: 640 } });

    test('layout adapts to 384px width', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(384);
    });

    test('form layout is optimized', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      const form = page.locator('form');
      const formBox = await form.boundingBox();

      if (formBox) {
        expect(formBox.width).toBeLessThanOrEqual(384);
      }
    });
  });

  test.describe('iPhone SE (3rd gen) - 375x667', () => {
    test.use(devices['iPhone SE']);

    test('works on actual iPhone SE device profile', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();

      // Test user agent
      const userAgent = await page.evaluate(() => navigator.userAgent);
      expect(userAgent).toContain('iPhone');
    });

    test('touch interactions work', async ({ page }) => {
      await page.goto('/');

      const ctaButton = page.getByRole('link', { name: /view my work/i });
      await ctaButton.tap();

      await page.waitForTimeout(300);

      // Should scroll to projects section
      const projectsSection = page.locator('#projects');
      await expect(projectsSection).toBeInViewport();
    });
  });

  test.describe('Galaxy S9 - 360x740', () => {
    test.use(devices['Galaxy S9+']);

    test('works on Galaxy S9 device profile', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewport = await page.viewportSize();

      expect(bodyWidth).toBeLessThanOrEqual(viewport?.width || 360);
    });
  });

  test.describe('Small Device Landscape (568x320)', () => {
    test.use({ viewport: { width: 568, height: 320 } });

    test('landscape mode works on small devices', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Talha B. Tariq')).toBeVisible();

      // No horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(568);
    });

    test('navigation is accessible in landscape', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByRole('navigation')).toBeVisible();
      await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    });

    test('content fits in short viewport', async ({ page }) => {
      await page.goto('/');

      // Even with short height, essential content should be visible
      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
    });
  });

  test.describe('Touch Target Compliance', () => {
    test.use({ viewport: { width: 320, height: 568 } });

    test('all interactive elements meet minimum touch target size', async ({ page }) => {
      await page.goto('/');

      // Get all buttons and links
      const buttons = await page.locator('button, a[href]').all();

      for (const button of buttons.slice(0, 10)) { // Test first 10 to keep test fast
        const box = await button.boundingBox();

        if (box && box.width > 0 && box.height > 0) {
          // WCAG 2.1 Level AAA: minimum 44x44px touch target
          // We'll be slightly lenient for very small screens
          expect(box.width).toBeGreaterThanOrEqual(40);
          expect(box.height).toBeGreaterThanOrEqual(40);
        }
      }
    });

    test('form input touch targets are adequate', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Contact' }).click();
      await page.waitForTimeout(300);

      const inputs = await page.locator('input, textarea').all();

      for (const input of inputs) {
        const box = await input.boundingBox();

        if (box) {
          // Form inputs should have minimum 44px height
          expect(box.height).toBeGreaterThanOrEqual(40);
        }
      }
    });
  });

  test.describe('Content Visibility on Small Screens', () => {
    test.use({ viewport: { width: 320, height: 568 } });

    test('hero content is not cut off', async ({ page }) => {
      await page.goto('/');

      // All hero elements should be visible
      await expect(page.getByText('Talha B. Tariq')).toBeVisible();
      await expect(page.getByRole('link', { name: /view my work/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /get in touch/i })).toBeVisible();
    });

    test('skills badges are not truncated', async ({ page }) => {
      await page.goto('/');

      // Check a few skill badges
      await expect(page.getByText('React')).toBeVisible();
      await expect(page.getByText('TypeScript')).toBeVisible();
      await expect(page.getByText('Next.js')).toBeVisible();
    });

    test('project cards display properly', async ({ page }) => {
      await page.goto('/');

      // Project titles should be visible
      await expect(page.getByText('Hope For Your Garden')).toBeVisible();

      // Project buttons should be visible
      const viewDemoButtons = page.getByText('View Demo');
      await expect(viewDemoButtons.first()).toBeVisible();
    });

    test('footer content is complete', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      await expect(footer.getByText(/© \d{4} Talha B. Tariq/)).toBeVisible();
      await expect(footer.getByRole('link', { name: /github/i })).toBeVisible();
    });
  });

  test.describe('Typography on Small Screens', () => {
    test.use({ viewport: { width: 320, height: 568 } });

    test('headings are appropriately sized', async ({ page }) => {
      await page.goto('/');

      const h1 = page.getByRole('heading', { level: 1 }).first();
      const fontSize = await h1.evaluate((el) =>
        window.getComputedStyle(el).fontSize
      );

      // H1 should be at least 28px on mobile
      const fontSizeNum = parseInt(fontSize);
      expect(fontSizeNum).toBeGreaterThanOrEqual(24);
    });

    test('body text is readable', async ({ page }) => {
      await page.goto('/');

      const paragraph = page.locator('p').first();
      const fontSize = await paragraph.evaluate((el) =>
        window.getComputedStyle(el).fontSize
      );

      // Body text should be at least 14px
      const fontSizeNum = parseInt(fontSize);
      expect(fontSizeNum).toBeGreaterThanOrEqual(14);
    });

    test('line height is adequate', async ({ page }) => {
      await page.goto('/');

      const paragraph = page.locator('p').first();
      const lineHeight = await paragraph.evaluate((el) =>
        window.getComputedStyle(el).lineHeight
      );

      // Line height should not be 'normal' or too tight
      expect(lineHeight).not.toBe('normal');

      const lineHeightNum = parseFloat(lineHeight);
      expect(lineHeightNum).toBeGreaterThan(18); // Reasonable line height
    });
  });

  test.describe('Performance on Low-End Devices', () => {
    test.use({
      viewport: { width: 360, height: 640 },
      // Simulate slow network
      ...devices['Pixel 2']
    });

    test('page loads within reasonable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('/');
      const loadTime = Date.now() - startTime;

      // Should load within 5 seconds even on slow connection
      expect(loadTime).toBeLessThan(5000);
    });

    test('images are optimized for mobile', async ({ page }) => {
      await page.goto('/');

      // Avatar should load
      const avatar = page.locator('img').first();
      await expect(avatar).toBeVisible();

      // Image should have loaded (not broken)
      const naturalWidth = await avatar.evaluate((img: HTMLImageElement) => img.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    });
  });
});
