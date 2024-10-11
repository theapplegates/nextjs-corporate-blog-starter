import Image from "next/image";
import Link from "next/link";
import type { GetPostsResult } from "@wisp-cms/client";

export const BlogPostList = ({ posts }: { posts: GetPostsResult["posts"] }) => {
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
      {posts.map((post) => (
        <div className="break-words" key={post.id}>
          <Link href={`/post/${post.slug}`}>
            <div className="aspect-[16/9] relative">
              {post.image ? (
                <Image
                  alt={post.title}
                  className="object-cover"
                  src={post.image}
                  fill
                />
              ) : (
                <Image src="/placeholder.jpg" alt="placeholder" />
              )}
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
            <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
              {post.description}
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={post.author.image || ""}
                alt={post.author.name || ""}
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="font-medium">
                {post.author.name} | Published on{" "}
                {new Date(
                  post.publishedAt || post.updatedAt
                )?.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};