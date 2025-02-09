import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ProjectCard from "../UI/ProjectCard";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectList = [
    { title: "Project 1", description: "lorem ipsum dolor sit amet...", technologies: ["React", "Material UI", "Node.js"], image: "/img/project.png", demoLink: "https://example.com/project1", githubLink: "https://github.com/user/project1" },
    { title: "Project 2", description: "lorem ipsum dolor sit amet...", technologies: ["JavaScript", "Bootstrap", "API Integration"], image: "/img/project.png", demoLink: "https://example.com/project2", githubLink: "https://github.com/user/project2" },
    { title: "Project 3", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project3", githubLink: "https://github.com/user/project3" },
    { title: "Project 4", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project4", githubLink: "https://github.com/user/project4" },
    { title: "Project 5", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project5", githubLink: "https://github.com/user/project5" },
    { title: "Project 6", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project6", githubLink: "https://github.com/user/project6" },
    { title: "Project 7", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project7", githubLink: "https://github.com/user/project7" },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <Box id="projects" sx={{ backgroundColor: "#00242C", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 4 }}>
          My Projects
        </Typography>
        <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 8 }}>
          Here are some of the projects I’ve worked on. They showcase my skills and experience in web development.
        </Typography>

        {/* Project Cards Layout */}
        <Grid container spacing={4} justifyContent="center">
          {projectList.slice(0, showAllProjects ? projectList.length : 6).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                onSeeMoreClick={() => handleOpenModal(project)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Show More Button */}
        <Box textAlign="center" mt={4}>
          <Button
            sx={{
              border: "2px solid #00D1FF",
              color: "#00D1FF",
              px: 3,
              py: 1,
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#00D1FF", color: "black" },
            }}
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? "Show Less Projects.." : "Show More Projects.."}
          </Button>
        </Box>

        <ProjectDetails open={isModalOpen} handleClose={handleCloseModal} project={selectedProject} />
      </Container>
    </Box>
  );
};

export default Projects;
