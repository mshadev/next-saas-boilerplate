import clxs from "clsx";

export interface ICardProps {
  className?: string;
}

export default function Card({ className = "p-10" }: ICardProps) {
  return (
    <div className={clxs(className, "rounded", "bg-neutral-700")}>
      <div className="columns-2">
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
