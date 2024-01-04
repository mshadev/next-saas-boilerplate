import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <div className="navbar flex w-full justify-between">
      <div className="cursor-pointer text-2xl">SaaSy Boilerplate</div>

      <button className="btn btn-round btn-ghost">
        <Menu />
      </button>
    </div>
  );
}
