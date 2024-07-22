import { CopyButton } from "./copy-button";

export function CodeBlock({ children, ...props }: { children: any; title: string }) {
  return (
    <>
      <div className="rounded-t-md px-4 py-1 bg-background text-sm border-muted-foreground/20 border-x-[2px] border-t-[2px] text-muted-foreground flex flex-row justify-between items-center font-medium">
        <div>{props.title}</div>

        <CopyButton text={children.props.raw} />
      </div>
      {children}
    </>
  );
}
