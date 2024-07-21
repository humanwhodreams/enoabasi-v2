import { type Post, posts } from "#vContent";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/date";
import { sortPosts } from "@/lib/v-functions";
import { CalendarDays, MoveRight } from "lucide-react";
import Link from "next/link";

export function LatestBlog() {
  const latestPosts: Post[] = sortPosts(posts).slice(0, 3);

  return (
    <SectionContainer>
      <SectionSubHeader
        text="Latest post"
        linkTo={
          <Link href="/blog" className="flex items-center font-medium text-muted-foreground hover:underline">
            All
            <MoveRight className="flex-shrink-0 ml-2 size-4 text-muted-foreground" />
          </Link>
        }
      />

      <ul className="divide-y-2">
        {latestPosts.map((post: Post) => (
          <li key={post.slugAsParams}>
            <Link
              href={post.slugAsParams}
              className="flex flex-wrap items-center px-3 py-1 transition-colors hover:bg-muted outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary"
            >
              {post.title}
              <span className="flex items-center justify-center ml-4 text-sm text-muted-foreground">
                <CalendarDays className="flex-shrink-0 mr-2 size-4" />
                {formatDate(post.date)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
