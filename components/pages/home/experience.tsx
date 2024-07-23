import { ExperienceCard } from "@/components/experience-card";
import { Placeholder } from "@/components/place-holder";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";
import { works } from "@/lib/works";

export function Experience() {
  return (
    <SectionContainer>
      <SectionSubHeader text="My experiences" />
      {works.map((work, idx) => (
        <ExperienceCard
          key={idx}
          position={work.position}
          office={work.office}
          duration={work.duration}
          roles={work.roles}
        />
      ))}
    </SectionContainer>
  );
}
