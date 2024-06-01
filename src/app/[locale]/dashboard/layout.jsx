import SideNav from "@/app/ui/dashboard/sidenav";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Suspense} from "react";

export default function Layout({ children }) {
  return (
    <div className="flex lg:h-screen flex-col lg:flex-row md:overflow-hidden">
      <div className=" sm:w-full lg:w-[20svw] xl:w-[12svw]  flex-none select-none">
        <SideNav />
      </div>
      <div id="dashboard" className="sm:w-full lg:w-[80svw] xl:w-[88svw] grow 2xl:justify-center p-4 md:overflow-y-auto md:p-4 bg-background dark:bg-background-dark antialiased select-none">
        {children}
        <SpeedInsights />
      </div>
    </div>
  );
}
