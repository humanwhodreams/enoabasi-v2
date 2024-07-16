import { HeroProfile } from "@/components/hero-profile";
import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";

export function Hero() {
  return (
    <SectionContainer>
      <HeroProfile />
      <SectionSubHeader text="A little about me" />
      <p className="font-sans text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam,
        recusandae totam accusantium est ipsum architecto voluptate dolore atque
        magnam eveniet accusamus dolores illo autem ratione similique
        perferendis, facere deleniti!
      </p>
    </SectionContainer>
  );
}
