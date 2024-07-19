import "@/style/tailwind.css";

import { Footer } from "@/components/footer";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/header";
import Image from "next/image";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { inter } from "@/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased flex flex-col items-center justify-between min-h-[100dvh] relative",
          inter.className,
          GeistSans.variable
        )}
      >
        <Providers>
          <Image
            src={"/nnoise.svg"}
            alt="background"
            width={0}
            height={0}
            className="absolute inset-0 object-cover w-full h-full -z-50"
          />
          <Header />
          <main className="flex-1 w-full my-12">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
