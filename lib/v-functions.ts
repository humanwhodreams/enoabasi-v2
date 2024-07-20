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
