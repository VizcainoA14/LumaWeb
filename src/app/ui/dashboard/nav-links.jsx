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

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-10 grow gap-2 rounded-full',
                            {
                                'bg-primary-container-dark text-on-primary-container-dark': pathname === link.href,
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
