// import React from "react";
// import {
//   Drawer,
//   Box,
//   Typography,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const ProjectsDrawer = ({ open, onClose, projects }) => {
//   return (
//     <Drawer anchor="bottom" open={open} onClose={onClose}>
//       <Box
//         sx={{
//           width: "100%",
//           height: "50vh",
//           backgroundColor: "#001E26",
//           p: 3,
//           color: "white",
//         }}
//       >
//         {/* Close Button */}
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h6" sx={{ color: "#00D1FF" }}>
//             More Projects
//           </Typography>
//           <IconButton onClick={onClose} sx={{ color: "#00D1FF" }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Project List */}
//         <List>
//           {projects.map((project, index) => (
//             <ListItem key={index} button>
//               <ListItemText
//                 primary={project.title}
//                 secondary={project.description}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default ProjectsDrawer;

import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProjectsDrawer = ({ open, onClose, title, children }) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose } >
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundColor: "#001E26",
          p: 3,
          color: "white",
          border:"2px solid red"
        }}
      >
        {/* Header with title and close button */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ color: "#00D1FF" }}>
            {title}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#00D1FF" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Dynamic Content */}
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Drawer>
  );
};

export default ProjectsDrawer;