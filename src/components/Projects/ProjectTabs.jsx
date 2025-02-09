
// import React, { useState } from "react";
// import { Box, Tabs, Tab, Grid } from "@mui/material";
// import SmallCards from "./SmallCards";
// import defultimg from "../images/defult.png";

// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const landingProjects = [
//     { title: "Landing Project 1", description: "Description 1", image: defultimg, technologies: ["React", "Tailwind"] },
//     { title: "Landing Project 2", description: "Description 2", image: defultimg, technologies: ["HTML", "CSS"] },
//     { title: "Landing Project 3", description: "Description 3", image: defultimg, technologies: ["JavaScript"] },
//     { title: "Landing Project 4", description: "Description 4", image: defultimg, technologies: ["Material UI"] },
//     { title: "Landing Project 5", description: "Description 5", image: defultimg, technologies: ["TypeScript"] },
//   ];

//   const smallProjects = [
//     { title: "Small Project 1", description: "Small Description 1", image: defultimg, technologies: ["Node.js"] },
//     { title: "Small Project 2", description: "Small Description 2", image: defultimg, technologies: ["Express"] },
//     { title: "Small Project 3", description: "Small Description 3", image: defultimg, technologies: ["MongoDB"] },
//     { title: "Small Project 4", description: "Small Description 4", image: defultimg, technologies: ["Bootstrap"] },
//     { title: "Small Project 5", description: "Small Description 5", image: defultimg, technologies: ["Firebase"] },
//   ];

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box>
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         textColor="inherit"
//         indicatorColor="primary"
//         centered
//       >
//         <Tab label="Landing Projects" />
//         <Tab label="Small Projects" />
//       </Tabs>

//       <Box mt={2}>
//         {activeTab === 0 && (
//           <Grid container spacing={2}>
//             {landingProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
//                 <SmallCards
//                   title={project.title}
//                   description={project.description}
//                   image={project.image}
//                   technologies={project.technologies}
//                 //   onSeeMoreClick={() => alert(`${project.title} - See More Clicked!`)}
//                   onSeeMoreClick={() => handleOpenModal(project)}

//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         {activeTab === 1 && (
//           <Grid container spacing={2}>
//             {smallProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
//                 <SmallCards
//                   title={project.title}
//                   description={project.description}
//                   image={project.image}
//                   technologies={project.technologies}
//                 //   onSeeMoreClick={() => alert(`${project.title} - See More Clicked!`)}
//                 onSeeMoreClick={() => handleOpenModal(project)}

//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ProjectTabs;


// import React, { useState } from "react";
// import { Box, Tabs, Tab, Grid } from "@mui/material";
// import SmallCards from "./SmallCards";
// import defultimg from "../images/defult.png";
// import ProjectDetails from "./ProjectDetails";

// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const landingProjects = [
//     { title: "Landing Project 1", description: "Description 1", image: defultimg, technologies: ["React", "Tailwind"] },
//     { title: "Landing Project 2", description: "Description 2", image: defultimg, technologies: ["HTML", "CSS"] },
//     { title: "Landing Project 3", description: "Description 3", image: defultimg, technologies: ["JavaScript"] },
//     { title: "Landing Project 4", description: "Description 4", image: defultimg, technologies: ["Material UI"] },
//     { title: "Landing Project 5", description: "Description 5", image: defultimg, technologies: ["TypeScript"] },
//   ];

//   const smallProjects = [
//     { title: "Small Project 1", description: "Small Description 1", image: defultimg, technologies: ["Node.js"] },
//     { title: "Small Project 2", description: "Small Description 2", image: defultimg, technologies: ["Express"] },
//     { title: "Small Project 3", description: "Small Description 3", image: defultimg, technologies: ["MongoDB"] },
//     { title: "Small Project 4", description: "Small Description 4", image: defultimg, technologies: ["Bootstrap"] },
//     { title: "Small Project 5", description: "Small Description 5", image: defultimg, technologies: ["Firebase"] },
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
//         <Tab label="Small Projects" />
//       </Tabs>

//       <Box mt={2}>
//         {activeTab === 0 && (
//           <Grid container spacing={2}>
//             {landingProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
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
//           <Grid container spacing={2}>
//             {smallProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
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


import React, { useState } from "react";
import { Box, Tabs, Tab, Grid, useMediaQuery } from "@mui/material";
import SmallCards from "./SmallCards";
import defultimg from "../images/defult.png";
import ProjectDetails from "./ProjectDetails";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const isMobile = useMediaQuery("(max-width:600px)");

  const landingProjects = [
    { title: "Landing Project 1", description: "Description 1", image: defultimg, technologies: ["React", "Tailwind"] },
    { title: "Landing Project 2", description: "Description 2", image: defultimg, technologies: ["HTML", "CSS"] },
    { title: "Landing Project 3", description: "Description 3", image: defultimg, technologies: ["JavaScript"] },
    { title: "Landing Project 4", description: "Description 4", image: defultimg, technologies: ["Material UI"] },
    { title: "Landing Project 5", description: "Description 5", image: defultimg, technologies: ["TypeScript"] },
  ];

  const smallProjects = [
    { title: "Small Project 1", description: "Small Description 1", image: defultimg, technologies: ["Node.js"] },
    { title: "Small Project 2", description: "Small Description 2", image: defultimg, technologies: ["Express"] },
    { title: "Small Project 3", description: "Small Description 3", image: defultimg, technologies: ["MongoDB"] },
    { title: "Small Project 4", description: "Small Description 4", image: defultimg, technologies: ["Bootstrap"] },
    { title: "Small Project 5", description: "Small Description 5", image: defultimg, technologies: ["Firebase"] },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" centered>
        <Tab label="Landing Projects" />
        <Tab label="Small Projects" />
      </Tabs>

      <Box mt={2}>
        {activeTab === 0 && (
          <Grid container spacing={2}>
            {landingProjects.map((project, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                <SmallCards
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  onSeeMoreClick={() => handleOpenModal(project)}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {activeTab === 1 && (
          <Grid container spacing={2}>
            {smallProjects.map((project, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                <SmallCards
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  onSeeMoreClick={() => handleOpenModal(project)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Modal for Project Details */}
      {selectedProject && (
        <ProjectDetails
          open={Boolean(selectedProject)}
          handleClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </Box>
  );
};

export default ProjectTabs;
