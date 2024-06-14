import { Link } from "@/navigation";
import DarkTheme from "./darktheme";
import NavLinks from "@/components/dashboard/nav-links";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

export default function SideNav() {
  return (
    <div
      className="flex w-full h-full flex-row md:flex-col px-4 md:p-4 lg:flex-col items-center justify-between bg-surface-container-low dark:bg-surface-container-low-dark"
      style={{ fontFamily: "clash" }}
    >
      <div
        id="sideNavContent"
        className="w-full flex flex-row md:flex-col justify-between items-center"
      >
        <div id="sideBrandContainer" className="md:w-full h-full">
          <h2 className="font-semibold text-2xl text-on-surface dark:text-on-surface-dark transition-all">
            <Link href="/">Luma</Link>
          </h2>
        </div>
        {/* Navbar content for md+ screens */}
        <div
          id="navLinksContainer"
          className="hidden md:flex flex-row md:flex-col md:w-full text-white"
        >
          <p className="font-semibold text-on-surface-variant-dark text-sm my-2">
            Mode
          </p>
          <NavLinks />
        </div>
        {/* Navbar content for mobile screens */}
        <div id="mobileSheetContainer" className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-0 w-12 h-12">
              <HamburgerMenuIcon className="w-10 h-10" />
            </SheetTrigger>
            <SheetContent style={{fontFamily: 'archivo'}}>
              <SheetHeader className={"items-start"}>
                <SheetTitle>Luma menu</SheetTitle>
                <SheetDescription className={"items-start text-start"}>
                  <ul className="mt-4 text-xl text-on-surface dark:text-on-surface-dark">
                    <li><Link href="/dashboard">One date</Link></li>
                    <li><Link href="/dashboard/daterange">Date range</Link></li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
