"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "Video", href: "/video" },
    { name: "Image", href: "/image" },
    { name: "ABOUT ME", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <section className="px-12 py-10">
      <header className="mb-30 flex justify-end">
        <nav className="flex gap-12 text-xs font-semibold tracking-[0.35em] uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-[#d8b46a]"
                  : "text-white hover:text-[#d8b46a]"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </section>
  );
}