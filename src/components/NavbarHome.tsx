import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title (Left Side) */}
        <Link href="/">
        <div className="flex items-center"> 
          <Image
            src="/Logo VentureX.svg"
            alt="VentureX"
            width={40}
            height={40}
          />
          <span className="ml-2 text-xl font-semibold text-blue-900">VentureX</span>
        </div>
      </Link>

        {/* Navigation and Actions (Right Side) */}
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-2">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Language and Login */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">ESP</span>
            <Link href="/login">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-200">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">
            <a className="block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-200">
              Login
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavbarHome;
