export function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-start justify-start p-4 md:items-center md:justify-center gap-y-4">
        <span className="text-xs font-medium text-muted-foreground">
          Made with ❤️ + ☕
        </span>

        <span className="text-xs font-medium text-muted-foreground">
          Built using{" "}
          <OtherLink href="https://nextjs.org" label="Next.js (TypeScript)" /> +{" "}
          <OtherLink href="https://tailwindcss.com" label="Tailwindcss" /> +{" "}
          <OtherLink href="https://ui.shadcn.com" label="Shadcn/ui" /> &amp;{" "}
          <OtherLink href="https://velite.js.org" label="Velite" />
        </span>
      </div>
    </footer>
  );
}

function OtherLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-foreground rounded-md outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary"
    >
      {label}
    </a>
  );
}
