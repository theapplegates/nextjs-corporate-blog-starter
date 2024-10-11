import { wisp } from "@/lib/wisp";
import { BlogContent } from "@/components/BlogContent";
interface Params {
  slug: string;
}
export default async function BlogPost({
  params: { slug },
}: {
  params: Params;
}) {
  const [result, related] = await Promise.all([
    wisp.getPost(slug),
    wisp.getRelatedPosts({ slug, limit: 4 }),
  ]);

  if (!result.post) return null;

  return <BlogContent post={result.post} relatedPosts={related.posts} />;
}
