# Resend Email Configuration Guide

## The Problem

Your contact form is getting stuck on "Sending..." because of **Resend API configuration issues**.

## Root Causes

1. **Invalid or expired API key**
2. **Using `onboarding@resend.dev` without proper setup**
3. **Email domain not verified**

---

## How to Fix It

### Option 1: Use Resend Test Mode (Quick Setup)

1. **Get a FREE Resend API key:**
   - Go to https://resend.com/signup
   - Create a free account
   - Navigate to API Keys section
   - Generate a new API key

2. **Update your `.env.local` file:**
   ```env
   RESEND_API_KEY=re_YOUR_NEW_API_KEY_HERE
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=talhabintariq@gmail.com
   ```

3. **Restart your dev server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

4. **Test the contact form** - It should work now!

**Note:** Test mode has limitations:
- 100 emails/day limit
- Only sends to verified email addresses
- "onboarding@resend.dev" appears as sender

---

### Option 2: Production Setup (Recommended)

For a professional portfolio, you should use a custom domain.

1. **Get your own domain** (e.g., `talhabintariq.com`)

2. **Verify domain in Resend:**
   - Go to https://resend.com/domains
   - Click "Add Domain"
   - Add your domain (e.g., `talhabintariq.com`)
   - Add the DNS records to your domain provider:
     - SPF record
     - DKIM record
     - DMARC record (optional)

3. **Update `.env.local`:**
   ```env
   RESEND_API_KEY=re_YOUR_API_KEY_HERE
   RESEND_FROM_EMAIL=contact@talhabintariq.com
   RESEND_TO_EMAIL=talhabintariq@gmail.com
   ```

4. **Restart dev server**

---

## Testing the Fix

### Check Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Try submitting the contact form
4. Look for errors like:
   - `Failed to fetch` - Network issue
   - `403` - Invalid API key
   - `422` - Email validation failed
   - Request timeout - API is not responding

### Check Terminal/Server Logs

Look for:
```
Resend error: { ... }
RESEND_API_KEY is not configured
```

---

## Quick Debug Commands

```bash
# Check if API key is loaded
node -e "console.log(require('dotenv').config({path:'.env.local'})); console.log(process.env.RESEND_API_KEY)"

# Test API route directly
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message from curl",
    "honeypot": ""
  }'
```

---

## What I Fixed

✅ **Added 30-second timeout** to prevent infinite loading
✅ **Better error messages** to identify the exact problem
✅ **AbortController** to cancel hung requests

Now when the form gets stuck, you'll see a helpful error message instead of infinite loading.

---

## Next Steps

1. **Get a valid Resend API key** from https://resend.com
2. **Update `.env.local`** with the new key
3. **Restart the dev server** (`npm run dev`)
4. **Test the contact form** again

The form should now either:
- ✅ Send successfully, OR
- ❌ Show a clear error message (not just hang)

---

## Alternative: Use a Different Email Service

If Resend doesn't work for you, consider:

- **SendGrid** - https://sendgrid.com (100 emails/day free)
- **Mailgun** - https://www.mailgun.com (5,000 emails/month free)
- **AWS SES** - https://aws.amazon.com/ses/ (62,000 emails/month free)
- **EmailJS** - https://www.emailjs.com (200 emails/month free)

Let me know if you need help switching to a different provider!
