import rehypePrettyCode, { type Options } from "rehype-pretty-code";

import { authors } from "./collections/author";
import { defineConfig } from "velite";
import { posts } from "./collections/post";

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: "github-dark",
};

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
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
