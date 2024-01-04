import { Menu } from "lucide-react";
import Dropdown from "../Dropdown/Dropdown";

export default function Nav() {
  return (
    <div className="navbar flex w-full justify-between">
      <div className="cursor-pointer text-2xl">SaaSy Boilerplate</div>

      <Dropdown icon={<Menu />}>
        <div>Login</div>
      </Dropdown>
    </div>
  );
}
