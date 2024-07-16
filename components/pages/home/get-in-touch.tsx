import { SectionContainer } from "@/components/section-container";
import { SectionSubHeader } from "@/components/section-headings";
import { TooltipLink } from "@/components/tooltip-link";
import { socialLinks } from "@/lib/links";

interface Props {}

export function GetInTouch({}: Props) {
  return (
    <SectionContainer>
      <SectionSubHeader text="Get in touch" />
      <p className="text-muted-foreground">
        Feel free to reach out if you want to collarborate on a project, have a
        question, or just to connect.
      </p>
      <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center gap-6">
        <div className="flex items-center justify-center mt-6 gap-4">
          {socialLinks.map((link, idx) => (
            <TooltipLink key={idx} description={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-md hover:bg-muted outline outline-offset-2 outline-0 focus-visible:outline-2 group outline-primary"
              >
                <link.icon className="rounded-md size-6 group-hover:text-primary" />
                <span className="sr-only">{link.label}</span>
              </a>
            </TooltipLink>
          ))}
        </div>
        <div className="text-muted-foreground text-sm">or schedule a call directly with</div>
        <TooltipLink description="cal.com">
          <a
            href="https://cal.com/enoabasiessien/15"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border border-border transition-colors rounded-md hover:bg-muted outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary"
          >
            Schedule a call
          </a>
        </TooltipLink>
      </div>
    </SectionContainer>
  );
}
