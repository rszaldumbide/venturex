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
  superacion: <FaStar />,
  innovacion: <FaLightbulb />,
  compromiso: <FaHandshake />,
  constancia: <FaClock />,
};

const ValoresComponent: React.FC<ValoresComponentProps> = ({ valores }) => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardBgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-cyan-50';
  const iconColor = theme === 'dark' ? 'text-cyan-300' : 'text-cyan-800';

  return (
    <div className="container mx-auto mt-10 max-w-6xl mb-4">
      <h2 className={`mb-6 text-center text-3xl font-semibold ${iconColor}`}>
        Nuestros Valores
      </h2>
      <ul className="space-y-6">
        {valores.map((valor, index) => (
          <li
            key={index}
            className={`p-6 ${cardBgColor} rounded-lg shadow-md flex items-center space-x-6 transition-transform ${
              hoveredIndex === index && "transform scale-105"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`text-4xl ${iconColor}`}>{iconMap[valor.icon]}</div>
            <div>
              <h3 className={`text-2xl font-semibold ${iconColor}`}>
                {valor.title}
              </h3>
              <p id={`valor-${index}`} className={`mt-2 ${textColor}`}>
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
