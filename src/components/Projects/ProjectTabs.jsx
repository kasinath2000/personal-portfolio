
// import React, { useState } from "react";
// import { Box, Tabs, Tab, Grid, useMediaQuery } from "@mui/material";
// import SmallCards from "./SmallCards";
// import defultimg from "../images/defult.png";
// import ProjectDetails from "./ProjectDetails";

// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const isMobile = useMediaQuery("(max-width:600px)");
//   const landingProjects = [
//     { title: "Landing Project 1", description: "Description 1", image: defultimg, technologies: ["React", "Tailwind"] },
//     { title: "Landing Project 2", description: "Description 2", image: defultimg, technologies: ["HTML", "CSS"] },
//     { title: "Landing Project 3", description: "Description 3", image: defultimg, technologies: ["JavaScript"] },
//     { title: "Landing Project 4", description: "Description 4", image: defultimg, technologies: ["Material UI"] },
//     { title: "Landing Project 5", description: "Description 5", image: defultimg, technologies: ["TypeScript"] },
//   ];

//   const otherProjects = [
//     { title: "other Project 1", description: "other Description 1", image: defultimg, technologies: ["Node.js"] },
//     { title: "other Project 2", description: "other Description 2", image: defultimg, technologies: ["Express"] },
//     { title: "other Project 3", description: "other Description 3", image: defultimg, technologies: ["MongoDB"] },
//     { title: "other Project 4", description: "other Description 4", image: defultimg, technologies: ["Bootstrap"] },
//     { title: "other Project 5", description: "other Description 5", image: defultimg, technologies: ["Firebase"] },
//   ];

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <Box>
//       <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" centered>
//         <Tab label="Landing Projects" />
//         <Tab label="Other Projects" />
//       </Tabs>

//       <Box mt={2}>
//         {activeTab === 0 && (
//           <Grid container spacing={1}>
//             {landingProjects.map((project, index) => (
//               <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
//                 <SmallCards
//                   title={project.title}
//                   description={project.description}
//                   image={project.image}
//                   technologies={project.technologies}
//                   onSeeMoreClick={() => handleOpenModal(project)}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         {activeTab === 1 && (
//           <Grid container spacing={1}>
//             {otherProjects.map((project, index) => (
//               <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
//                 <SmallCards
//                   title={project.title}
//                   description={project.description}
//                   image={project.image}
//                   technologies={project.technologies}
//                   onSeeMoreClick={() => handleOpenModal(project)}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>

//       {/* Modal for Project Details */}
//       {selectedProject && (
//         <ProjectDetails
//           open={Boolean(selectedProject)}
//           handleClose={handleCloseModal}
//           project={selectedProject}
//         />
//       )}
//     </Box>
//   );
// };

// export default ProjectTabs;


import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Grid, CircularProgress, Typography } from "@mui/material";
import SmallCards from "./SmallCards";
import ProjectDetails from "./ProjectDetails";

const API_URL = "https://script.google.com/macros/s/AKfycbwdqGbEZKa5wSgxdK7fq--6JBkuv9gLK7EnseWMYSNkrc14nxHoYB7ZSYjy1h5KY8lE9g/exec";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [landingProjects, setLandingProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log("Fetching data from API...");
      try {
        const response = await fetch(API_URL);
        console.log("Response received:", response);

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        setLandingProjects(data.landingProjects || []);
        setOtherProjects(data.otherProjects || []);
      } catch (err) {
        console.error("Error fetching projects:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Fetch process completed.");
      }
    };

    fetchProjects();
  }, []);

  const handleTabChange = (event, newValue) => {
    console.log("Tab changed to:", newValue);
    setActiveTab(newValue);
  };

  const handleOpenModal = (project) => {
    console.log("Opening project modal:", project);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    console.log("Closing project modal");
    setSelectedProject(null);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" centered>
        <Tab label="Landing Projects" />
        <Tab label="Other Projects" />
      </Tabs>

      <Box mt={2}>
        {loading && (
          <>
            <CircularProgress />
            <Typography>Loading projects...</Typography>
          </>
        )}
        {error && <Typography color="error">Error: {error}</Typography>}

        {!loading && !error && (
          <Grid container spacing={1}>
            {(activeTab === 0 ? landingProjects : otherProjects).map((project, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                <SmallCards
                  title={project.title}
                  description={project.description}
                  image={project.image || "default-image-url"} // Add default image if missing
                  technologies={Array.isArray(project.technologies) ? project.technologies : project.technologies.split(",")}
                  onSeeMoreClick={() => handleOpenModal(project)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Modal for Project Details */}
      {selectedProject && (
        <ProjectDetails open={Boolean(selectedProject)} handleClose={handleCloseModal} project={selectedProject} />
      )}
    </Box>
  );
};

export default ProjectTabs;
