"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/events", label: "Upcoming Events" },
  { href: "/archive", label: "Archive" },
  { href: "/submit", label: "Submit Event" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#164E63] text-white">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-bricolage)] text-xl font-bold hover:text-[#22C55E] transition-colors"
          >
            Product in Seattle
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="btn btn-sm btn-green"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/subscribe"
                className="btn btn-md btn-green mt-2"
                onClick={() => setIsOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
