// import React, { useEffect } from "react";
// import { Box, Typography, Container, Paper } from "@mui/material";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const educationData = [
//   {
//     degree: "Master of Computer Science (MCA)",
//     stream: "Computer Science and Engineering",
//     institution:
//       "Mahatma Gandhi Antarrashtriya Hindi Vishwa Vidyalaya, Wardha (MGAHV)",
//     year: "2022 - 2024",
//   },
//   {
//     degree: "Bachelor of Computer Science (Bsc. CS)",
//     stream: "Computer Science",
//     institution: "Bankura University",
//     year: "2019 - 2023",
//   },
//   {
//     degree: "Higher Secondary (12th)",
//     stream: "Science (PCM)",
//     institution: "Ranibandh High School (RHS)",
//     year: "2016 - 2019",
//   },
//   {
//     degree: "Secondary (10th)",
//     stream: "General",
//     institution: "Ranibandh High School (RHS)",
//     year: " - 2016",
//   },
// ];

// const Education = () => {
//   useEffect(() => {
//     AOS.init({ once: true, duration: 800 });
//   }, []);

//   return (
//     <Box id="education" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="md">
//         <Typography
//           variant="h4"
//           sx={{
//             color: "#00D1FF",
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 6,
//             fontSize: { xs: "1.8rem", md: "2.5rem" },
//           }}
//         >
//           Education
//         </Typography>

//         <Box sx={{ position: "relative", px: 2 }}>
//           {/* Center vertical line */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               bottom: 0,
//               left: "50%",
//               width: "2px",
//               backgroundColor: "#00D1FF",
//               transform: "translateX(-50%)",
//               display: { xs: "none", sm: "block" }, // hide line on xs
//               overflowX: "hidden", // ADD this
//             }}
//           />

//           {educationData.map((edu, index) => {
//             const isLeft = index % 2 === 0;
//             const aosType = isLeft ? "fade-right" : "fade-left";

//             return (
//               <Box
//                 key={index}
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   display: "flex",
//                   justifyContent: {
//                     xs: "center",
//                     sm: isLeft ? "flex-start" : "flex-end",
//                   },
//                   mb: 6,
//                 }}
//                 data-aos={aosType}
//               >
//                 {/* Dot */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 24,
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     width: "16px",
//                     height: "16px",
//                     backgroundColor: "#00D1FF",
//                     borderRadius: "50%",
//                     zIndex: 2,
//                     display: { xs: "none", sm: "block" },
//                   }}
//                 />

//                 {/* Card */}
//                 <Paper
//                   elevation={3}
//                   sx={{
//                     position: "relative",
//                     width: "100%",
//                     maxWidth: { xs: "100%", sm: "47%" },
//                     p: 3,
//                     backgroundColor: "rgba(1, 39, 51, 0.5)", // translucent background
//                     backdropFilter: "blur(10px)", // glassmorphism
//                     WebkitBackdropFilter: "blur(10px)", // Safari support
//                     color: "#fff",
//                     borderLeft: isLeft && { sm: "5px solid #00D1FF" },
//                     borderRight: !isLeft && { sm: "5px solid #00D1FF" },
//                     textAlign: "left",
//                     borderRadius: "12px",
//                     boxShadow: "0 4px 20px rgba(0, 209, 255, 0.15)",
//                   }}
//                 >
//                   <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
//                     {edu.degree}
//                   </Typography>
//                   <Typography sx={{ fontStyle: "italic", mb: 0.5 }}>
//                     {edu.stream}
//                   </Typography>
//                   <Typography>{edu.institution}</Typography>
//                   <Typography sx={{ color: "#ccc" }}>{edu.year}</Typography>
//                 </Paper>
//               </Box>
//             );
//           })}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Education;


import React, { useEffect } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import educationData from "../../data/educationData"; // Adjust path as needed

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <Box
      id="education"
      sx={{
        backgroundColor: "#00242C",
        py: 8,
        
      }}
    >
      <Container maxWidth="md" >
        <Typography
          variant="h4"
          sx={{
            color: "#00D1FF",
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Education
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            textAlign: "center",
            mb: 6,
            maxWidth: "80%",
            mx: "auto",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          My educational journey reflects a strong foundation in computer
          science and technology, built through structured academic learning.
        </Typography>

        <Box sx={{ position: "relative", px: 2 }}>
          {/* Center vertical line with wider border */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: "4px", // 👈 thicker border line
              backgroundColor: "#00D1FF",
              transform: "translateX(-50%)",
              display: { xs: "none", sm: "block" },
              overflowX: "hidden",
            }}
          />

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            const aosType = isLeft ? "fade-right" : "fade-left";

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: isLeft ? "flex-start" : "flex-end",
                  },
                  mb: 6,
                }}
                data-aos={aosType}
              >
                {/* Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#00D1FF",
                    borderRadius: "50%",
                    zIndex: 2,
                    display: { xs: "none", sm: "block" },
                  }}
                />

                {/* Card */}
                <Paper
                  elevation={3}
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: { xs: "100%", sm: "47%" },
                    p: 3,
                    backgroundColor: "rgba(1, 39, 51, 0.5)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: "#fff",
                    borderLeft: isLeft && { sm: "5px solid #00D1FF" },
                    borderRight: !isLeft && { sm: "5px solid #00D1FF" },
                    textAlign: "left",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0, 209, 255, 0.15)",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    {edu.degree}
                  </Typography>
                  <Typography sx={{ fontStyle: "italic", mb: 0.5 }}>
                    {edu.stream}
                  </Typography>
                  <Typography>{edu.institution}</Typography>
                  <Typography sx={{ color: "#ccc" }}>{edu.year}</Typography>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
      <Box 
      sx={{borderBottom: "2px solid rgba(0, 209, 255, 0.3)", // light cyan
    width: { xs: "60%", sm: "50%", md: "70%" },       // responsive width
    mx: "auto",                                        // center horizontally
    my: 4,
  p:5}}
      />
    </Box>
  );
};

export default Education;
