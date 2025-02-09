// import React, { useState } from "react";
// import { Box, Drawer, Chip, Typography } from "@mui/material";
// import ProjectTabs from "./ProjectTabs"; // Import the ProjectTabs component

// const OthersProjects = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleChipClick = () => {
//     setIsDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <Box textAlign="center" mb={4}>
//       {/* Chip to trigger Drawer */}
//       <Chip
//         label="See my Another Projects"
//         sx={{
//           backgroundColor: "#004e5f",
//           color: "#00D1FF",
//           fontSize: "12px",
//           px: 2,
//           py: 0.5,
//         }}
//         onClick={handleChipClick}
//       />

//       {/* Bottom Drawer */}
//       <Drawer anchor="bottom" open={isDrawerOpen} onClose={handleCloseDrawer}>
//         <Box sx={{ p: 3, backgroundColor: "#00242C", color: "#FFFFFF" }}>
//           <Typography variant="h6" textAlign="center" gutterBottom>
//             Other Projects
//           </Typography>

//           {/* Tab Component Integration */}
//           <ProjectTabs />
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default OthersProjects;




import React, { useState } from "react";
import { Box, Drawer, Chip, Typography, IconButton } from "@mui/material";
import { X } from "lucide-react";
import ProjectTabs from "./ProjectTabs";

const OthersProjects = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChipClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box textAlign="center" mb={4}>
      {/* Chip to trigger Drawer */}
      <Chip
        label="See my Another Projects"
        sx={{
          backgroundColor: "#004e5f",
          color: "#00D1FF",
          fontSize: "12px",
          px: 2,
          py: 0.5,
        }}
        onClick={handleChipClick}
      />

      {/* Responsive Drawer */}
      <Drawer anchor="bottom" open={isDrawerOpen} onClose={handleCloseDrawer}>
        <Box sx={{ p: 2, backgroundColor: "#00242C", color: "#FFFFFF", position: "relative" }}>
          {/* Close Icon */}
          <IconButton
            onClick={handleCloseDrawer}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#FFFFFF",
            }}
          >
            <X />
          </IconButton>

          <Typography variant="h6" textAlign="center" gutterBottom>
            Other Projects
          </Typography>

          {/* Tab Component Integration */}
          <ProjectTabs />
        </Box>
      </Drawer>
    </Box>
  );
};

export default OthersProjects;
