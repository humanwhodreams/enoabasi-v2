import { authors } from "./collections/author";
import { defineConfig } from "velite";
import { posts } from "./collections/post";

export default defineConfig({
  root: "content",
  collections: {
    posts,
    authors,
  },
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
