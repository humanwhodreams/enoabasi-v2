import { Experience } from "@/components/pages/home/experience";
import { GetInTouch } from "@/components/pages/home/get-in-touch";
import { Hero } from "@/components/pages/home/hero";
import { Projects } from "@/components/pages/home/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <GetInTouch />
    </>
  );
}
