import React, { useState } from "react";
import { FaStar, FaLightbulb, FaHandshake, FaClock } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";

interface Valor {
  icon: string;
  title: string;
  description: string;
}

interface ValoresComponentProps {
  valores: Valor[];
}

const iconMap: { [key: string]: JSX.Element } = {
  superacion: <FaStar className="text-cyan-800" />,
  innovacion: <FaLightbulb className="text-cyan-800" />,
  compromiso: <FaHandshake className="text-cyan-800" />,
  constancia: <FaClock className="text-cyan-800" />,
};

const ValoresComponent: React.FC<ValoresComponentProps> = ({ valores }) => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto mt-10 max-w-6xl">
      <h2 className="mb-6 text-center text-3xl font-semibold text-cyan-800">
        Nuestros Valores
      </h2>
      <ul className="space-y-6">
        {valores.map((valor, index) => (
          <li
          key={index}
          className={`p-6 bg-white rounded-lg shadow-md flex items-center space-x-6 transition-transform ${
            hoveredIndex === index && "transform scale-105"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className={`text-4xl`}>{iconMap[valor.icon]}</div>
            <div>
              <h3 className="text-2xl font-semibold text-cyan-700">
                {valor.title}
              </h3>
              <p id={`valor-${index}`} className="mt-2 text-gray-800">
                {valor.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValoresComponent;
