"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import { MediumPost } from "@/lib/medium";

interface BlogPostCardProps {
  post: MediumPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  // Format date
  const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Truncate description to 150 characters
  const truncatedDescription =
    post.description.length > 150
      ? post.description.substring(0, 150) + "..."
      : post.description;

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group block rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300"
    >
      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="relative w-full h-48 bg-muted rounded-md mb-4 overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>

      {/* Date */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <Calendar className="h-4 w-4" />
        <time dateTime={post.pubDate}>{formattedDate}</time>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {truncatedDescription}
      </p>

      {/* Categories */}
      {post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 3).map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
            >
              {category}
            </span>
          ))}
        </div>
      )}

      {/* Read more link */}
      <div className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
        <span>Read on Medium</span>
        <ExternalLink className="h-4 w-4" />
      </div>
    </motion.a>
  );
}
