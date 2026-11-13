"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ToothLogo from "@/components/ToothLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#eef4fd]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <ToothLogo className="h-11 w-11 text-action" />
          <div className="leading-none">
            <span className="block text-2xl font-bold tracking-tight text-brand">
              Uma
            </span>
            <span className="mt-0.5 block text-[0.7rem] font-semibold tracking-[0.35em] text-brand">
              DENTAL CARE
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[0.95rem] font-medium transition-colors hover:text-action ${
                  isActive(link.href) ? "text-action" : "text-brand"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/book-appointment"
          className="hidden rounded-xl bg-brand px-6 py-3 text-[0.95rem] font-semibold text-white shadow-sm transition-colors hover:bg-action lg:inline-block"
        >
          Book Appointment
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-brand hover:bg-highlight/20 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-highlight/20 bg-light lg:hidden">
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 font-medium transition-colors hover:bg-highlight/20 ${
                    isActive(link.href) ? "text-action" : "text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/book-appointment"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-brand px-6 py-3 text-center font-semibold text-white hover:bg-action"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
