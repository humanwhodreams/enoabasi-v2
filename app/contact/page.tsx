import * as React from "react";

import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/pages/contact/contact-form";
import { SectionContainer } from "@/components/section-container";

interface Props {}

export default function Page({}: Props) {
  return (
    <SectionContainer>
      <div className="mb-12 space-y-4">
        <h2 className="font-extrabold text-3xl md:text-5xl flex items-center justify-start w-fit">
          Contact me <ArrowUpRight size={42} className="flex-shrink-0 ml-2"/>
        </h2>
        <p className="text-muted-foreground">
        Feel free to reach out if you want to collarborate on a project, have a
        question, or just to connect.
      </p>
      </div>
      <ContactForm />
    </SectionContainer>
  );
}
