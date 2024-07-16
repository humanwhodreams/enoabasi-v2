import Link from "next/link";
import { Send } from "lucide-react";

export function ContactMe() {
  return (
    // <Link
    //   href={"/contact"}
    //   className="relative inline-flex items-center justify-center px-3 py-1 overflow-hidden rounded group bg-primary text-primary-foreground"
    // >
    //   <span className="flex items-center justify-center font-medium">
    //     <Send className="mr-2 size-4" /> Contact Me
    //   </span>
    //   <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
    //     <div className="relative w-8 h-full bg-foreground/30"></div>
    //   </div>
    // </Link>

    <Link
      href={"/contact"}
      className="relative px-6 overflow-hidden transition bg-blue-500 rounded-md group text-neutral-50 hover:bg-blue-600"
    >
      <span className="relative">Contact Me</span>
      <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
        <div className="relative w-8 h-full bg-white/30"></div>
      </div>
    </Link>
  );
}
