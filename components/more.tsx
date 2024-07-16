import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function More({ href, label }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center px-4 py-1 text-sm font-medium underline transition-colors underline-offset-2 text-muted-foreground hover:text-foreground outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary rounded-md"
    >
      {label}
      <ArrowUpRight className="flex-shrink-0 ml-2 size-4 text-muted-foreground" />
    </Link>
  );
}
