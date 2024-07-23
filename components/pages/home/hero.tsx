import { HeroProfile } from "@/components/hero-profile";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";

export function Hero() {
  return (
    <SectionContainer>
      <HeroProfile />
      <SectionSubHeader text="A little about me" />
      <p className="font-sans text-muted-foreground">
        I am Enoabasi Essien, a software developer, writer, and car enthusiast based in Abuja, Nigeria.<br/><br/>
        From Design &rarr; Development &rarr; Deployment. I help build products that contribute to society by solving problems to meet end-users needs. I am eager to improve myself in the software industry and work with great minded people.
      </p>
    </SectionContainer>
  );
}
