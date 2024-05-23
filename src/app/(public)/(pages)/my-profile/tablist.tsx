"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Link from "next/link";
export default function TabLits() {
  const pathname = usePathname();
  const tabItems = [
    {
      name: "Posts",
      link: "/MyProfile",
    },
    {
      name: "About",
      link: "/MyProfile/about",
    },
    {
      name: "Friends",
      link: "/MyProfile/friends",
    },
    {
      name: "Skills",
      link: "/MyProfile/skills",
    },
    {
      name: "Achievements",
      link: "/MyProfile/achievements",
    },
  ];
  return (
    <div className="flex  gap-4 bg-transparent overflow-x-scroll hideScrollbar ">
      {tabItems.map((link, index) => (
        <Link
          key={index + link.name}
          href={link.link}
          className={clsx(
            "p-4 rounded-md font-semibold text-sm md:text-md  text-gray-500 hover:bg-sky-100 hover:text-blue-600 dark:hover:bg-gray-700 transition-all ease-in-out cursor-pointer",
            {
              "bg-sky-100 text-blue-600": pathname === link.link,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
