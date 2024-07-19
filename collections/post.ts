import { defineCollection, s } from "velite";

import { ReservedValues } from "./reserved-values";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      slug: s.slug("post", ReservedValues),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      updatedAt: s.isodate().optional(),
      draft: s.boolean().default(false),
      authors: s.array(s.string()),
      toc: s.toc(),
      content: s.mdx(),
    })
    .transform((data) => ({ ...data, slugAsParams: `/blog/${data.slug}` })),
});

export { posts };
