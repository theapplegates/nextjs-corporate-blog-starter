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
    tag: "growth-hacking",
    description: "Lessons on leveraging content marketing to grow businesses",
  },
];

export const config = {
  title: "Wisp CMS",
  description: "Building the cloudless future of the web",
  categories,
};
