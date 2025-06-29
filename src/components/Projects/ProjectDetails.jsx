
import React from "react";
import { Box, Typography, Modal, IconButton, Button, Chip, useMediaQuery } from "@mui/material";
import { X } from "lucide-react";

const ProjectDetails = ({ open, handleClose, project }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  if (!project) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor: "#00242C",
          color: "#FFFFFF",
          p: 4,
          maxWidth: isSmallScreen ? "90%" : 600,
          mx: "auto",
          mt: isSmallScreen ? "20vh" : 8,
          borderRadius: "12px",
          position: "relative",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {/* Close Icon */}
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8, color: "#FFFFFF" }}
          onClick={handleClose}
        >
          <X />
        </IconButton>

        {/* Project Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {project.title}
        </Typography>

        {/* Project Image */}
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            mb: 3,
            border: "2px solid #00D1FF",
          }}
        />

        {/* Project Description */}
        <Typography variant="body1" sx={{ mb: 2 }}>
          {project.description}
        </Typography>

        {/* Project Technologies */}
        {project.technologies && (
          <Box display="flex" gap={1} flexWrap="wrap" sx={{ mb: 2 }}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} color="primary" variant="outlined" />
            ))}
          </Box>
        )}

        {/* Action Buttons */}
        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          gap={2}
          mt={3}
        >
          {project.liveDemo && (
            <Button
              variant="contained"
              color="success"
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth={isSmallScreen}
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              variant="contained"
              color="primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth={isSmallScreen}
            >
              GitHub Link
            </Button>
          )}
          <Button
            variant="outlined"
            color="error"
            onClick={handleClose}
            fullWidth={isSmallScreen}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectDetails;
