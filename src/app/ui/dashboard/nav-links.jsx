'use client'

import { DashboardIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
    { name: "Date Range", href: "/dashboard/daterange", icon: CalendarIcon }
]

export default function NavLinks() {
    const pathname = usePathname();
    let fixedPathmane = pathname.substring(3, pathname.length);

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-10 px-4 items-center gap-2 text-on-primary rounded-lg',
                            {
                                'bg-secondary/60 text-on-secondary rounded-md': fixedPathmane === link.href,
                            }
                        )}      
                    >
                        <LinkIcon />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
