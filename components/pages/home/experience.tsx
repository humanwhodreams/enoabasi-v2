import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";
import { works } from "@/lib/works";

export function Experience() {
  return (
    <SectionContainer>
      <SectionSubHeader text="My experiences" />
      {works.map((work, idx) => (
        <Accordion key={idx} type="single" collapsible>
          <AccordionItem value={work.office}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-col items-start gap-2">
                <span className="text-2xl font-semibold leading-none tracking-tight">
                  {work.position}
                </span>
                <span className="flex items-center gap-4 text-sm text-muted-foreground">
                  {work.office}
                  <span>
                    {work.duration.start} &mdash;{" "}
                    {work.duration.end.toLowerCase() === "now" ? (
                      <span className="font-semibold text-primary">
                        {work.duration.end}
                      </span>
                    ) : (
                      <>{work.duration.end}</>
                    )}
                  </span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 list-disc list-inside">
                {work.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </SectionContainer>
  );
}
