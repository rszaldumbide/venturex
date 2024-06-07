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
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-1">
      <div>
        <Navbar />
      </div>

      <Carousel className="ml-2 mr-2">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className={index === currentIndex ? "block" : "hidden"}
            >
              <div className="flex justify-center rounded-sm p-2 align-middle">
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  width={1400}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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
              <a >Register</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
