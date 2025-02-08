

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import model from "../images/model.png";

const About = () => {
  // Dynamic content
  const title = "About Me";
  const intro =
    "Hi, I'm a dedicated web developer passionate about creating interactive, user-friendly, and visually appealing web applications. My goal is to build products that deliver a great experience.";
  const skills =
    "I specialize in modern web technologies such as React, MUI, and JavaScript, ensuring efficient and scalable development.";

  return (
    <Box id="about" sx={{ backgroundColor: "#00242C", py: 8 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* Left Side - Model Box with Gradient */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#00242C", // Optional, in case you want to keep the background in sync with the section color
            padding: "10px",
            borderRadius: '31% 21% 0% 0% / 25% 25% 21% 25%'
          }}
        >
          {/* Model Image with Background and Custom Border Radius */}
          <img
            src={model}
            alt="About Me"
            style={{
              width: "280px",
              height: "auto",
              borderRadius: '31% 21% 0% 0% / 25% 25% 21% 25%',
              background: "linear-gradient(to top, #00D1FF, transparent)", // Gradient background
              position: "relative",
            }}
          />
        </Box>

        {/* Right Side - Text Content */}
        <Box sx={{ color: "white", textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#00D1FF", mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>
            {intro}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            {skills}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
