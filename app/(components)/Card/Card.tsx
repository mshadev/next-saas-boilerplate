import clxs from "clsx";

export interface ICardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = "p-10", children }: ICardProps) {
  return (
    <div className={clxs(className, "rounded-lg", "bg-neutral-700")}>
      {children}
    </div>
  );
}
