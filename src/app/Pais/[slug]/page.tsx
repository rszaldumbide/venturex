"use client";

import React, { useState } from "react";

import { Box } from "@mui/material";
import { useSearchParams, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Frutas from "@/components/sectores/Frutas";
import Metalurgico from "@/components/sectores/Metalurgico";
import Industria from "@/components/sectores/Industria";
import Productos from "@/components/sectores/Productos";

function Pais() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Obtener el valor de slug desde la ruta
  const slug = pathname.split("/").pop(); // Esto toma el último segmento de la URL que corresponde a `slug`

  // Obtener el valor de sector desde los parámetros de búsqueda
  const sector = searchParams.get("sector");

  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const handleMegaMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMegaMenuAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar onMegaMenuOpen={handleMegaMenuOpen} />
        <div className="my-8 text-center text-2xl font-bold text-cyan-800">
          Análisis de {slug}
        </div>
        <Tabs defaultValue={sector || "frutas"} className="m-4">
          <TabsList className="grid h-auto w-auto grid-cols-1 grid-rows-4 lg:flex lg:max-w-[610px] lg:grid-cols-none lg:grid-rows-none lg:justify-center">
            <TabsTrigger value="frutas">Frutas Frescas</TabsTrigger>
            <TabsTrigger value="industria">Industrias 4.0</TabsTrigger>
            <TabsTrigger value="productos">
              Productos Agroalimentarios
            </TabsTrigger>
            <TabsTrigger value="metal">Sector Metalúrgico</TabsTrigger>
          </TabsList>
          {slug ? (
            <>
              <TabsContent value="frutas">
                <Frutas pais={slug} />
              </TabsContent>
              <TabsContent value="industria">
                <Industria pais={slug} />
              </TabsContent>
              <TabsContent value="productos">
                <Productos pais={slug} />
              </TabsContent>
              <TabsContent value="metal">
                <Metalurgico pais={slug} />
              </TabsContent>
            </>
          ) : (
            <></>
          )}
        </Tabs>
      </Box>
    </>
  );
}

export default Pais;
