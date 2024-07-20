import { FaHashtag } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MdxLinkProps = {
  className?: string;
  as: keyof JSX.IntrinsicElements;
  id?: string;
  children?: React.ReactNode;
};

const anchorEncode = (text?: string) => {
  if (!text) return undefined;

  return text.toLowerCase().replace(/ /g, "-");
};

export function MdxLink({
  id,
  children,
  className,
  as,
  ...props
}: MdxLinkProps) {
  const Component = as;

  let _id = id || anchorEncode(children as string);

  return (
    <Component
      id={_id}
      className={cn("mb-[0.5em] w-fit scroll-mt-20 group", className)}
      {...props}
    >
      <Link
        href={`#${_id}`}
        className="flex items-center p-1 font-semibold tracking-tight no-underline transition-colors rounded-md hover:bg-muted outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary"
      >
        {children}
        <FaHashtag role="img" className="ml-1 transition-opacity h-[1ch] lg:opacity-0 lg:group-hover:opacity-100" />
      </Link>
    </Component>
  );
}
