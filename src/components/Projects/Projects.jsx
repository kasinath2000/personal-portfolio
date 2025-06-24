// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import ProjectCard from "../UI/ProjectCard";
// import ProjectDetails from "./ProjectDetails";
// import SkeletonLoading from "../UI/SkeletonLoading";
// import ProjectsDrawer from "../UI/ProjectsDrawer";
// import defultImage from "../images/defult.png";
// import projectTags from "../../data/projectTags";
// import Chips from "../UI/Chips";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const [projectList, setProjectList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const url = import.meta.env.VITE_PROJECTS_API_URL;

//   useEffect(() => {
//     const fetchProjects = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(url);
//         setProjectList(response.data.data || []);
//       } catch (error) {
//         console.error("Error fetching project data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleOpenModal = (project) => {
//     setSelectedProject({
//       ...project,
//       technologies: project.technologies ? project.technologies.split(", ") : [],
//     });
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <Box id="projects" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           sx={{
//             color: "#00D1FF",
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 4,
//           }}
//         >
//           My Projects
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ color: "gray", textAlign: "center", mb: 8 }}
//         >
//           Here are some of the projects I’ve worked on. They showcase my skills
//           and experience in web development.
//         </Typography>

//          {/* Chips */}
//         <Box textAlign="center" display="flex" justifyContent="center" flexWrap="wrap" mb={4}>
//           {projectTags.map((tag, index) => (
//             <Chips key={index} label={tag}  />
//           ))}
//         </Box>

//      {/* Loading Indicator */}
//         {loading ? (
//           <SkeletonLoading count={6} />
//         ) : (
//           <Grid container spacing={4} justifyContent="center">
//             {projectList
//               .slice(0, showAllProjects ? projectList.length : 6)
//               .map((project, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <ProjectCard
//                     title={project.title}
//                     description={project.description}
//                     image={project.image || defultImage}
//                     technologies={project.technologies ? project.technologies.split(", ") : []}
//                     onSeeMoreClick={() => handleOpenModal(project)}
//                   />
//                 </Grid>
//               ))}
//           </Grid>
//         )}

//         {/* Show More / Show Less Button */}
//         {!loading && (
//           <Box textAlign="center" mt={4}>
//             <Button
//               sx={{
//                 border: "2px solid #00D1FF",
//                 color: "#00D1FF",
//                 px: 3,
//                 py: 1,
//                 borderRadius: "8px",
//                 "&:hover": { backgroundColor: "#00D1FF", color: "black" },
//               }}
//               onClick={() => setShowAllProjects(!showAllProjects)}
//             >
//               {showAllProjects ? "Show Less Projects.." : "Show More Projects.."}
//             </Button>
//           </Box>
//         )}

//         {/* Modal for Project Details */}
//         <ProjectDetails open={isModalOpen} handleClose={handleCloseModal} project={selectedProject} />

//         {/* Drawer for More Projects */}
//         <ProjectsDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} projects={projectList} />
//       </Container>
//     </Box>
//   );
// };

// export default Projects;

//working final

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import ProjectCard from "../UI/ProjectCard";
// import ProjectDetails from "./ProjectDetails";
// import SkeletonLoading from "../UI/SkeletonLoading";
// import defultImage from "../images/defult.png";
// import projectTags from "../../data/projectTags";
// import Chips from "../UI/Chips";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const [projectList, setProjectList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [selectedTag, setSelectedTag] = useState(null); // Track which chip opened drawer

//   const url = import.meta.env.VITE_PROJECTS_API_URL;

//   useEffect(() => {
//     const fetchProjects = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(url);
//         setProjectList(response.data.data || []);
//       } catch (error) {
//         console.error("Error fetching project data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleOpenModal = (project) => {
//     setSelectedProject({
//       ...project,
//       technologies: project.technologies
//         ? project.technologies.split(", ")
//         : [],
//     });
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <Box id="projects" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           sx={{
//             color: "#00D1FF",
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 4,
//           }}
//         >
//           My Projects
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{ color: "gray", textAlign: "center", mb: 4 }}
//         >
//           Here are some of the projects I’ve worked on. They showcase my skills
//           and experience in web development.
//         </Typography>

//         {/* Chips */}
//         <Box
//           textAlign="center"
//           display="flex"
//           justifyContent="center"
//           flexWrap="wrap"
//           mb={4}
//         >
//           {projectTags.map((tag, index) => (
//             <Chips key={index} label={tag} />
//           ))}
//         </Box>

//         <Box
//           // sx={{
//           //   height: 900,
//           //   overflowY: showAllProjects ? "auto" : "hidden",
//           //   overflowX: "hidden",
//           //   border: "1px solid rgba(0, 209, 255, 0.3)", // light cyan border
//           //   borderRadius: "16px", // more rounded corners
//           //   p: 3,
//           //   pr: 4,
//           //   transition: "max-height 0.5s ease",
//           //   scrollbarWidth: "thin",
//           //   "&::-webkit-scrollbar": {
//           //     width: "4px", // thinner
//           //   },
//           //   "&::-webkit-scrollbar-thumb": {
//           //     backgroundColor: "rgba(0, 209, 255, 0.5)", // lighter thumb
//           //     borderRadius: "8px",
//           //   },
//           //   "&::-webkit-scrollbar-track": {
//           //     backgroundColor: "transparent", // no track color
//           //   },
//           // }}
//           sx={{
//             height: 950,
//             overflowY: showAllProjects ? "auto" : "hidden",
//             overflowX: "hidden",
//             border: "1px solid rgba(0, 209, 255, 0.3)",
//             borderRadius: "16px",
//             p: 3,
//             pt: 4,
//             transition: "all 0.4s ease",
//             scrollbarWidth: "none", // Firefox
//             "&::-webkit-scrollbar": {
//               display: "none", // Chrome, Safari
//             },
//           }}
//         >
//           {loading ? (
//             <SkeletonLoading count={6} />
//           ) : (
//             <Grid
//               container
//               spacing={4}
//               justifyContent="center"
//               sx={{ pt: 2, px: 1 }}
//             >
//               {projectList
//                 .slice(0, showAllProjects ? projectList.length : 6)
//                 .map((project, index) => (
//                   <Grid item xs={12} sm={6} md={4} key={index}>
//                     <ProjectCard
//                       title={project.title}
//                       description={project.description}
//                       image={project.image || defultImage}
//                       technologies={
//                         project.technologies
//                           ? project.technologies.split(", ")
//                           : []
//                       }
//                       onSeeMoreClick={() => handleOpenModal(project)}
//                     />
//                   </Grid>
//                 ))}
//             </Grid>
//           )}
//         </Box>

//         {/* Show More / Show Less Button */}
//         {!loading && (
//           <Box textAlign="center" mt={4}>
//             <Button
//               sx={{
//                 border: "2px solid #00D1FF",
//                 color: "#00D1FF",
//                 px: 3,
//                 py: 1,
//                 borderRadius: "8px",
//                 "&:hover": { backgroundColor: "#00D1FF", color: "black" },
//               }}
//               onClick={() => setShowAllProjects(!showAllProjects)}
//             >
//               {showAllProjects
//                 ? "Show Less Projects.."
//                 : "Show More Projects.."}
//             </Button>
//           </Box>
//         )}

//         {/* Modal for Project Details */}
//         <ProjectDetails
//           open={isModalOpen}
//           handleClose={handleCloseModal}
//           project={selectedProject}
//         />
//       </Container>
//     </Box>
//   );
// };

// export default Projects;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ProjectCard from "../UI/ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SkeletonLoading from "../UI/SkeletonLoading";
import defultImage from "../images/defult.png";
import projectTags from "../../data/projectTags";
import Chips from "../UI/Chips";
import { Chip } from "@mui/material";

import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";

import RestartAltIcon from "@mui/icons-material/RestartAlt";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("projects");

  const url = import.meta.env.VITE_PROJECTS_API_URL;

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
              reset // <-- pass this to show icon
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

        {/* Project Cards */}
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
            <SkeletonLoading count={6} />
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
            // <Typography color="white" textAlign="center" mt={4}>
            //   oopps! No projects found for : <strong>{selectedTag}</strong>
            //   <Box mt={2} display="flex" justifyContent="center">
            //     <Chip
            //       label="please Click to Reset"
            //       icon={<RestartAltIcon sx={{ color: "white" }} />}
            //       onClick={() => setSelectedTag("projects")}
            //       sx={{
            //         backgroundColor: "#FF5252",
            //         color: "white",
            //         px: 2,
            //         "&:hover": {
            //           backgroundColor: "#FF6B6B",
            //         },
            //       }}
            //     />
            //   </Box>
            // </Typography>
            <Typography color="white" textAlign="center" mt={4}>
  <ReportProblemRoundedIcon
    sx={{ color: "#FF5252", fontSize: "2rem", verticalAlign: "middle", mr: 1 }}
  />
  <strong>Oopps!</strong> No projects found for: <strong>{selectedTag}</strong>
  <Box mt={2} display="flex" justifyContent="center">
    <Chip
      label="Please Click to Reset"
      icon={<RestartAltIcon sx={{ color: "white" }} />}
      onClick={() => setSelectedTag("projects")}
      sx={{
        backgroundColor: "#FF5252",
        color: "white",
        px: 2,
        "&:hover": {
          backgroundColor: "#FF6B6B",
        },
      }}
    />
  </Box>
</Typography>
          )}
        </Box>

        {/* Show More / Show Less */}
        {!loading && filteredProjects.length > 6 && (
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
