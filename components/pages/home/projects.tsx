import { Placeholder } from "@/components/place-holder";
import { ProjectsContainer } from "@/components/projects";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";

export function Projects() {
  return (
    <SectionContainer>
      <SectionSubHeader
        text="Featured projects"
        sub="click or tap to read more."
      />
      <ProjectsContainer>
        {/* {sampleData.map((project, idx) => (
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
        </div> */}
        <Placeholder text="🏗️ Project is under construction" />
      </ProjectsContainer>
    </SectionContainer>
  );
}
