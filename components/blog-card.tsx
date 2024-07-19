import Link from "next/link";
import { formatDate } from "@/lib/date";

interface BlogCardProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function BlogCard({ slug, title, description, date }: BlogCardProps) {
  return (
    <Link
      href={slug}
      className="flex flex-col items-start p-2 transition-colors rounded-md hover:bg-secondary"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="font-medium">{title}</h3>

        <span className="font-sans text-sm font-medium text-muted-foreground">
          {formatDate(date)}
        </span>
      </div>

      <div className="mt-2">
        {description?.length! > 2 ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </Link>
  );
}
