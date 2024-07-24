import "@/style/tailwind.css";

import { Footer } from "@/components/footer";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
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
          "antialiased flex flex-col items-center justify-between min-h-[100dvh] relative font-sans",
          GeistSans.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1 w-full my-12">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
