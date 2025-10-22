import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://talhabintariq.com"),
  title: {
    default: "Talha B. Tariq - Senior Frontend Engineer",
    template: "%s | Talha B. Tariq",
  },
  description:
    "Portfolio of Talha B. Tariq - Senior Frontend Engineer specializing in React, Next.js, TypeScript, and AI integrations. Building modern web applications with cutting-edge technologies.",
  keywords: [
    "Talha B. Tariq",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Full Stack Developer",
    "AI Integration",
    "LangChain",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Talha B. Tariq", url: "https://talhabintariq.com" }],
  creator: "Talha B. Tariq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talhabintariq.com",
    siteName: "Talha B. Tariq Portfolio",
    title: "Talha B. Tariq - Senior Frontend Engineer",
    description:
      "Portfolio of Talha B. Tariq - Senior Frontend Engineer specializing in React, Next.js, TypeScript, and AI integrations.",
    images: [
      {
        url: "/talha.jpg",
        width: 1200,
        height: 630,
        alt: "Talha B. Tariq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha B. Tariq - Senior Frontend Engineer",
    description:
      "Portfolio of Talha B. Tariq - Senior Frontend Engineer specializing in React, Next.js, TypeScript, and AI integrations.",
    images: ["/talha.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
