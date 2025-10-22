# Portfolio Website

Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Responsive design with dark/light mode
- ✅ Hero section with social links
- ✅ Skills showcase with categorized badges
- ✅ Project portfolio with animated cards
- ✅ Medium blog integration with ISR (15-min revalidation)
- ✅ Contact form with Resend email integration
- ✅ SEO optimized with meta tags, sitemap, and robots.txt
- ✅ Smooth scrolling and animations
- ✅ Custom 404 page

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/talhabintariq/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a `.env.local` file with your environment variables:
\`\`\`bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=talhabintariq@gmail.com
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment to Vercel

1. Push your code to GitHub (already done)
2. Visit [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import the `talhabintariq/portfolio` repository
5. Configure environment variables:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
6. Click "Deploy"
7. Once deployed, connect your custom domain in Settings → Domains

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from resend.com | Yes |
| `RESEND_FROM_EMAIL` | Email address to send from | Yes |
| `RESEND_TO_EMAIL` | Your email to receive messages | Yes |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key | Optional |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret | Optional |

## Project Structure

\`\`\`
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── blog/              # Blog page with Medium RSS
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── hero.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   ├── contact-form.tsx
│   ├── blog-post-card.tsx
│   ├── navigation.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/                   # Utilities and data
│   ├── data.ts           # Personal info, skills, projects
│   ├── medium.ts         # Medium RSS feed parser
│   └── utils.ts          # Helper functions
├── config/               # Configuration
│   └── features.ts       # Feature flags
└── public/               # Static assets
    └── talha.jpg         # Profile avatar
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this as a template for your own portfolio!

## Author

**Talha Bin Tariq**
- Website: https://talhabintariq.com
- GitHub: [@talhabintariq](https://github.com/talhabintariq)
- LinkedIn: [talhabtariq](https://www.linkedin.com/in/talhabtariq/)
- Medium: [@talhabintariq](https://medium.com/@talhabintariq)
