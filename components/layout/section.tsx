import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "default" | "tight" | "loose";
};

const spacingMap = {
  tight: "py-14 sm:py-20 lg:py-24",
  default: "py-20 sm:py-28 lg:py-36",
  loose: "py-28 sm:py-36 lg:py-48",
} as const;

export function Section({
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacingMap[spacing], className)} {...props} />
  );
}
