import { getPostFromParams, getReadingTime } from "@/lib/v-functions";

import { BlogNavigation } from "@/components/blog-navigation";
import { MdxComponents } from "@/components/mdx-components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SectionContainer } from "@/components/section-container";
import { TableOfContents } from "@/components/table-of-contents";
import { formatDate } from "@/lib/date";
import { notFound } from "next/navigation";
import { posts } from "#vContent";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SpecificBlog({ params }: Props) {
  const post = await getPostFromParams(params);

  if (!post || post.draft) {
    notFound();
  }

  const readingTime = await getReadingTime(post.content);

  return (
    <SectionContainer className="relative">
      <div className="hidden text-sm xl:block">
        <div className="fixed top-[10rem] right-[6rem] -mt-10 pt-4 z-10">
          <ScrollArea className="pb-10">
            <div className="sticky top-[10rem] -mt-10 h-[calc(100vh-3.5rem)] py-12 px-4">
              <TableOfContents toc={post.toc} />
            </div>
          </ScrollArea>
        </div>
      </div>

      <BlogNavigation pageTitle={post.title} />
      <article className="font-sans prose lg:prose-lg dark:prose-invert">
        <h1 className="text-xl font-bold md:text-3xl">{post.title}</h1>
        {post.description ? (
          <p className="before:content-['~_'] text-primary text-sm md:text-base md:font-medium">
            {post.description}
          </p>
        ) : null}
        <ul className="text-sm">
          <li>Written by: {post.authors}</li>
          <li>Posted: {formatDate(post.date)}</li>
          <li>
            Reading time: {readingTime} {readingTime >= 2 ? "minutes" : "minute"}
          </li>
        </ul>
        <MdxComponents code={post.content} />
      </article>
    </SectionContainer>
  );
}
