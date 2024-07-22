import { postProcess, preProcess } from "@/lib/rehype-pre-raw";

import { authors } from "./collections/author";
import { defineConfig } from "velite";
import { posts } from "./collections/post";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

const rehypePrettyCodeOptions: Partial<Options> = {
  grid: true,
  theme: "vesper",
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
    rehypePlugins: [
      preProcess,
      postProcess,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});
