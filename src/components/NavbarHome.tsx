import "@fortawesome/fontawesome-free/css/all.min.css"; 
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
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
            <span className="text-xl font-semibold text-blue-900">VentureX</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/about">
            <Button className="text-gray-800 hover:text-blue-900">About</Button>
          </Link>
          <Link href="/services">
            <Button className="text-gray-800 hover:text-blue-900">Services</Button>
          </Link>
          <Link href="/contact">
            <Button className="text-gray-800 hover:text-blue-900">Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 flex flex-col items-center justify-center">
          <Link href="/about">
            <Button className="block text-gray-800 hover:text-blue-900">About</Button>
          </Link>
          <Link href="/services">
            <Button className="block text-gray-800 hover:text-blue-900">Services</Button>
          </Link>
          <Link href="/contact">
            <Button className="block text-gray-800 hover:text-blue-900">Contact</Button>
          </Link>
          <Link href="/login">
            <Button className="block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-200">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavbarHome;
