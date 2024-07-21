"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  totalPages: number;
  className?: string;
}

export function BlogPagination({ totalPages, className }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage: number = Number(searchParams.get("page")) || 1;

  const previousPage: number = currentPage - 1;
  const nextPage: number = currentPage + 1;

  function generateURLParam(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());

    return `${pathname}?${params}`;
  }

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        {previousPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={generateURLParam(previousPage)} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <Button variant="outline" size="icon" className="mr-2" disabled>
              <ChevronLeft className="text-muted-foreground flex-shrink-0" />
              <span className="sr-only">previous</span>
            </Button>
          </PaginationItem>
        )}

        {Array(totalPages)
          .fill("")
          .map((_, idx) => (
            <PaginationItem key={idx} className="hidden sm:inline-block">
              <PaginationLink
                href={generateURLParam(idx + 1)}
                isActive={currentPage === idx + 1}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={generateURLParam(nextPage)} />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <Button variant="outline" size="icon" className="ml-2" disabled>
              <ChevronRight className="text-muted-foreground flex-shrink-0" />
              <span className="sr-only">next</span>
            </Button>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
