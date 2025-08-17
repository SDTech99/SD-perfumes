"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery); // Replace with actual search logic
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="SD Perfumes Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold text-emerald-500 items-center">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <Link href="/products" className="hover:text-emerald-700">Shop</Link>
          <div className="relative group">
            <button className="cursor-pointer hover:text-emerald-700">Categories ▾</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
              <Link href="/category/mens" className="block px-4 py-2 text-gray-600 hover:bg-emerald-100">Men’s Perfumes</Link>
              <Link href="/category/womens" className="block px-4 py-2 text-gray-600 hover:bg-emerald-100">Women’s Perfumes</Link>
              <Link href="/category/unisex" className="block px-4 py-2 text-gray-600 hover:bg-emerald-100">Unisex</Link>
              <Link href="/category/gift-sets" className="block px-4 py-2 text-gray-600 hover:bg-emerald-100">Gift Sets</Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-emerald-700">About</Link>
          <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
        </div>

        {/* Search bar (Desktop & Tablet) */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-50">
          <input
            type="text"
            placeholder="Search perfumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none px-2 text-sm w-40"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")}>
              <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
            </button>
          )}

          <button
            onClick={handleSearch}
            className="text-emerald-500 hover:text-emerald-700"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-emerald-500 hover:text-emerald-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              20
            </span>
          </Link>
          <Link href="/account">
            <User className="w-5 h-5 text-emerald-500 hover:text-emerald-700" />
          </Link>
          <button
            className="md:hidden ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 animate-slide-down">
          {/* Mobile Search bar */}
          <div className="flex items-center border rounded-full px-3 py-1 bg-gray-50">
            <input
              type="text"
              placeholder="Search perfumes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none px-2 text-sm flex-1"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}>
                <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
            )}

            <button
              onClick={handleSearch}
              className="text-emerald-500 hover:text-emerald-700"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          <Link href="/" className="block font-medium text-emerald-500 hover:bg-emerald-100">Home</Link>
          <Link href="/products" className="block font-medium text-emerald-500 hover:bg-emerald-100">Shop</Link>
          <details className="group">
            <summary className="cursor-pointer font-medium text-emerald-500 hover:bg-emerald-100 list-none">
              Categories
            </summary>
            <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
              <Link href="/category/mens" className="block text-gray-600 hover:bg-emerald-100">Men’s Perfumes</Link>
              <Link href="/category/womens" className="block text-gray-600 hover:bg-emerald-100">Women’s Perfumes</Link>
              <Link href="/category/unisex" className="block text-gray-600 hover:bg-emerald-100">Unisex</Link>
              <Link href="/category/gift-sets" className="block text-gray-600 hover:bg-emerald-100">Gift Sets</Link>
            </div>
          </details>
          <Link href="/about" className="block font-medium text-emerald-500 hover:bg-emerald-100">About</Link>
          <Link href="/contact" className="block font-medium text-emerald-500 hover:bg-emerald-100">Contact</Link>
        </div>
      )}
    </nav>
  );
}
