"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative bg-[#e4e4e4] p-4 z-10 bg-accent">
      <nav className="flex justify-between items-center py-6">
        <div className="text-white font-bold p-4 rounded-full text-lg">PureShop</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white text-lg">
              Products
            </Link>
          </li>
        </ul>
        <div className="md:hidden flex flex-col cursor-pointer z-20" onClick={toggleMobileMenu}>
          <div className={`w-8 h-1 bg-white my-0.5 transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-8 h-1 bg-white my-0.5 transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-8 h-1 bg-white my-0.5 transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </div>
      </nav>

      <div className={`fixed inset-0  bg-accent flex justify-center items-center transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="text-center space-y-8">
          <li>
            <Link href="/" className="text-white text-2xl" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white text-2xl" onClick={toggleMobileMenu}>
              Products
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
