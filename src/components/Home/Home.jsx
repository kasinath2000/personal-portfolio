import React from "react";
import { Box, Typography, Button } from "@mui/material";
import img from "../images/landing.png";

const Home = () => {
  // Dynamic content
  const greeting = "Hi, I am";
  const name = "Kasinath";
  const description =
    "Hi, I'm Kasinath Mandal, a passionate freelance web developer. I specialize in creating websites that help businesses grow and achieve their goals.";

  // Resume download handler
  const handleResumeDownload = () => {
    const resumeUrl = "/resume.pdf"; // Replace with actual resume file path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Kasinath_Mandal_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#00242C",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          maxWidth: "1200px",
          width: "100%",
          gap: 4,
        }}
      >
        {/* Left Side */}
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "white" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {greeting}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#00D1FF", mb: 3 }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mb: 4 }}>
            {description}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#00D1FF", color: "#000", "&:hover": { backgroundColor: "#00b3e6" } }}
              href="https://github.com/kasinath2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00D1FF",
                color: "#00D1FF",
                "&:hover": { backgroundColor: "#00D1FF", color: "#000" },
              }}
              onClick={handleResumeDownload}
            >
              My Resume
            </Button>
          </Box>
        </Box>

        {/* Right Side - Static Image (No Animation) */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={img} alt="Kasinath Mandal" style={{ width: "400px", height: "400px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
