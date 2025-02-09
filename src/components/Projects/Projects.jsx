// import React, { useState } from "react";
// import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import ProjectCard from "../UI/ProjectCard";
// import ProjectDetails from "./ProjectDetails";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showAllProjects, setShowAllProjects] = useState(false);

//    let url="https://script.google.com/macros/s/AKfycbwdqGbEZKa5wSgxdK7fq--6JBkuv9gLK7EnseWMYSNkrc14nxHoYB7ZSYjy1h5KY8lE9g/exec";

//   const projectList = [
//     { title: "Project 1", description: "lorem ipsum dolor sit amet...", technologies: ["React", "Material UI", "Node.js"], image: "/img/project.png", demoLink: "https://example.com/project1", githubLink: "https://github.com/user/project1" },
//     { title: "Project 2", description: "lorem ipsum dolor sit amet...", technologies: ["JavaScript", "Bootstrap", "API Integration"], image: "/img/project.png", demoLink: "https://example.com/project2", githubLink: "https://github.com/user/project2" },
//     { title: "Project 3", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project3", githubLink: "https://github.com/user/project3" },
//     { title: "Project 4", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project4", githubLink: "https://github.com/user/project4" },
//     { title: "Project 5", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project5", githubLink: "https://github.com/user/project5" },
//     { title: "Project 6", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project6", githubLink: "https://github.com/user/project6" },
//     { title: "Project 7", description: "lorem ipsum dolor sit amet...", technologies: ["MongoDB", "Express.js", "Redux"], image: "/img/project.png", demoLink: "https://example.com/project7", githubLink: "https://github.com/user/project7" },
//   ];

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <Box id="projects" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography variant="h3" sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 4 }}>
//           My Projects
//         </Typography>
//         <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 8 }}>
//           Here are some of the projects I’ve worked on. They showcase my skills and experience in web development.
//         </Typography>

//         {/* Project Cards Layout */}
//         <Grid container spacing={4} justifyContent="center">
//           {projectList.slice(0, showAllProjects ? projectList.length : 6).map((project, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <ProjectCard
//                 title={project.title}
//                 description={project.description}
//                 image={project.image}
//                 technologies={project.technologies}
//                 onSeeMoreClick={() => handleOpenModal(project)}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         {/* Show More Button */}
//         <Box textAlign="center" mt={4}>
//           <Button
//             sx={{
//               border: "2px solid #00D1FF",
//               color: "#00D1FF",
//               px: 3,
//               py: 1,
//               borderRadius: "8px",
//               "&:hover": { backgroundColor: "#00D1FF", color: "black" },
//             }}
//             onClick={() => setShowAllProjects(!showAllProjects)}
//           >
//             {showAllProjects ? "Show Less Projects.." : "Show More Projects.."}
//           </Button>
//         </Box>

//         <ProjectDetails open={isModalOpen} handleClose={handleCloseModal} project={selectedProject} />
//       </Container>
//     </Box>
//   );
// };

// export default Projects;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import ProjectCard from "../UI/ProjectCard";
// import ProjectDetails from "./ProjectDetails";
// import SkeletonLoading from "../UI/SkeletonLoading";  // Import the SkeletonLoading component

// const Projects = () => {
//   // State to store project data, selected project for modal, loading states, etc.
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const [projectList, setProjectList] = useState([]); // Stores fetched project data
//   const [loading, setLoading] = useState(true); // Tracks loading state

//   const url = "https://script.google.com/macros/s/AKfycbwdqGbEZKa5wSgxdK7fq--6JBkuv9gLK7EnseWMYSNkrc14nxHoYB7ZSYjy1h5KY8lE9g/exec";

//   // Function to fetch project data using axios
//   const fetchProjects = async () => {
//     setLoading(true); // Set loading state to true when starting request

//     try {
//       const response = await axios.get(url);
//       const projects = response.data.data || [];
//       setProjectList(projects); // Set the project list in state
//     } catch (error) {
//       console.error("Error fetching project data:", error);
//     } finally {
//       setLoading(false); // Set loading state to false after the data is fetched
//     }
//   };

//   // UseEffect hook to fetch project data when the component mounts
//   useEffect(() => {
//     fetchProjects(); // Fetch projects only once on component mount
//   }, []); // Empty dependency array ensures it runs only once

//   // Function to handle opening the project modal with details
//   const handleOpenModal = (project) => {
//     // Ensure technologies is always an array (split by commas if it's a string)
//     const projectWithArrayTechnologies = {
//       ...project,
//       technologies: project.technologies ? project.technologies.split(", ") : [],
//     };
//     setSelectedProject(projectWithArrayTechnologies); // Set selected project in state
//     setIsModalOpen(true); // Open the modal
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <Box id="projects" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography variant="h3" sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 4 }}>
//           My Projects
//         </Typography>
//         <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 8 }}>
//           Here are some of the projects I’ve worked on. They showcase my skills and experience in web development.
//         </Typography>

//         {/* Loading Indicator - using SkeletonLoading component */}
//         {loading ? (
//           <SkeletonLoading count={6} /> // You can specify the number of skeletons here
//         ) : (
//           // Project Cards Layout when not loading
//           <Grid container spacing={4} justifyContent="center">
//             {projectList.slice(0, showAllProjects ? projectList.length : 6).map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <ProjectCard
//                   title={project.title}
//                   description={project.description}
//                   image={project.image} // Default image if not provided
//                   technologies={project.technologies ? project.technologies.split(", ") : []} // Convert technologies string into an array
//                   onSeeMoreClick={() => handleOpenModal(project)} // Open modal on "See More" click
//                 />
//               </Grid>
//             ))}
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

//         {/* Modal for displaying project details */}
//         <ProjectDetails open={isModalOpen} handleClose={handleCloseModal} project={selectedProject} />
//       </Container>
//     </Box>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import ProjectCard from "../UI/ProjectCard";
import ProjectDetails from "./ProjectDetails";
import SkeletonLoading from "../UI/SkeletonLoading"; // Import the SkeletonLoading component
import defultImage from "../images/defult.png";
import OthersProjects from "./OthersProjects";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectList, setProjectList] = useState([]); // Stores fetched project data
  const [loading, setLoading] = useState(true); // Tracks loading state

  const url = import.meta.env.VITE_PROJECTS_API_URL; // Using the URL from .env

  // Function to fetch project data using axios
  const fetchProjects = async () => {
    setLoading(true); // Set loading state to true when starting request

    try {
      const response = await axios.get(url);
      const projects = response.data.data || [];
      setProjectList(projects); // Set the project list in state
    } catch (error) {
      console.error("Error fetching project data:", error);
    } finally {
      setLoading(false); // Set loading state to false after the data is fetched
    }
  };

  useEffect(() => {
    fetchProjects(); // Fetch projects only once on component mount
  }, []); // Empty dependency array ensures it runs only once

  // Function to handle opening the project modal with details
  const handleOpenModal = (project) => {
    const projectWithArrayTechnologies = {
      ...project,
      technologies: project.technologies
        ? project.technologies.split(", ")
        : [],
    };
    setSelectedProject(projectWithArrayTechnologies); // Set selected project in state
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

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
          sx={{ color: "gray", textAlign: "center", mb: 8 }}
        >
          Here are some of the projects I’ve worked on. They showcase my skills
          and experience in web development.
        </Typography>
        {/* Chips Section */}
        {/* <Box textAlign="center" mb={4}>
          <Chip
            label="See my Small Projects"
            sx={{
              backgroundColor: "#004e5f",
              color: "#00D1FF",
              fontSize: "12px", // Smaller font size
              px: 2,
              py: 0.5,
            }}
          />
        </Box> */}
<OthersProjects />
        {/* Loading Indicator - using SkeletonLoading component */}
        {loading ? (
          <SkeletonLoading count={6} /> // You can specify the number of skeletons here
        ) : (
          // Project Cards Layout when not loading
          <Grid container spacing={4} justifyContent="center">
            {projectList
              .slice(0, showAllProjects ? projectList.length : 6)
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
                    } // Convert technologies string into an array
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
              {showAllProjects
                ? "Show Less Projects.."
                : "Show More Projects.."}
            </Button>
          </Box>
        )}

        {/* Modal for displaying project details */}
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
