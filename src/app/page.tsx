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
import MissionVisionComponent from "@/components/misionvision";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import CountryList from "@/components/CountryList";

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

const servicios = [
  {
    imgSrc: "/imgs/servicios/1.jpg",
    altText: "Servicio 1",
    title: "Investigación de Mercado Internacional",
    description:
      "Proveer datos y análisis sobre mercados globales para ayudar a las empresas a tomar decisiones informadas.",
  },
  {
    imgSrc: "/imgs/servicios/2.jpg",
    altText: "Servicio 2",
    title: "Asesoramiento Legal y Regulatorio para Exportadores",
    description:
      "Brindar orientación legal y regulatoria para asegurar el cumplimiento en los mercados de destino.",
  },
  {
    imgSrc: "/imgs/servicios/3.jpg",
    altText: "Servicio 3",
    title: "Asesoramiento en Acuerdos Comerciales Internacionales",
    description:
      "Asistir a las empresas en la negociación y formalización de acuerdos comerciales.",
  },
  {
    imgSrc: "/imgs/servicios/4.jpg",
    altText: "Servicio 4",
    title: "Inteligencia Competitiva Internacional",
    description:
      "Ayudar a los clientes a comprender la competencia y el entorno competitivo global.",
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
          {servicios.map((servicio, index) => (
            <ServiceCard
              key={index}
              imgSrc={servicio.imgSrc}
              altText={servicio.altText}
              title={servicio.title}
              description={servicio.description}
            />
          ))}
        </div>
      </div>

      <br />
      {/* Valores empresariales */}
      <ValoresComponent valores={valores} />

      <br />
      {/* mision vision */}
      <div>
        <h2 className="mb-6 mt-4 text-center text-3xl font-semibold text-cyan-800">
          Misión - Visión
        </h2>
        <MissionVisionComponent />
      </div>

      <br />
      {/* CTA */}
      <div className="container mt-8 max-w-4xl text-center">
        <h1 className="text-center text-3xl font-semibold text-cyan-800">
          ¿Listo para expandir tu empresa?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Contáctanos para obtener más información sobre nuestros servicios y
          cómo podemos ayudarte a internacionalizar tu empresa.
        </p>
        {/* wa.link */}
        <Button
          className="mt-4"
          onClick={() => {
            window.open(
              "https://wa.me/593963266372?text=Hola!%20somos%20*VentureX*,%20somos%20una%20plataforma%20digital%20que%20facilita%20la%20expansión%20internacional%20de%20empresas,%20en%20que%20te%20podemos%20ayudar?😀",
              "_blank",
            );
          }}
        >
          Contáctanos
        </Button>
      </div>

      <br />

      {/* paises */}
      <CountryList />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
