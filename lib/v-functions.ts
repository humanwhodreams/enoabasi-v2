import type { Post } from "#vContent";

/**
 * Sorts all the posts in the `content` directory by isodate.
 * @returns sorted array of posts by date
 */
export function sortPosts(posts: Array<Post>): Post[] {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
