import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to contact form
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(500);
  });

  test('displays all form fields', async ({ page }) => {
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/subject/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('validates required fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: /send message/i }).click();

    // Check for validation errors
    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible();
  });

  test('validates email format', async ({ page }) => {
    // Fill in name but invalid email
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('invalid-email');
    await page.getByRole('button', { name: /send message/i }).click();

    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
  });

  test('validates field lengths', async ({ page }) => {
    await page.getByLabel(/name/i).fill('J');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/subject/i).fill('Te');
    await page.getByLabel(/message/i).fill('Short');

    await page.getByRole('button', { name: /send message/i }).click();

    // Should show validation errors
    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible();
  });

  test('shows loading state on submit', async ({ page }) => {
    // Fill in the form
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/subject/i).fill('Test Subject');
    await page.getByLabel(/message/i).fill('This is a test message from E2E tests');

    // Intercept the API call to make it slow
    await page.route('/api/contact', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true }),
      });
    });

    // Submit the form
    await page.getByRole('button', { name: /send message/i }).click();

    // Check for loading state
    await expect(page.getByText(/sending/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /sending/i })).toBeDisabled();
  });

  test('shows success message after submission', async ({ page }) => {
    // Mock successful API response
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true, messageId: 'test-id' }),
      });
    });

    // Fill and submit the form
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/subject/i).fill('Test Subject');
    await page.getByLabel(/message/i).fill('This is a test message from E2E tests');

    await page.getByRole('button', { name: /send message/i }).click();

    // Check for success message
    await expect(page.getByText(/message sent successfully/i)).toBeVisible();
  });

  test('shows error message on failure', async ({ page }) => {
    // Mock failed API response
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 500,
        body: JSON.stringify({ error: 'Server error occurred' }),
      });
    });

    // Fill and submit the form
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/subject/i).fill('Test Subject');
    await page.getByLabel(/message/i).fill('This is a test message');

    await page.getByRole('button', { name: /send message/i }).click();

    // Check for error message
    await expect(page.getByText(/server error/i)).toBeVisible();
  });

  test('clears form after successful submission', async ({ page }) => {
    // Mock successful API response
    await page.route('/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true }),
      });
    });

    const nameInput = page.getByLabel(/name/i);
    const emailInput = page.getByLabel(/email/i);

    // Fill and submit the form
    await nameInput.fill('John Doe');
    await emailInput.fill('john@example.com');
    await page.getByLabel(/subject/i).fill('Test Subject');
    await page.getByLabel(/message/i).fill('This is a test message');

    await page.getByRole('button', { name: /send message/i }).click();

    // Wait for success message
    await expect(page.getByText(/message sent successfully/i)).toBeVisible();

    // Form should be cleared
    await expect(nameInput).toHaveValue('');
    await expect(emailInput).toHaveValue('');
  });
});
