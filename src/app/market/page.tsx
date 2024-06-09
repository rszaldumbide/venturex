'use client';
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

type props = {
  administrador: string;
  email: string;
  numero: number;
};
const handleClick = (link: string) => {
  window.open(link, "_blank");
};
const cards = [
    { title: "Investigación del Mercado", icon: "fa-chart-line", link: "/market" },
    { title: "Asesoramiento Legal y Regulatorio", icon: "fa-balance-scale", link: "https://www.ejemploasesorialegal.com" },
    { title: "Acuerdos Comerciales Internacionales", icon: "fa-handshake", link: "https://www.ejemploacuerdoscomerciales.com" },
    { title: "Inteligencia Competitiva Internacional", icon: "fa-binoculars", link: "https://www.ejemplointeligenciacompetitiva.com" },
  ];

export default function Dashboard({ administrador = "admin", email, numero }: props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menú inicialmente cerrado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 text-white p-8">

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Dashboard Market</h1>
        <h3 className="flex justify-center space-x-4"> ¡Chúpelo, {administrador}!</h3>
      </header>

      
    </div>
  );
}
