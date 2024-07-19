import { defineCollection, s } from "velite";

import { ComputedFields } from "./computed-fields";

const authors = defineCollection({
  name: "Author",
  pattern: "authors/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      avatar: s.string().max(99),
      twitter: s.string().max(99),
      body: s.mdx(),
    })
    .transform(ComputedFields),
});

export { authors };
