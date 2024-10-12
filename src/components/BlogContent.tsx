"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Author, GetRelatedPostsResult, TagInPost } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import { FullWidthHeader } from "./FullWidthHeader";
import { RelatedPosts } from "./RelatedPosts";
import { processTableOfContents, TableOfContents } from "./TOC";

export const BlogContent = ({
  post: { title, content, author, publishedAt, tags },
  relatedPosts,
}: {
  post: {
    id: string;
    createdAt: Date;
    teamId: string;
    description: string | null;
    title: string;
    content: string;
    slug: string;
    image: string | null;
    authorId: string;
    updatedAt: Date;
    publishedAt: Date | null;
    tags: TagInPost[];
    author: Author;
  };
  relatedPosts: GetRelatedPostsResult["posts"];
}) => {
  const { modifiedHtml, tableOfContents } = processTableOfContents(content, {
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
  });
  return (
    <>
      <FullWidthHeader
        title={title}
        description=""
        breadcrumb={[
          { label: "Blog", href: "/" },
          { label: title, href: "" },
        ]}
      />
      <div className="container mx-auto mt-8 px-4">
        <div className="flex items-center gap-2">
          <Image
            src={author.image || ""}
            alt={author.name || ""}
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="font-medium">{author.name}</div> |
          <div>
            Published on{" "}
            {publishedAt ? new Date(publishedAt).toLocaleDateString() : "N/A"}
          </div>
        </div>
        <div className="flex">
          <div className="lg:w-3/4 prose prose-lg max-w-none w-full break-words">
            <Accordion
              type="single"
              collapsible
              className="w-full not-prose my-6 block lg:hidden"
            >
              <AccordionItem value="toc" className="border-none">
                <AccordionTrigger>Table of Content</AccordionTrigger>
                <AccordionContent>
                  <TableOfContents items={tableOfContents} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div
              dangerouslySetInnerHTML={{
                __html: modifiedHtml,
              }}
            />
          </div>
          <div className="w-1/4 hidden lg:block">
            <div className="sticky top-0 mt-4 p-4 max-h-screen overflow-y-auto">
              <div className="text-lg font-semibold">Table of Contents</div>
              <TableOfContents items={tableOfContents} />
            </div>
          </div>
        </div>
        <div className="my-8 space-x-2">
          {tags.map((tag) => (
            <Link href={`/category/${tag.name}`} key={tag.id}>
              #{tag.name}
            </Link>
          ))}
        </div>
        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
};
