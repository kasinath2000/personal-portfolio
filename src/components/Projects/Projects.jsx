

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import ProjectCard from "../UI/ProjectCard";
// import ProjectDetails from "./ProjectDetails";
// import SkeletonLoading from "../UI/SkeletonLoading";
// import ProjectsDrawer from "../UI/ProjectsDrawer"; 
// import defultImage from "../images/defult.png";
// import projectTags from "../data/projectTags";
// import Chips from "../UI/Chips";
// import Drawers from "../UI/Drawers";


// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const [projectList, setProjectList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state

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

//         {/* add some chip like frontend,backend,fullstack,react,ML ::- clickeble chip but this chip click to open drawer  */}

//         {/* Loading Indicator */}
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



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ProjectCard from "../UI/ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SkeletonLoading from "../UI/SkeletonLoading";
import defultImage from "../images/defult.png";
import projectTags from "../../data/projectTags";
import Chips from "../UI/Chips";
import ProjectsDrawer from "../UI/ProjectsDrawer";
import FrontendProjects from "../Projects/Frontend/FrontendProjects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null); // Track which chip opened drawer

  const url = import.meta.env.VITE_PROJECTS_API_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setProjectList(response.data.data || []);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject({
      ...project,
      technologies: project.technologies ? project.technologies.split(", ") : [],
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // const handleChipClick = (tag) => {
  //   setSelectedTag(tag);
  //   setIsDrawerOpen(true);
  // };

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
          Here are some of the projects I’ve worked on. They showcase my skills and experience in web development.
        </Typography>

        {/* Chips */}
        <Box textAlign="center" display="flex" justifyContent="center" flexWrap="wrap" mb={4}>
          {projectTags.map((tag, index) => (
            <Chips key={index} label={tag}  />
          ))}
        </Box>

        {/* Loading Indicator */}
        {loading ? (
          <SkeletonLoading count={6} />
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {projectList
              .slice(0, showAllProjects ? projectList.length : 6)
              .map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image || defultImage}
                    technologies={project.technologies ? project.technologies.split(", ") : []}
                    onSeeMoreClick={() => handleOpenModal(project)}
                  />
                </Grid>
              ))}
          </Grid>
        )}

        {/* Show More / Show Less Button */}
        {!loading && (
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
        )}

        {/* Modal for Project Details */}
        <ProjectDetails open={isModalOpen} handleClose={handleCloseModal} project={selectedProject} />

        {/* Drawer for category (dummy items for now) */}
        {/* <ProjectsDrawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title={selectedTag}
        >
          
        </ProjectsDrawer> */}


      </Container>
    </Box>
  );
};

export default Projects;