"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "About us" },
    { href: "/projects", label: "Projects" },
    { href: "/agents", label: "Agents" },
    { href: "/services", label: "Services" },
  ];

  return (
    <div className="w-full top-0 sticky py-4 z-50">
      <div className="container mx-auto xl:max-w-[1400px] py-2 px-4 rounded-full bg-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-700">NasiiB</h1>
          <div className="flex items-center gap-4 py-2 px-4 bg-white rounded-full">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  pathname === href ? "text-red-500 " : "text-gray-400"
                } transition-colors duration-200 `}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
