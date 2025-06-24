import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";

import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import ProjectCard from "../UI/ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SkeletonLoading from "../UI/SkeletonLoading";
import defultImage from "../images/defult.png";
import projectTags from "../../data/projectTags";
import Chips from "../UI/Chips";
import useMediaQuery from "@mui/material/useMediaQuery";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("projects");

  const url = import.meta.env.VITE_PROJECTS_API_URL;
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const rawData = { projects: response.data.data };

        const merged = Object.entries(rawData).flatMap(([category, projects]) =>
          projects.map((project) => ({
            ...project,
            category,
          }))
        );

        setProjectList(merged);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject({
      ...project,
      technologies: project.technologies
        ? project.technologies.split(", ")
        : [],
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const filteredProjects =
    selectedTag === "projects"
      ? projectList
      : projectList.filter(
          (p) => p.category.toLowerCase() === selectedTag.toLowerCase()
        );

  return (
    <Box id="projects" sx={{ backgroundColor: "#00242C", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            color: "#00D1FF",
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "gray", textAlign: "center", mb: 4 }}
        >
          Here are some of the projects I’ve worked on. They showcase my skills
          and experience in web development.
        </Typography>

        {/* Chips */}
        <Box
          textAlign="center"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          mb={4}
        >
          {selectedTag !== "projects" && (
            <Chips
              label="Reset"
              onClick={() => setSelectedTag("projects")}
              selected={false}
              reset
            />
          )}

          {projectTags.map((tag, index) => (
            <Chips
              key={index}
              label={tag}
              onClick={(label) =>
                setSelectedTag(label === selectedTag ? "projects" : label)
              }
              selected={selectedTag === tag}
            />
          ))}
        </Box>

        {/* Projects List */}
        <Box
          sx={{
            height: 950,
            overflowY: showAllProjects ? "auto" : "hidden",
            overflowX: "hidden",
            border: "1px solid rgba(0, 209, 255, 0.3)",
            borderRadius: "16px",
            p: 3,
            pt: 4,
            transition: "all 0.4s ease",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {loading ? (
            <>
              <SkeletonLoading count={6} />
              <Typography color="gray" textAlign="center" mt={4}>
                Please wait, loading projects...
              </Typography>
            </>
          ) : filteredProjects.length > 0 ? (
            <Grid
              container
              spacing={4}
              justifyContent="center"
              sx={{ pt: 2, px: 1 }}
            >
              {filteredProjects
                .slice(0, showAllProjects ? filteredProjects.length : 6)
                .map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image || defultImage}
                      technologies={
                        project.technologies
                          ? project.technologies.split(", ")
                          : []
                      }
                      onSeeMoreClick={() => handleOpenModal(project)}
                    />
                  </Grid>
                ))}
            </Grid>
          ) : (
            //         <Box textAlign="center" mt={4} >
            //           <Typography
            //             color="white"
            //             display="flex"
            //             justifyContent="center"
            //             alignItems="center"
            //             gap={1}
            //             variant="h6"
            //           >
            //             <ReportProblemRoundedIcon
            //               sx={{ color: "#FF5252", fontSize: "1.8rem" }}
            //             />
            //             <strong>Oops!</strong> No projects found for:{" "}
            //             <strong>{selectedTag}</strong>
            //           </Typography>

            //           <Box mt={2} display="flex" justifyContent="center">
            //             <Chip
            //               label="Please Click to Reset"
            //               icon={<RestartAltIcon sx={{ color: "white" }} />}
            //               onClick={() => setSelectedTag("projects")}
            //               sx={{
            //                 backgroundColor: "#FF5252",
            //                 color: "white",
            //                 px: 2,
            //                 fontWeight: 500,
            //                 "&:hover": {
            //                   backgroundColor: "#FF6B6B",
            //                 },
            //               }}
            //             />
            //             {/* ✅ Refresh Chip (only when tag is 'projects') */}
            // {/* {selectedTag === "projects" && (
            //   <Chip
            //     label="Refresh Page"
            //     icon={<RestartAltIcon sx={{ color: "white" }} />}
            //     onClick={() => window.location.reload()}
            //     sx={{
            //       backgroundColor: "#FFA726",
            //       color: "white",
            //       px: 2,
            //       fontWeight: 500,
            //       "&:hover": {
            //         backgroundColor: "#FFB74D",
            //       },
            //     }}
            //   />
            // )} */}
            //           </Box>
            //         </Box>

            <Box textAlign="center" mt={4}>
              <Typography
                color="white"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
                variant="h6"
              >
                <ReportProblemRoundedIcon
                  sx={{ color: "#FF5252", fontSize: "1.8rem" }}
                />
                <strong>Oops!</strong> No projects found for:{" "}
                <strong>{selectedTag}</strong>
              </Typography>

              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                {/* ✅ Only show reset if NOT in 'projects' */}
                {selectedTag !== "projects" && (
                  <Chip
                    label="Please Click to Reset"
                    icon={<RestartAltIcon sx={{ color: "white" }} />}
                    onClick={() => setSelectedTag("projects")}
                    sx={{
                      backgroundColor: "#FF5252",
                      color: "white",
                      px: 2,
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#FF6B6B",
                      },
                    }}
                  />
                )}

                {/* ✅ Show refresh chip when tag is 'projects' */}
                {selectedTag === "projects" && (
                  <Chip
                    label="Refresh Page"
                    icon={<RestartAltIcon sx={{ color: "white" }} />}
                    onClick={() => window.location.reload()}
                    sx={{
                      backgroundColor: "#FFA726",
                      color: "white",
                      px: 2,
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: "#FFB74D",
                      },
                    }}
                  />
                )}
              </Box>
            </Box>
          )}
        </Box>

        {/* Show More / Show Less */}
        {/* {!loading && filteredProjects.length > 6 && (
          <Box textAlign="center" mt={4}>
            <Button
              sx={{
                border: "2px solid #00D1FF",
                color: "#00D1FF",
                px: 3,
                py: 1,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#00D1FF",
                  color: "black",
                },
              }}
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects
                ? "Show Less Projects.."
                : "Show More Projects.."}
            </Button>
          </Box>
        )} */}

        {/* Show More / Show Less */}
        {!loading && filteredProjects.length > 6 && (
          <Box
            textAlign="center"
            mt={4}
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* ✅ Instructional text */}
            <Typography
              variant="body2"
              color="gray"
              mb={1}
              sx={{ fontStyle: "italic" }}
            >
              To see more projects, {isMobile ? "tap" : "click"} the button
              below and scroll down.
            </Typography>

            <Button
              sx={{
                border: "2px solid #00D1FF",
                color: "#00D1FF",
                px: 3,
                py: 1,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#00D1FF",
                  color: "black",
                },
              }}
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects
                ? "Show Less Projects..."
                : "Show More Projects..."}
            </Button>
          </Box>
        )}

        {/* Modal */}
        <ProjectDetails
          open={isModalOpen}
          handleClose={handleCloseModal}
          project={selectedProject}
        />
      </Container>
    </Box>
  );
};

export default Projects;
