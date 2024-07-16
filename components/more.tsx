import { ArrowUpRight, Link } from "lucide-react";

export function More({ href, label }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center px-4 py-1 text-sm font-medium underline transition-colors underline-offset-2 text-muted-foreground hover:text-foreground"
    >
      {label}
      <ArrowUpRight className="flex-shrink-0 ml-2 size-4 text-muted-foreground" />
    </Link>
  );
}
