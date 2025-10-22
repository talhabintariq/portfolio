import { Metadata } from "next";
import { getMediumPosts } from "@/lib/medium";
import { BlogPostCard } from "@/components/blog-post-card";
import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Talha Bin Tariq",
  description:
    "Articles about web development, React, Next.js, TypeScript, and AI integrations.",
};

// Revalidate every 15 minutes
export const revalidate = 900;

export default async function BlogPage() {
  const posts = await getMediumPosts();

  return (
    <div className="container py-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on web development, React, Next.js, TypeScript, and AI
            integrations. Published on{" "}
            <a
              href={socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Medium
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogPostCard key={post.guid} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts found. Check back soon!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center pt-8">
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all articles on Medium
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
