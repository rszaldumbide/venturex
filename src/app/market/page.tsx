"use client";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Warning from "@/icons/warning";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { paisSchema, paisValues } from "@/schemas/paisSchema";
import { useRouter } from "next/navigation";

const DynamicMapChart = dynamic(() => import("@/components/MapChart"), {
  ssr: false,
});

interface Country {
  name: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedQuery, setSelectedQuery] = useState<string>("ventas");

  const handleMegaMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMegaMenuAnchorEl(event.currentTarget);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

  const form = useForm<paisValues>({
    resolver: zodResolver(paisSchema),
    defaultValues: {
      pais: "Chile",
      sector: "",
    },
  });

  function onSubmit(values: paisValues) {
    console.log(values);
    router.push(`/Pais/${values.pais}?sector=${values.sector}`);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar onMegaMenuOpen={handleMegaMenuOpen} />

      <Grid container spacing={2} className="p-8">
        <Grid item xs={12} md={8}>
          <div className="flex flex-col overflow-hidden rounded border border-gray-300">
            <div className="w-full flex-1">
              {" "}
              {/* Contenedor flexible para el mapa */}
              <DynamicMapChart
                onCountrySelect={handleCountrySelect}
                selectedCountry={selectedCountry}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          {selectedCountry ? (
            <>
              <h1 className="mb-4 pb-2 text-center text-3xl font-bold">
                Consultar {selectedCountry.name}
              </h1>
              <div>
                {selectedCountry.name !== "Chile" ? (
                  <Grid item xs={12}>
                    <Warning />
                    <p className="text-center">
                      {"Funcionalidades no disponibles para " +
                        selectedCountry.name}
                    </p>
                  </Grid>
                ) : (
                  <div>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex items-end justify-center gap-4"
                      >
                        <FormField
                          control={form.control}
                          name="sector"
                          render={({ field }) => (
                            <FormItem className="w-full min-w-[300px]">
                              <FormLabel>Sector</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Seleccione el Sector ↓" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="frutas">
                                    Frutas Frescas
                                  </SelectItem>
                                  <SelectItem value="industria">
                                    Industrias 4.0
                                  </SelectItem>
                                  <SelectItem value="productos">
                                    Prodcutos Agroalimentarios
                                  </SelectItem>
                                  <SelectItem value="metal">
                                    Sector Metalúrgico
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="gap-2">
                          <FaSearch />
                          Consultar
                        </Button>
                      </form>
                    </Form>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="gap-4 text-center">
              <Warning />
              <p>Selecciona primero un País</p>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
