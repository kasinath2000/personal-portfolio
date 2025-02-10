// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";

// const SkillCard = ({ title, items }) => {
//   return (
//     <Card
//       sx={{
//         backgroundColor: "rgba(0, 209, 255, 0.2)", // Semi-transparent blue
//         color: "white",
//         textAlign: "center",
//         padding: 3,
//         borderRadius: "16px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//         backdropFilter: "blur(10px)", // Glassmorphic effect
//         transition: "none", // Remove hover effect
//       }}
//     >
//       <CardContent>
//         <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//           {title}
//         </Typography>
//         {items.map((item, index) => (
//           <Typography key={index} variant="body2" sx={{ fontSize: "14px", mb: 1 }}>
//             {item}
//           </Typography>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };

// export default SkillCard;


import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

const SkillCard = ({ title, items }) => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 209, 255, 0.2)", 
        color: "white",
        textAlign: "center",
        padding: 3,
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>

        {/* Skill Chips */}
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {items.map((item, index) => (
            <Chip
              key={index}
              label={item}
              sx={{
                margin: "4px",
                color: "white",
                borderColor: "#00D1FF",
                backgroundColor: "rgba(0, 209, 255, 0.2)",
                fontSize: "14px",
                '&:hover': {
                  backgroundColor: "#00D1FF",
                  color: "#00242C",
                },
              }}
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
