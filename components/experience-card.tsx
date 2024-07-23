import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  position: string;
  office: string;
  duration: {
    start: string;
    end: string;
  };
  roles: string[];
}

export function ExperienceCard({ position, office, duration, roles }: Props) {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="p-0 md:p-2">
        <CardTitle>{position}</CardTitle>
        <CardDescription>
          {office}{" "}|{" "}
          <span>
            {duration.start} &mdash;{" "}
            {duration.end.toLowerCase() === "now" ? (
              <span className="font-semibold text-primary">{duration.end}</span>
            ) : (
              <>{duration.end}</>
            )}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 md:p-4 md:pt-0">
        <ul className="ml-6 list-disc text-muted-foreground">
          {roles.map((role, i) => (
            <li key={i}>{role}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}