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

export const config = {
  baseUrl: "http://localhost:3000",
  title: "Wisp CMS",
  description: "Building the cloudless future of the web",
  categories,
};
