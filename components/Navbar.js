
"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="SD Perfume Logo"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-emerald-500 font-semibold hover:text-emerald-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="text-emerald-500 hover:text-emerald-700 transition-colors duration-200"
            >
              <HiShoppingCart size={30} />
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-emerald-500 hover:text-emerald-700 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4">
            {menuLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-emerald-500 font-semibold hover:text-emerald-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}