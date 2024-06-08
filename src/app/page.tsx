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

const images = [
  "/imgs/carrousel/1.jpg",
  "/imgs/carrousel/2.jpg",
  "/imgs/carrousel/3.jpg",
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

      {/* cards */}
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800">
          Bienvenido a VentureX
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          VentureX es una plataforma de gestión de proyectos que te ayuda a
          organizar tus tareas y proyectos de manera eficiente.
        </p>
        <div className="mt-4">
          <Link href="/register" legacyBehavior>
            <Button>
              <a>Register</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
