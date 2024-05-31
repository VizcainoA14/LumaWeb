import { Link } from "@/navigation";
import DarkTheme from "./darktheme";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
  return (
    <div
      className="flex w-full h-full flex-row justify-between p-4 lg:flex-col  bg-surface-container-low dark:bg-surface-container-low-dark"
      style={{ fontFamily: "clash" }}
    >
      <div>
        <h2 className="font-semibold text-2xl text-on-surface dark:text-on-surface-dark transition-all"><Link href="/">Luma</Link></h2>
        <div className="w-40 md:w-full text-white flex flex-row md:flex-col">
          <p className="font-semibold text-on-surface-variant-dark text-sm my-2">Mode</p>
          <NavLinks />
        </div>
      </div>

      <DarkTheme />
    </div>
  );
}
