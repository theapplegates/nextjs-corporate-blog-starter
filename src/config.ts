import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Foundation Model",
    tag: "foundation-model",
    description: "Insights on powerful AI models at the foundation of tech.",
  },
  {
    label: "Engineering",
    tag: "engineering",
    description: "Innovative engineering driving AI advancements.",
  },
  {
    label: "Jobs",
    tag: "jobs",
    description: "Explore AI job trends and opportunities shaping a brighter future.",
  },
  {
    label: "Startups",
    tag: "startup",
    description: "Spotlight on innovative AI startups transforming industries.",
  },
  {
    label: "Ethics",
    tag: "ethics",
    description: "Promoting responsible AI for positive impact.",
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "cm28hgkdk000wmu7nocgku1dl",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "The Applegates",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Living Life",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Life, I write about it...",
  categories,
};
