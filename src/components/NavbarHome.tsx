import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { ModeToggle } from "@/components/ModeToggle";

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/Logo VentureX.svg"
              alt="VentureX"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold text-blue-900">
              VentureX
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-4 md:flex">
          <ModeToggle />
          <Link href="/about">
            <Button className="text-gray-800 hover:text-blue-900 dark:text-gray-200 dark:hover:text-blue-600">
              About
            </Button>
          </Link>
          <Link href="/services">
            <Button className="text-gray-800 hover:text-blue-900 dark:text-gray-200 dark:hover:text-blue-600">
              Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="text-gray-800 hover:text-blue-900 dark:text-gray-200 dark:hover:text-blue-600">
              Contact
            </Button>
          </Link>
          <Link href="/login">
            <Button className="block rounded bg-blue-900 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-800 dark:text-gray-200 dark:hover:text-blue-600">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 flex flex-col items-center justify-center space-y-2 md:hidden">
          <Link href="/about">
            <Button className="block text-gray-800 hover:text-blue-900">
              About
            </Button>
          </Link>
          <Link href="/services">
            <Button className="block text-gray-800 hover:text-blue-900">
              Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="block text-gray-800 hover:text-blue-900">
              Contact
            </Button>
          </Link>
          <Link href="/login">
            <Button className="block rounded bg-blue-900 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-800">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavbarHome;
