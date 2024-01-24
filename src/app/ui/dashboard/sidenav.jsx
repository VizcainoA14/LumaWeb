import DarkTheme from "./darktheme";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-row justify-between lg:flex-col px-3 py-6 md:px-2 bg-on-background" style={{ fontFamily: "clash" }}>
      <div className="text-2xl text-on-primary">
        Luma
      </div>
      <div className="w-40 md:w-full text-white flex flex-row md:flex-col">
        <NavLinks />
      </div>
      <DarkTheme />
    </div>
  );
}
