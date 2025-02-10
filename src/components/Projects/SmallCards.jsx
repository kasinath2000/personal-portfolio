// import React from "react";
// import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

// const SmallCards = ({ title, description, image, onSeeMoreClick, technologies }) => {
//   return (
//     <Card
//       sx={{
//         backgroundColor: "#00D1FF",
//         color: "#00242C",
//         borderRadius: "12px",
//         border: "2px solid #00D1FF",
//         boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
//         transition: "transform 0.2s ease-in-out",
//         "&:hover": { transform: "scale(1.03)" },
//         width: 250,
//         height: 320,
//       }}
//     >
//       <CardMedia
//         component="img"
//         image={image}
//         alt={title}
//         sx={{
//           height: 120,
//           width: "100%",
//           objectFit: "cover",
//           borderTopLeftRadius: "12px",
//           borderTopRightRadius: "12px",
//         }}
//       />
//       <CardContent>
//         <Typography variant="h6" component="div" gutterBottom>
//           {title}
//         </Typography>

//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{
//             display: "-webkit-box",
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             WebkitLineClamp: 2,
//             mb: 1,
//           }}
//         >
//           {description}
//         </Typography>

//         <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//           <strong>Technologies:</strong> {technologies.join(", ")}
//         </Typography>

//         <Box textAlign="left">
//           <Button
//             size="small"
//             variant="outlined"
//             sx={{
//               color: "#00242C",
//               border: "2px solid #00242C",
//               borderRadius: "8px",
//               textTransform: "capitalize",
//               paddingX: 2,
//             }}
//             onClick={onSeeMoreClick}
//           >
//             See More
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default SmallCards;

import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const SmallCards = ({ title, description, image, onSeeMoreClick, technologies }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#00D1FF",
        color: "#00242C",
        borderRadius: "8px",
        border: "2px solid #00D1FF",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale(1.02)" },
        width: 250, // Increase width to 250px
        height: 300, // Increase height to 300px
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 150, // Increased height of image
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <CardContent sx={{ padding: "16px" }}>
        <Typography variant="subtitle2" component="div" noWrap>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            fontSize: "14px", // Adjust font size for better readability
          }}
        >
          {description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontSize: "14px" }}>
          <strong>Technologies:</strong> {technologies.join(", ")}
        </Typography>

        <Box textAlign="left" mt={1}>
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: "#00242C",
              border: "3px solid #00242C",
              borderRadius: "6px",
              textTransform: "capitalize",
              paddingX: 1.5,
              fontSize: "12px", // Slightly larger font size
            }}
            onClick={onSeeMoreClick}
          >
            See More...
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SmallCards;
