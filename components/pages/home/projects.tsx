import { ProjectCard, ProjectsContainer } from "@/components/projects";

import { More } from "@/components/more";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";

const sampleData = [
  {
    title: "Recallify",
    tldr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam.",
    website: "https://example.com",
    tags: [
      "Android",
      "Java",
      "Kotlin",
      "Jetpack compose",
      "Firebase",
      "Tensorflow",
    ],
  },
  {
    title: "Nobasi Interactive Studio",
    tldr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam.",
    website: "https://example.com",
    tags: [
      "Next.js",
      "React",
      "Tailwindcss",
      "TypeScript",
      "Velite",
      "Shadcn/ui",
    ],
  },
];

export function Projects() {
  return (
    <SectionContainer>
      <SectionSubHeader
        text="Featured projects"
        sub="click or tap to read more."
      />
      <ProjectsContainer>
        {sampleData.map((project, idx) => (
          <ProjectCard
            key={idx}
            index={idx}
            title={project.title}
            tldr={project.tldr}
            tags={project.tags}
            website={project.website}
          />
        ))}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center justify-end w-full">
            <More label="All projects" href="/projects" />
          </div>
        </div>
      </ProjectsContainer>
    </SectionContainer>
  );
}
