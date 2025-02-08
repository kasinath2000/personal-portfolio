import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import logo from "../../assets/logo.png";

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
          <IconButton href="https://github.com" target="_blank" sx={{ color: "black", "&:hover": { color: "white" } }}>
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "black", "&:hover": { color: "white" } }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: "black", "&:hover": { color: "white" } }}>
            <Twitter />
          </IconButton>
        </Box>

        {/* Center: Copyright Text */}
        <Typography variant="body2" sx={{ color: "black", my: { xs: 2, md: 0 } }}>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>

        {/* Right Side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
