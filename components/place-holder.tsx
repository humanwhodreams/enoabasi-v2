export function Placeholder({ text }: { text: string }) {
  return (
    <div className="p-4 space-y-4 transition-colors duration-300 rounded-lg bg-muted dark:hover:bg-muted/50 outline outline-offset-2 outline-0 focus-visible:outline-2 outline-primary col-span-1 md:col-span-2">
      {text}
    </div>
  );
}
