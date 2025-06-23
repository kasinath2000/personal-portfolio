

import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import navItemsData from "../data/navItems.json";
import NavLogo from "../assets/NavLogo.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionRefs = useRef({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    navItemsData.forEach((item) => {
      const id = item.link.substring(1);
      sectionRefs.current[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 209, 255, 0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0, 209, 255, 0.2)",
        padding: { xs: "10px 2rem", md: "10px 5rem" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.3s",
      }}
    >
      {/* Logo */}
      <Box component="a" href="#home">
        <img src={NavLogo} alt="Logo" style={{ height: "40px" }} />
      </Box>

      {/* Desktop Nav */}
      {!isMobile && (
        <Box sx={{ display: "flex", gap: 4 }}>
          {navItemsData.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.link.substring(1)}
              smooth
              duration={500}
              spy
              offset={-80}
              style={{
                color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </Box>
      )}

      {/* Mobile Menu Icon */}
      {isMobile && (
        <IconButton onClick={toggleDrawer} sx={{ color: "#F8F5E9" }}>
          {mobileOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconButton>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 150,
            height: "45vh",
            top: "70px",
            backgroundColor: "#0d1b2a",
            color: "#F8F5E9",
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
            boxShadow: "0px 2px 5px rgba(0, 209, 255, 0.2)",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          {navItemsData.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.link.substring(1)}
              smooth
              duration={500}
              spy
              offset={-80}
              onClick={toggleDrawer}
              style={{
                color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
                textDecoration: "none",
                fontSize: "15px",
                margin: "15px 0",
                cursor: "pointer",
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
