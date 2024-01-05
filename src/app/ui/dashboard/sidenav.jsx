import Link from "next/link";
import DarkTheme from "./darktheme";

export default function SideNav() {
  return (
    <div className="flex h-full flex-row justify-between md:flex-col px-3 py-6 md:px-2 bg-on-background text-primary-dark">
      <h1 className="text-2xl text-on-primary" style={{ fontFamily: "clash" }}>
        Luma
      </h1>
      <DarkTheme />
    </div>
  );
}
