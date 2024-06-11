"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Button,
  Paper,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import MapChart from "@/components/MapChart";

interface Country {
  name: string;
  code: string;
}

const Dashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMegaMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMegaMenuAnchorEl(event.currentTarget);
  };

  const handleMegaMenuClose = () => {
    setMegaMenuAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="bg-gradient-to-br from-blue-500 to-green-600 px-2 text-white"
        position="static"
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              VentureX
            </Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
                borderRadius: 25,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
            >
              <SearchIcon sx={{ p: "0px" }} />
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          </Box>

          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleMegaMenuOpen}
            sx={{ textTransform: "none" }}
          >
            Mega menú
          </Button>
          <Menu
            anchorEl={megaMenuAnchorEl}
            open={Boolean(megaMenuAnchorEl)}
            onClose={handleMegaMenuClose}
          >
            <MenuItem onClick={handleMegaMenuClose}><i className="fas fa-map pr-1"></i> Mapa</MenuItem>
            <MenuItem onClick={handleMegaMenuClose}><i className="fas fa-chart-bar pr-1"></i> Estadística</MenuItem>
            <MenuItem onClick={handleMegaMenuClose}><i className="fas fa-file-alt pr-1"></i>Informes</MenuItem>
          </Menu>

          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Avatar alt="Usuario" src="/path/to/your/avatar.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
              <MenuItem onClick={handleMenuClose}>Cerrar Sesión</MenuItem>
            </Menu>

            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <div>
        <h1>Mapa Mundial Interactivo</h1>
        <MapChart onCountrySelect={setSelectedCountry} />
        {selectedCountry && (
          <div>
            <h2>Selected Country:</h2>
            <p>{selectedCountry.name}</p>
            <p>{selectedCountry.code}</p>
          </div>
        )}
      </div>
    </Box>
  );
};

export default Dashboard;
