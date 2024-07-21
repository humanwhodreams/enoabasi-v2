export function SectionSubHeader({
  text,
  sub,
  linkTo,
}: {
  text: string;
  sub?: string;
  linkTo?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center justify-between mb-4">
      <h2 className="font-medium">
        {text}{" "}
        {sub ? (
          <span className="font-normal text-muted-foreground">
            &mdash; {sub}
          </span>
        ) : null}
      </h2>
      {linkTo}
    </div>
  );
}
