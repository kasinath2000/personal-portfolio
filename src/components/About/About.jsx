

// import React from "react";
// import { Box, Typography, Container } from "@mui/material";
// import model from "../images/model.png";

// const About = () => {
//   const title = "About Me";
//   const intro =
//     "Hi, I'm a dedicated web developer passionate about creating interactive, user-friendly, and visually appealing web applications. My goal is to build products that deliver a great experience.";
//   const skills =
//     "I specialize in modern web technologies such as React, MUI, and JavaScript, ensuring efficient and scalable development.";

//   return (
//     <Box id="about" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container
//         maxWidth="lg"
//         sx={{
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//           gap: { xs: 4, md: 6 },
//           alignItems: "center",
//         }}
//       >
//         {/* Left Side - Model on Desktop, Below Text on Mobile */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             order: { xs: 2, md: 1 },
//             mt: { xs: 4, md: 0 }, // Adds spacing for mobile view
//           }}
//         >
//           <img
//             src={model}
//             alt="About Me"
//             style={{
//               width: "100%",
//               maxWidth: "280px",
//               height: "auto",
//               borderRadius: "31% 21% 0% 0% / 25% 25% 21% 25%",
//               background: "linear-gradient(to top, #00D1FF, transparent)",
//             }}
//           />
          
//         </Box>

//         {/* Right Side - Text on Desktop, Above Model on Mobile */}
//         <Box
//           sx={{
//             color: "white",
//             textAlign: { xs: "center", md: "left" },
//             order: { xs: 1, md: 2 },
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               color: "#00D1FF",
//               mb: 2,
//               fontSize: { xs: "1.8rem", md: "2.5rem" },
//             }}
//           >
//             {title}
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: "gray",
//               mb: 3,
//               fontSize: { xs: "0.9rem", md: "1rem" },
//             }}
//           >
//             {intro}
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ color: "gray", fontSize: { xs: "0.9rem", md: "1rem" } }}
//           >
//             {skills}
//           </Typography>

//           {/* Horizontal Line Under Text - Hidden on Small Screens */}
//           <Box
//             sx={{
//               height: "2px",
//               backgroundColor: "#00D1FF",
//               width: "80px",
//               margin: "1.5rem auto 0",
//               display: { xs: "none", md: "block" },
//             }}
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default About;



/******************************model color add******************* */

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import model from "../images/model.png";

const About = () => {
  const title = "About Me";
  const intro =
    "Hi, I'm a dedicated web developer passionate about creating interactive, user-friendly, and visually appealing web applications. My goal is to build products that deliver a great experience.";
  const skills =
    "I specialize in modern web technologies such as React, MUI, and JavaScript, ensuring efficient and scalable development.";

  return (
    <Box id="about" sx={{ backgroundColor: "#00242C", py: 8 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        {/* Left Side - Model on Desktop, Below Text on Mobile */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 2, md: 1 },
            width: "100%",
            maxWidth: "280px",
            borderRadius: "31% 21% 0% 0% / 25% 25% 21% 25%",
            overflow: "hidden",
            margin: { xs: "0 auto", md: 0 }, // Center on mobile
          }}
        >
          {/* Image */}
          <img
            src={model}
            alt="About Me"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "31% 21% 0% 0% / 25% 25% 21% 25%",
            }}
          />

          {/* Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, #00D1FF , transparent)",
            }}
          />
        </Box>

        {/* Right Side - Text on Desktop, Above Model on Mobile */}
        <Box
          sx={{
            color: "white",
            textAlign: { xs: "center", md: "left" },
            order: { xs: 1, md: 2 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#00D1FF",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              mb: 3,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            {intro}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {skills}
          </Typography>

          {/* Horizontal Line Under Text - Hidden on Small Screens */}
          <Box
            sx={{
              height: "2px",
              backgroundColor: "#00D1FF",
              width: "80px",
              margin: "1.5rem auto 0",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
