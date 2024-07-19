import * as React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function SpecificBlog({ params }: Props) {
  return (
    <main>
      <div>Welcome to Page &mdash; {params.slug}</div>
    </main>
  );
}
