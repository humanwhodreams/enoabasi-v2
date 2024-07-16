export function SectionSubHeader({
  text,
  sub,
}: {
  text: string;
  sub?: string;
}) {
  return (
    <h2 className="mb-2 font-semibold">
      {text}{" "}
      {sub ? (
        <span className="font-normal text-muted-foreground">&mdash; {sub}</span>
      ) : null}
    </h2>
  );
}
