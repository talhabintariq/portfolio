import { socialLinks } from "./data";

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories: string[];
  guid: string;
}

/**
 * Fetches and parses Medium RSS feed
 * @returns Array of Medium posts
 */
export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    // Extract Medium username from URL
    // https://medium.com/@talhabintariq -> @talhabintariq
    const username = socialLinks.medium.split("medium.com/")[1];
    const rssUrl = `https://medium.com/feed/${username}`;

    const response = await fetch(rssUrl, {
      next: { revalidate: 900 }, // Revalidate every 15 minutes (900 seconds)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium feed: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const posts = parseRSSFeed(xmlText);

    return posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

/**
 * Parses RSS XML feed into structured post objects
 */
function parseRSSFeed(xmlText: string): MediumPost[] {
  const posts: MediumPost[] = [];

  // Simple XML parsing using regex (for basic RSS structure)
  // In production, consider using a proper XML parser like 'fast-xml-parser'
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = xmlText.match(itemRegex) || [];

  for (const item of items) {
    try {
      const post: MediumPost = {
        title: extractTag(item, "title"),
        link: extractTag(item, "link"),
        pubDate: extractTag(item, "pubDate"),
        description: stripHtml(extractTag(item, "description")),
        thumbnail: extractThumbnail(item),
        categories: extractCategories(item),
        guid: extractTag(item, "guid"),
      };

      posts.push(post);
    } catch (error) {
      console.error("Error parsing RSS item:", error);
    }
  }

  return posts;
}

/**
 * Extracts content from XML tag
 */
function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "s");
  const match = xml.match(regex);
  return match ? decodeHtml(match[1].trim()) : "";
}

/**
 * Extracts categories/tags from RSS item
 */
function extractCategories(xml: string): string[] {
  const categoryRegex = /<category>(.*?)<\/category>/g;
  const categories: string[] = [];
  let match;

  while ((match = categoryRegex.exec(xml)) !== null) {
    categories.push(decodeHtml(match[1].trim()));
  }

  return categories;
}

/**
 * Extracts thumbnail image from content
 */
function extractThumbnail(xml: string): string | undefined {
  // Try to extract from content:encoded or description
  const contentRegex = /<img[^>]+src="([^">]+)"/;
  const match = xml.match(contentRegex);
  return match ? match[1] : undefined;
}

/**
 * Strips HTML tags from string
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/**
 * Decodes HTML entities
 */
function decodeHtml(html: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
  };

  return html.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
}
