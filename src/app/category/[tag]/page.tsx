import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { wisp } from "@/lib/wisp";
import { FilterBar } from "../../../components/FilterBar";
import { FullWidthHero } from "../../../components/FullWidthHero";
import { config } from "../../../config";

export default async function Page({
  searchParams,
  params: { tag },
}: {
  searchParams?: { query: string; page: string };
  params: { tag: string };
}) {
  const category = config.categories.find((c) => c.tag === tag);
  const { label, description } = category || {
    label: `#${tag}`,
    description: `Blog posts tagged with #${tag}`,
  };
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const result = await wisp.getPosts({
    limit: 6,
    tags: [tag],
    query: searchParams?.query,
    page,
  });

  return (
    <>
      <FullWidthHero
        title={label}
        description={description}
        breadcrumb={[
          { label: "Blog", href: "/" },
          { label: "Category", href: `/category/` },
          { label, href: `/category/${tag}` },
        ]}
      />
      <div className="container mx-auto">
        <FilterBar active={tag} className="my-8" />
        <BlogPostList posts={result.posts} />
        <PostPagination
          pagination={result.pagination}
          className="my-16"
          query={searchParams?.query}
        />
      </div>
    </>
  );
}
