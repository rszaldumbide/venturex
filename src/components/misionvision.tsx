import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaBullseye, FaEye } from "react-icons/fa";

interface MissionVisionItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const missionVisionData: MissionVisionItem[] = [
  {
    icon: <FaBullseye className="text-4xl text-blue-500" />,
    title: "Misión",
    description:
      "Ser una plataforma digital que promueve la expansión internacional dentro del mercado comercial, ofreciendo servicios integrados de inteligencia de negocios, investigación de mercado y asesoramiento legal.",
  },
  {
    icon: <FaEye className="text-4xl text-green-500" />,
    title: "Visión",
    description:
      "En cinco años, Venturex se consolidará como una plataforma líder en la facilitación de conexiones comerciales globales. Aspiramos a ser el puente que derribe las barreras geográficas y permita la internacionalización múltiples empresas.",
  },
];

const MissionVisionComponent: React.FC = () => {
  return (
    <div className="container mx-auto mb-4 mt-10 max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {missionVisionData.map((item, index) => (
          <Card
            key={index}
            className="rounded-lg border border-gray-200 bg-cyan-50 shadow hover:bg-cyan-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CardContent className="flex flex-col items-center sm:flex-row p-3">
              <div className="w-full flex items-center justify-center sm:w-1/4">
                {item.icon}
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal sm:w-3/4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionComponent;
