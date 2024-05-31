"use client";

import { DashboardIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { name: "Date Range", href: "/dashboard/daterange", icon: CalendarIcon }
];

export default function NavLinks() {
  const pathname = usePathname();
  let fixedPathmane = pathname.substring(3, pathname.length);

  return (
    <div>
      {links.map(link => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-14 px-4 items-center gap-2 font-semibold text-sm text-on-surface-variant dark:text-on-surface-variant-dark rounded-full transition-all hover:bg-surface-container dark:hover:bg-surface-container-dark",
              {
                "bg-secondary-container text-on-secondary-container rounded-full dark:bg-secondary-container-dark dark:text-on-secondary-container-dark dark:hover:bg-surface-container-dark":
                  fixedPathmane === link.href
              }
            )}
          >
            <LinkIcon/>
            <p className="hidden md:block">
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
