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
  Hidden,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface NavbarProps {
  onMegaMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMegaMenuOpen }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState<null | HTMLElement>(null);

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
    <AppBar
      className="bg-gradient-to-br from-blue-500 to-green-600 px-2 text-white"
      position="static"
    >
      <Toolbar>
        {/* Sección del logo y buscador */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, padding: "10px" }}>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            VentureX
          </Typography>
          {/* Esconder el buscador en pantallas pequeñas */}
          <Hidden smDown>
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
          </Hidden>
        </Box>

        {/* Mega menú */}
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
          <MenuItem onClick={handleMegaMenuClose}>
            <i className="fas fa-map pr-1"></i> Mapa
          </MenuItem>
          <MenuItem onClick={handleMegaMenuClose}>
            <i className="fas fa-chart-bar pr-1"></i> Estadística
          </MenuItem>
          <MenuItem onClick={handleMegaMenuClose}>
            <i className="fas fa-file-alt pr-1"></i>Informes
          </MenuItem>
        </Menu>

        {/* Sección de iconos (ajustada para ser responsive) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Hidden smDown>
            {/* Esconder notificaciones y configuración en pantallas pequeñas */}
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Hidden>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <Avatar alt="Usuario" src="/path/to/your/avatar.jpg" />
          </IconButton>

          {/* Menú del usuario */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
