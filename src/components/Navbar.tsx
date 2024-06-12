"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
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
      className="bg-gradient-to-br from-blue-700 to-blue-300 px-2 text-white"
      position="static"
    >
      <Toolbar>
        {/* Sección del logo y buscador */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, padding: "10px" }}>
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image
              src="/Logo VentureX.svg"
              alt="VentureX"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="ml-2 text-lg font-semibold text-teal-50">
              VentureX
            </span>
          </a>
        </Link>
          {/* Esconder el buscador en pantallas pequeñas */}
          <Hidden smDown>
            
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
            <i className="fas fa-map pr-2"></i> Mapa
          </MenuItem>
          <MenuItem onClick={handleMegaMenuClose}>
            <i className="fas fa-chart-bar pr-2"></i> Estadística
          </MenuItem>
          <MenuItem onClick={handleMegaMenuClose}>
            <i className="fas fa-file-alt pr-3"></i>Informes
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
              {/* <SettingsIcon /> */}
              <ModeToggle />
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
            <MenuItem onClick={handleMenuClose}><i className="fas fa-user pr-2"></i>Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose}><i className="fas fa-right-from-bracket pr-2"></i>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
