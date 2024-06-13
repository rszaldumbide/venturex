"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

type props = {
  administrador: string;
  email: string;
  numero: number;
};
const handleClick = (link: string) => {
  window.open(link, "_blank");
};
const cards = [
  {
    title: "Investigación del Mercado",
    icon: "fa-chart-line",
    link: "/market",
  },
  {
    title: "Asesoramiento Legal y Regulatorio",
    icon: "fa-balance-scale",
    link: "https://www.ejemploasesorialegal.com",
  },
  {
    title: "Acuerdos Comerciales Internacionales",
    icon: "fa-handshake",
    link: "https://www.ejemploacuerdoscomerciales.com",
  },
  {
    title: "Inteligencia Competitiva Internacional",
    icon: "fa-binoculars",
    link: "https://www.ejemplointeligenciacompetitiva.com",
  },
];

export default function Dashboard({
  administrador = "admin",
  email,
  numero,
}: props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menú inicialmente cerrado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 p-8 text-white">
      <button
        onClick={toggleMenu}
        className="fixed left-4 top-4 text-2xl text-white"
        title="open menu"
      >
        <i className="fas fa-bars"></i>
      </button>

      <aside
        className={`fixed left-0 top-0 h-screen w-64 transform bg-green-600 bg-opacity-60 shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={toggleMenu}
          className="absolute right-4 top-4 text-2xl text-white"
          title="Cerrar menú"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="px-4 py-8">
          <h2 className="my-4 text-2xl font-bold">Menú</h2>
          <ul>
            {cards.map((card, index) => (
              <li key={index} className="mb-2">
                <a
                  href={card.link}
                  rel="noopener noreferrer"
                  className="block rounded px-4 py-2 hover:bg-blue-600 hover:text-white"
                >
                  <i className={`fas ${card.icon} mr-2`}></i> {card.title}
                </a>
              </li>
            ))}
            <li>
              <a
                rel="noopener noreferrer"
                className="block rounded px-4 py-2 hover:bg-blue-600 hover:text-white"
              >
                <i className="fas fa-gear pr-3"></i>Configuración
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <header className="mb-8">
        <div className="flex tex-center align-center justify-center ">  
        <Image
          src="/imgs/venturex.png"
          alt="VentureX"
          width={40}
          height={40}
        ></Image>
        <h1 className="mb-4 text-center text-4xl font-bold">
          Dashboard VentureX
        </h1>
        </div>
        <h3 className="flex justify-center space-x-4">
          {" "}
          ¡Bienvenido de vuelta, {administrador}!
        </h3>
      </header>

      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            rel="noopener noreferrer"
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white bg-opacity-20 p-6 shadow-lg"
          >
            <i className={`fas ${card.icon} mb-4 text-4xl`}></i>
            <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
          </a>
        ))}
      </main>

      <br />
      {/* gif fondo */}

      <footer className="mt-8 text-center">
        <p>© 2024 VentureX. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
