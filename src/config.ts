import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Build In Public",
    tag: "build-in-public",
    description: "Lessons on leveraging content marketing to grow businesses",
  },
  {
    label: "Growth Hacking",
    tag: "growth",
    description: "Growth strategies for startups and established businesses",
  },
];

const baseUrl = "http://localhost:3000";

export const config = {
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: "Wisp",
  title: "Wisp CMS",
  description: "Building the cloudless future of the web",
  categories,
};
