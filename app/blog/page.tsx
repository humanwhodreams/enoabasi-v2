import { BlogCard } from "@/components/blog-card";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";
import { type Post, posts } from "#vContent";
import { sortPosts } from "@/lib/v-functions";
import { BlogPagination } from "@/components/blog-pagination";

const POSTS_PER_PAGE: number = 5;

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Blog({ searchParams }: Props) {
  const sortedPosts: Post[] = sortPosts(posts.filter((post) => !post.draft));

  const currentPage: number = Number(searchParams.page) || 1;

  const totalPages: number = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayedPosts: Post[] = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <>
      <SectionContainer>
        <div className="flex items-center justify-start">
          <SectionSubHeader text="Blog" sub="All my writings." />
        </div>

        <ul className="my-6 space-y-4">
          {displayedPosts.map((post: Post) => (
            <li key={post.slugAsParams}>
              <BlogCard
                slug={post.slugAsParams}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>

        <BlogPagination totalPages={totalPages} className="justify-end mt-4"/>
      </SectionContainer>
    </>
  );
}
