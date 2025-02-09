// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }


// import React, { useState } from "react";
// import { Box, Tabs, Tab, Grid, Typography } from "@mui/material";
// import SmallCards from "../UI/ProjectCard";
// import defultimg from '../images/defult.png'
// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   // Dummy data for Landing Projects and Small Projects
//   const landingProjects = [
//     { title: "Landing Project 1", description: "Description 1", image: defultimg, technologies: ["React", "Tailwind"] },
//     { title: "Landing Project 2", description: "Description 2", image: defultimg, technologies: ["HTML", "CSS"] },
//     { title: "Landing Project 3", description: "Description 3", image: defultimg, technologies: ["JavaScript"] },
//     { title: "Landing Project 4", description: "Description 4", image: defultimg, technologies: ["Material UI"] },
//   ];

//   const smallProjects = [
//     { title: "Small Project 1", description: "Small Description 1", image: defultimg, technologies: ["Node.js"] },
//     { title: "Small Project 2", description: "Small Description 2", image: defultimg, technologies: ["Express"] },
//     { title: "Small Project 3", description: "Small Description 3", image: defultimg, technologies: ["MongoDB"] },
//     { title: "Small Project 4", description: "Small Description 4", image: defultimg, technologies: ["Bootstrap"] },
//   ];

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box>
//       {/* Tab Navigation */}
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

//       {/* Tab Content */}
//       <Box mt={2}>
//         {activeTab === 0 && (
//           <Grid container spacing={2}>
//             {landingProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <SmallCards
//                   title={project.title}
//                   description={project.description}
//                   image={project.image}
//                   technologies={project.technologies}
//                   onSeeMoreClick={() => alert(`${project.title} - See More Clicked!`)}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         {activeTab === 1 && (
//           <Grid container spacing={2}>
//             {smallProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <SmallCards
//                   title={project.title}
//                   description={project.description}
//                   image={project.image}
//                   technologies={project.technologies}
//                   onSeeMoreClick={() => alert(`${project.title} - See More Clicked!`)}
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


import React, { useState } from "react";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import SmallCards from "./SmallCards";
import defultimg from "../images/defult.png";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

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

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary"
        centered
      >
        <Tab label="Landing Projects" />
        <Tab label="Small Projects" />
      </Tabs>

      <Box mt={2}>
        {activeTab === 0 && (
          <Grid container spacing={2}>
            {landingProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <SmallCards
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  onSeeMoreClick={() => alert(`${project.title} - See More Clicked!`)}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {activeTab === 1 && (
          <Grid container spacing={2}>
            {smallProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <SmallCards
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  onSeeMoreClick={() => alert(`${project.title} - See More Clicked!`)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ProjectTabs;
