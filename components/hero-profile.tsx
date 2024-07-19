import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export function HeroProfile() {
  return (
    <div className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-center">
      <Image
        src={"/profile.jpg"}
        alt="Enoabasi Essien's profile picture"
        width={100}
        height={100}
        className="object-cover rounded-md"
      />
      <div>
        <p className="text-muted-foreground">
          Hello, I&apos;m{" "}
          <span className="font-medium text-foreground">Enoabasi Essien</span>.
        </p>
        <h1 className="text-3xl font-bold">Software Developer ✱</h1>
        <a href="https://www.uowdubai.ac.ae/" target="_blank" className="flex items-center justify-center px-3 py-1 mt-4 text-sm font-medium bg-blue-200 border border-blue-700 dark:border-blue-500 dark:bg-blue-900 w-fit rounded-xl outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary">
          <BadgeCheck className="flex-shrink-0 mr-2 size-4" />
          Bachelor of Computer Science &mdash; Multimedia &amp; Game Development
        </a>
      </div>
    </div>
  );
}
