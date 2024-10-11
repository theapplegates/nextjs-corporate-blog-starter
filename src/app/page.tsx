import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { wisp } from "@/lib/wisp";
import { FilterBar } from "../components/FilterBar";
import { FullWidthHero } from "../components/FullWidthHero";
import { config } from "../config";

const { title, description } = config;

export default async function Page({
  searchParams,
}: {
  searchParams?: { query: string; page: string };
}) {
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const result = await wisp.getPosts({
    limit: 6,
    query: searchParams?.query,
    page,
  });

  return (
    <>
      <FullWidthHero title={title} description={description} />
      <div className="container mx-auto">
        <FilterBar active="latest" className="my-8" />
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
