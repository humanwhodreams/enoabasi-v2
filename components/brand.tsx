import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function Brand({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        // base
        "p-1 transition-colors duration-300 rounded",
        // focus
        "outline outline-offset-2 outline-0 focus-visible:outline-2",
        // outline color
        "outline-primary",
        className
      )}
    >
      Enoabasi Essien
    </Link>
  );
}
