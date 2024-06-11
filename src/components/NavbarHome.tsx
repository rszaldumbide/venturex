import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

function NavbarHome() {
  return (
    <nav className="ml-4 mr-4 bg-cyan-900 p-3 rounded-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image
              src="/Logo VentureX.svg"
              alt="VentureX"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="ml-2 text-lg font-semibold text-teal-50">
              VentureX
            </span>
          </a>
        </Link>
        <div className="flex items-center justify-between">
          <Link href="/login" legacyBehavior >
            <a className="ml-4 text-white m-2">Login</a>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default NavbarHome;