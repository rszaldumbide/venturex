"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ValoresComponent from "@/components/valores";

const images = [
  "/imgs/carrousel/1.jpg",
  "/imgs/carrousel/2.jpg",
  "/imgs/carrousel/3.jpg",
];

const valores = [
  {
    icon: "superacion",
    title: "Superación",
    description:
      "Nos esforzamos constantemente por superar las expectativas de nuestros clientes. Valoramos el crecimiento y la evolución continua, tanto de nuestra plataforma como de las empresas que servimos. Creemos en el poder de la ambición y la determinación para alcanzar nuevos horizontes y transformar desafíos en oportunidades.",
  },
  {
    icon: "innovacion",
    title: "Innovación",
    description:
      "Creemos en la implementación de soluciones tecnológicas avanzadas y creativas que transformen la manera en que las empresas abordan el comercio internacional.",
  },
  {
    icon: "compromiso",
    title: "Compromiso",
    description:
      "Estamos dedicados a promover la expansión y el éxito de nuestros clientes. Nuestro compromiso se refleja en la calidad de los servicios que ofrecemos y en el apoyo constante que brindamos a lo largo del proceso de internacionalización.",
  },
  {
    icon: "constancia",
    title: "Constancia",
    description:
      "Mantenemos un esfuerzo continuo en la prestación de nuestros servicios para asegurar la satisfacción y el crecimiento de clientes, recibiendo el apoyo necesario en cada momento del crecimiento de sus negocios.",
  },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-1">
      {/* nav bar */}
      <div>
        <Navbar />
      </div>

      {/* carousel */}
      <div className="relative w-full" data-carousel="slide">
        <Carousel className="m-4">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <Image
                  src={image}
                  alt={`VentureX ${index + 1}`}
                  width={1400}
                  height={600}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length,
              )
            }
          />
          <CarouselNext
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            }
          />
        </Carousel>
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-sky-900" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <br />

      {/* cards */}
      <div className="container mt-4 max-w-4xl text-center">
        <h1 className="text-center text-4xl font-semibold text-cyan-800">
          Bienvenido a VentureX
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Plataforma digital que facilita la expansión internacional de empresas
          mediante servicios integrados de inteligencia de negocios,
          investigación de mercado y asesoramiento legal.
        </p>
      </div>

      <br />
      {/* Servicios clavex */}
      <div className="max-w-8xl container mt-8">
        <h1 className="mb-6 text-center text-3xl font-semibold text-cyan-800">
          Nuestros servicios
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card>
            <CardContent>
              <Image
                src="/imgs/services/1.jpg"
                alt="Servicio 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold text-cyan-700">
                Investigación de Mercado Internacional
              </h2>
              <p className="text-gray-600">
                Proveer datos y análisis sobre mercados globales para ayudar a
                las empresas a tomar decisiones informadas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src="/imgs/services/2.jpg"
                alt="Servicio 2"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold text-cyan-700">
                Asesoramiento Legal y Regulatorio para Exportadores
              </h2>
              <p className="text-gray-600">
                Brindar orientación legal y regulatoria para asegurar el
                cumplimiento en los mercados de destino.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src="/imgs/services/3.jpg"
                alt="Servicio 3"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold text-cyan-700">
                Asesoramiento en Acuerdos Comerciales Internacionales
              </h2>
              <p className="text-gray-600">
                Asistir a las empresas en la negociación y formalización de
                acuerdos comerciales.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src="/imgs/services/3.jpg"
                alt="Servicio 4"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold text-cyan-700">
                Inteligencia Competitiva Internacional
              </h2>
              <p className="text-gray-600">
                Ayudar a los clientes a comprender la competencia y el entorno
                competitivo global.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <br />
      {/* Valores empresariales */}
      <ValoresComponent valores={valores} />
    </div>
  );
}

export default HomePage;
