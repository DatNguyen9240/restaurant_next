"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-gray-900">
              Menu
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/food-carts"
              className="text-gray-700 hover:text-gray-900"
            >
              Food Carts
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className={`absolute right-0 h-10 px-4 py-2 border rounded-lg outline-none bg-white transition-all duration-300 ease-in-out ${
                  isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                } -mr-2`}
                autoFocus={isSearchOpen}
              />
              <button
                className="p-2 relative z-10 hover:bg-gray-100 rounded-full transition-all duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <Link href="/table-map" className="relative">
              <button className="p-2 border border-red-200 shadow-md shadow-red-100 rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-sm font-medium">Xem sơ đồ bàn</span>
              </button>
            </Link>
            <div className="relative">
              <button className="p-2 border border-red-200 shadow-md shadow-red-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
