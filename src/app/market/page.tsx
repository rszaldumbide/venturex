"use client";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const DynamicMapChart = dynamic(() => import("@/components/MapChart"), {
  ssr: false,
});

interface Country {
  name: string;
}

const Dashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedQuery, setSelectedQuery] = useState<string>("ventas");

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMegaMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMegaMenuAnchorEl(event.currentTarget);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

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
          <h1 className="mb-4 pb-2 text-center text-3xl font-bold">Consulta</h1>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Grid item xs={12}>
              {selectedCountry && (
                <Typography variant="h6" component="div" className="mb-2">
                  País: {selectedCountry.name}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="query-select">Consultar</InputLabel>
                <Select
                  native
                  value={selectedQuery}
                  onChange={(e) => setSelectedQuery(e.target.value as string)}
                  label="Consultar"
                  inputProps={{ name: "query", id: "query-select" }}
                >
                  <option value="ventas">Ventas</option>
                  <option value="inversiones">Inversiones</option>
                  <option value="productos">Productos</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                onClick={() => {
                  console.log(
                    `Consultando ${selectedQuery} para ${
                      selectedCountry
                        ? selectedCountry.name
                        : "todos los países"
                    }`,
                  );
                }}
              >
                CONSULTAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
