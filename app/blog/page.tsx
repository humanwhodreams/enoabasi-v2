import { BlogCard } from "@/components/blog-card";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";
import { posts } from "#vContent";
import { sortPosts } from "@/lib/v-functions";

export default async function Blog() {
  const getSortedPosts = sortPosts(posts.filter((post) => !post.draft));

  return (
    <>
      <SectionContainer>
        <div className="flex items-center justify-start">
          <SectionSubHeader text="Blog" sub="All my writings." />
        </div>

        <ul className="my-6 space-y-4">
          {getSortedPosts.map((post) => (
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
      </SectionContainer>
    </>
  );
}
