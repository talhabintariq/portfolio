export function getContactEmailTemplate(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                New Contact Message
              </h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                From your portfolio website
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- From Section -->
              <div style="margin-bottom: 30px;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 20px; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #667eea;">
                      <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                        From
                      </p>
                      <p style="margin: 0; color: #111827; font-size: 18px; font-weight: 600;">
                        ${data.name}
                      </p>
                      <p style="margin: 8px 0 0 0; color: #667eea; font-size: 14px;">
                        <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">
                          ${data.email}
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Subject Section -->
              <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                  Subject
                </p>
                <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500;">
                  ${data.subject}
                </p>
              </div>

              <!-- Message Section -->
              <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                  Message
                </p>
                <div style="padding: 20px; background-color: #f8f9fa; border-radius: 6px; border: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${data.message}
                  </p>
                </div>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}"
                   style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);">
                  Reply to ${data.name}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; text-align: center; color: #9ca3af; font-size: 13px; line-height: 1.6;">
                This message was sent through the contact form on
                <a href="https://talhabintariq.com" style="color: #667eea; text-decoration: none; font-weight: 500;">
                  talhabintariq.com
                </a>
              </p>
              <p style="margin: 12px 0 0 0; text-align: center; color: #d1d5db; font-size: 12px;">
                © ${new Date().getFullYear()} Talha B. Tariq. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
