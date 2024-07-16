import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className }: Props) {
  return (
    <section
      className={cn(
        "max-w-3xl mx-auto mb-6 px-4 py-2 sm:px-6 lg:px-8 xl:px-12",
        className
      )}
    >
      {children}
    </section>
  );
}
