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
      <button onClick={toggleMenu} className=" fixed top-4 left-4 text-white text-2xl">
        <i className="fas fa-bars"></i> 
      </button>

      <aside className={`fixed top-0 left-0 h-screen w-64 bg-white bg-opacity-40 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-2xl">
          <i className="fas fa-times"></i> 
        </button>
        <div className="py-8 px-4">
          <h2 className="text-2xl font-bold my-4">Menú</h2>
          <ul>
            {cards.map((card, index) => (
              <li key={index} className="mb-2">
                <a 
                  href={card.link} 
                  rel="noopener noreferrer" 
                  className="block py-2 px-4 rounded hover:bg-blue-600 hover:text-white"
                >
                  <i className={`fas ${card.icon} mr-2`}></i> {card.title}
                </a>
                
              </li>
              
            ))}
            <li>
              
              <a
              rel="noopener noreferrer"  
              className="block py-2 px-4 rounded hover:bg-blue-600 hover:text-white">
              <i className="fas fa-gear pr-3"></i>Configuración</a>
              
            </li>
          </ul>
        </div>
      </aside>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Dashboard VentureX</h1>
        <h3 className="flex justify-center space-x-4"> ¡Bienvenido de vuelta, {administrador}!</h3>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <a 
          key={index} 
          href={card.link} 
          rel="noopener noreferrer" 
          className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <i className={`fas ${card.icon} text-4xl mb-4`}></i>
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
        </a>
        
        ))}
      </main>
    </div>
  );
}
