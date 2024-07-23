import { getPostFromParams, getReadingTime } from "@/lib/v-functions";

import { BlogNavigation } from "@/components/blog-navigation";
import { MdxComponents } from "@/components/mdx-components";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionContainer } from "@/components/section-container";
import { formatDate } from "@/lib/date";
import { notFound } from "next/navigation";
import { type Post, posts } from "#vContent";

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

  return (
    <SectionContainer className="relative">
      <BlogNavigation pageTitle={post.title} />
      <Article post={post} />
      <ScrollToTop />
    </SectionContainer>
  );
}

async function Article({ post }: { post: Post }) {
  const readingTime = await getReadingTime(post.content);
  
  return (
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
  );
}
