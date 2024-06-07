import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex max-h-screen items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-blue-600">
          ¡Bienvenido a VentureX!
        </h1>
        <Link legacyBehavior href="/login">
          <a className="text-lg text-blue-600">Ir a Login</a>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
