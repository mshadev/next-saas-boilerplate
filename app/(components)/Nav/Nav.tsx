import { Menu } from "lucide-react";
import Dropdown from "@/app/(components)/Dropdown/Dropdown";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar flex w-full justify-between">
      <div className="cursor-pointer text-2xl">SaaSy Boilerplate</div>

      <Dropdown icon={<Menu />}>
        <Link href="/api/auth/signin">Login</Link>
      </Dropdown>
    </div>
  );
}
