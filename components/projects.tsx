import Link from "next/link";

export function ProjectsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  );
}

interface ProjectCardProps {
  index: number;
  title: string;
  tldr: string;
  tags: string[];
  website?: string;
}

export function ProjectCard({
  index,
  tags,
  title,
  tldr,
  website = "#",
}: ProjectCardProps) {
  return (
    <Link
      href={website}
      className="p-4 space-y-4 transition-colors duration-300 rounded-lg hover:bg-muted dark:hover:bg-muted/50"
    >
      <div className="space-y-2">
        <h3 className="font-medium">
          <span className="text-muted-foreground/60">{index + 1}.</span> {title}
        </h3>
        <p className="text-sm text-muted-foreground">{tldr}</p>
      </div>

      <ul className="flex flex-wrap items-center gap-2">
        {tags.map((tag, idx) => {
          return (
            <li key={idx}>
              <span className="px-2 py-1 text-xs border rounded-full bg-muted border-muted-foreground">
                {tag}
              </span>
            </li>
          );
        })}
      </ul>
    </Link>
  );
}
