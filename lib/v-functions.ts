import type { Post } from "#vContent";
import { posts } from "#vContent";

/**
 * Sorts all the posts in the `content` directory by isodate.
 *
 * @param _posts An array of posts
 * @returns sorted array of posts by date
 */
export function sortPosts(_posts: Array<Post>): Post[] {
  return _posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

/**
 * Gets a unique post by the slug.
 *
 * @param params An object containing the param key
 * @returns A post whose slug matches the params
 */
export async function getPostFromParams(params: {
  slug: string;
}): Promise<Post | undefined> {
  if (params.slug === undefined) {
    return;
  }
  return posts.find((post) => post.slug === params.slug);
}

/**
 * Gets the reading time of a unique post.
 *
 * @param content The mdx content of the post
 * @returns Reading time in minutes
 */
export async function getReadingTime(content: string) {
  const WORDS_PER_MINUTE: number = 200;

  const strippedContent: string = content.replace(/<\/?[^>]+(>|$)/g, "");

  const wordCount: number = strippedContent
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const readingTime: number = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return readingTime;
}
