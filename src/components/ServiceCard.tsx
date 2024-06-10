import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "next-themes";

interface ServiceCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  altText,
  title,
  description,
}) => {
  const { theme } = useTheme();

  const cardBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-cyan-50';
  const textColor = theme === 'dark' ? 'text-white' : 'text-cyan-700';
  const descColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <Card className={`transform transition-transform duration-300 hover:scale-105 drop-shadow-xl ${cardBgColor}`}>
      <CardContent className="pt-4">
        <Image
          src={imgSrc}
          alt={altText}
          width={300}
          height={200}
          className="rounded-lg mb-2"
        />
        <h2 className={`text-xl font-semibold ${textColor}`}>{title}</h2>
        <p className={`${descColor}`}>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
