import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
// import logo from "../../assets/logo.png";
import NavLogo from "../../assets/NavLogo.svg";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#00D1FF",
        py: 3,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Left Side: Social Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton href="https://github.com/kasinath2000" target="_blank" sx={{ color: "black", "&:hover": { color: "#DE3163" } }}>
            <GitHub />
          </IconButton>
          <IconButton href="www.linkedin.com/in/kasinath-mandal-a5a6621ba" target="_blank" sx={{ color: "black", "&:hover": { color: "#DE3163" } }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="https://www.facebook.com/kasinath.mandal.58/" target="_blank" sx={{ color: "black", "&:hover": { color: "#DE3163" } }}>
            <Facebook />
          </IconButton>
        </Box>

        {/* Center: Copyright Text */}
        <Typography variant="body2" sx={{ color: "black", my: { xs: 2, md: 0 } }}>
          © {new Date().getFullYear()} Kasinath Mandal. All rights reserved.
        </Typography>

        {/* Right Side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={NavLogo} alt="Logo" style={{ height: "40px" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
