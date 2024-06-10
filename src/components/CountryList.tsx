import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const countries = {
  Sudamérica: [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Paraguay",
    "Perú",
    "Uruguay",
    "Venezuela",
  ],
  "N/Centro América": [
    "Canadá",
    "Costa Rica",
    "El Salvador",
    "Estados Unidos",
    "Guatemala",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "República Dominicana",
  ],
  Europa: [
    "Alemania",
    "Austria",
    "Bulgaria",
    "Bélgica",
    "Chipre",
    "Croacia",
    "Dinamarca",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estonia",
    "Finlandia",
    "Francia",
    "Grecia",
    "Hungría",
  ],
  // ... otros continentes y países
};

const CountryList = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-transparent py-20">
      {/* Fondo del mapa mundial */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/worldmap.webp"
          alt="Mapa del mundo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={`opacity-50 `}
        />
      </div>

      {/* Overlay con desenfoque en la parte superior e inferior */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-100/95 to-transparent dark:from-gray-900/95"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-100/95 to-transparent dark:from-gray-900/95"></div>

      {/* Contenido */}
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-6 text-center text-4xl font-bold text-cyan-800 drop-shadow-md dark:text-cyan-200">
          Estadísticas de países Online
        </h2>
        <p className="mb-12 text-center text-lg text-gray-700 drop-shadow-md dark:text-gray-300">
          Sin Restricciones, sin Pedido de informes, la información más completa
          disponible en nuestro Sistema
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(countries).map(([continent, countryList]) => (
            <div
              key={continent}
              className="rounded-lg bg-white/20 p-6 shadow-xl backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl dark:bg-black/20"
            >
              <h3 className="mb-4 text-2xl font-semibold text-cyan-700 drop-shadow-md dark:text-cyan-300">
                {continent}
              </h3>
              <ul className="columns-2 space-y-1 text-sm">
                {countryList.map((country) => (
                  <li
                    key={country}
                    className="text-gray-800 drop-shadow-sm dark:text-gray-200"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
