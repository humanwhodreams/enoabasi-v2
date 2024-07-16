import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { social_links } from "@/lib/links";

export function Socials() {
  return (
    <TooltipProvider delayDuration={0}>
      {social_links.map((link, idx) => {
        return (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="p-1 transition-colors rounded-md hover:bg-muted outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary">
                <link.icon className="rounded-md size-5"/>
              </a>
            </TooltipTrigger>
            <TooltipContent align="center" side="bottom">
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </TooltipProvider>
  );
}
