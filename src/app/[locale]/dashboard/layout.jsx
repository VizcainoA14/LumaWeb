import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 select-none">
        <SideNav />
      </div>
      <div id="dashboard" className="grow p-4 md:overflow-y-auto md:p-4 bg-background dark:bg-background-dark select-none">{children}</div>
    </div>
  );
}
