
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import img from "../images/landing.png";
// import Resume from "../../assets/Kasinath.pdf";

// const Home = () => {
//   const greeting = "Hi, I am";
//   const name = "Kasinath Mandal";
//   const description =
//     "Hi, I'm Kasinath Mandal, a passionate freelance web developer. I specialize in creating websites that help businesses grow and achieve their goals.";

//   return (
//     <Box id = "home"
//       sx={{
//         backgroundColor: "#00242C",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "2rem",
//       }}
//     >
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//           maxWidth: "1200px",
//           width: "100%",
//           gap: 4,
//         }}
//       >
//         {/* Left Side */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             color: "white",
//             textAlign: { xs: "center", md: "left" },
//           }}
//         >
//           <Typography variant="h6" sx={{ mb: 1 }}>
//             {greeting}
//           </Typography>
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               color: "#00D1FF",
//               mb: 3,
//               fontSize: { xs: "2rem", md: "3.5rem" },
//             }}
//           >
//             {name}
//           </Typography>
//           <Typography variant="body1" sx={{ color: "#fff", mb: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}>
//             {description}
//           </Typography>
//           <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#00D1FF",
//                 color: "#000",
//                 fontSize: { xs: "0.8rem", md: "0.8rem" },
//                 "&:hover": { backgroundColor: "#00b3e6" },
//               }}
//               href="https://github.com/kasinath2000"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: "#00D1FF",
//                 color: "#00D1FF",
//                 fontSize: { xs: "0.8rem", md: "0.8rem" },
//               }}
//               component="a"
//               href={Resume}
//               download="Kasinath_Mandal_Resume.pdf"
//             >
//               My Resume
//             </Button>
//           </Box>
//         </Box>

//         {/* Right Side - Static Image */}
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
//           <img
//             src={img}
//             alt="Kasinath Mandal"
//             style={{
//               width: "100%",
//               maxWidth: "400px",
//               height: "auto",
//               objectFit: "cover",
//             }}
//           />
//           {/* Horizontal Bar below the Image */}
//           <Box
//             sx={{
//               width: "100%",
//               height: "2px",
//               backgroundColor: "#00D1FF",
//               marginTop: "16px",
//               maxWidth: "400px",
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;

/**text animation code  */

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import img from "../images/landing.png";
import Resume from "../../assets/Kasinath.pdf";

const Home = () => {
  const greeting = "Hi, I am";
  const name = "Kasinath Mandal";
  const description =
    "Hi, I'm Kasinath Mandal, a passionate freelance web developer. I specialize in creating websites that help businesses grow and achieve their goals.";

  return (
    <Box
      id="home"
      sx={{
        background: "linear-gradient(135deg, #001f2a 0%, #003344 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: (theme) => theme.spacing(4),
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          maxWidth: "1200px",
          width: "100%",
          gap: (theme) => theme.spacing(5),
        }}
      >
        {/* Left Side */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* <Typography variant="caption" sx={{ letterSpacing: "2px", color: "#00D1FF", mb: 1 }}>
            FREELANCE DEVELOPER
          </Typography> */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            {greeting}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#00D1FF",
              mb: 3,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            <Typewriter words={[name]} loop={false} cursor />
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", mb: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00D1FF",
                color: "#000",
                fontSize: { xs: "0.8rem", md: "0.8rem" },
                boxShadow: "0 0 10px #00D1FF",
                transition: "transform 0.3s ease",
                "&:hover": {
                  backgroundColor: "#00b3e6",
                  transform: "scale(1.05)",
                },
              }}
              href="https://github.com/kasinath2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#00D1FF",
                color: "#00D1FF",
                fontSize: { xs: "0.8rem", md: "0.8rem" },
                transition: "transform 0.3s ease",
                "&:hover": {
                  borderColor: "#00b3e6",
                  color: "#00b3e6",
                  transform: "scale(1.05)",
                },
              }}
              component="a"
              href={Resume}
              download="Kasinath_Mandal_Resume.pdf"
            >
              My Resume
            </Button>
          </Box>
        </Box>

        {/* Right Side - Animated Image */}
        <Box
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={img}
            alt="Kasinath Mandal"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
              // boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          />
          {/* Horizontal Bar below the Image */}
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#00D1FF",
              marginTop: "16px",
              maxWidth: "400px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
