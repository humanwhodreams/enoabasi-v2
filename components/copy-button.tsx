"use client";

import { Check, Copy } from "lucide-react";

import { Button } from "./ui/button";
import { useState } from "react";

export function CopyButton({ text }: { text: any }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? Check : Copy;

  return (
    <Button disabled={isCopied} onClick={copy} variant="ghost" size="icon">
      <Icon className="h-4 w-4" />
    </Button>
  );
}
