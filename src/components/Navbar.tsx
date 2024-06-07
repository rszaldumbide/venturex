import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link legacyBehavior href="/">
          <a className="text-lg font-semibold text-white">VentureX</a>
        </Link>
        <div>
          <ModeToggle />
          <Link legacyBehavior href="/login">
            <a className="ml-4 text-white">Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
