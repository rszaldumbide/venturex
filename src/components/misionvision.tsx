import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface MissionVisionItem {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const missionVisionData: MissionVisionItem[] = [
  {
    imgSrc: "/imgs/misionvision/mision.jpg",
    altText: "Misión",
    title: "Misión",
    description:
      "Ser una plataforma digital que promueve la expansión internacional dentro del mercado comercial, ofreciendo servicios integrados de inteligencia de negocios, investigación de mercado y asesoramiento legal.",
  },
  {
    imgSrc: "/imgs/misionvision/vision.jpg",
    altText: "Visión",
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
              <Image
                src={item.imgSrc}
                alt={item.altText}
                width={200}
                height={300}
                className="w-full h-auto rounded-t-lg sm:w-1/2 sm:h-auto sm:rounded-none sm:rounded-l-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal sm:w-1/2">
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
