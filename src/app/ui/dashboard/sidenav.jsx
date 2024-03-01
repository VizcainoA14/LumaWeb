import { Link } from "@/navigation";
import DarkTheme from "./darktheme";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
  return (
    <div
      className="flex h-full flex-row justify-between lg:flex-col px-3 py-6 md:px-2 bg-on-background"
      style={{ fontFamily: "clash" }}
    >
      <div>
        <h2 className="font-semibold text-2xl text-on-background-dark hover:text-white transition-all"><Link href="/">Luma</Link></h2>
        <div className="w-40 md:w-full text-white flex flex-row md:flex-col">
          <p className="font-semibold text-outline-dark text-sm my-2">Mode</p>
          <NavLinks />
        </div>
      </div>

      <DarkTheme />
    </div>
  );
}
