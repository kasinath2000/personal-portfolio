
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import img from "../images/landing.png";
// import Resume from '../../assets/Kasinath.pdf'
// const Home = () => {
//   const greeting = "Hi, I am";
//   const name = "Kasinath Mandal";
//   const description =
//     "Hi, I'm Kasinath Mandal, a passionate freelance web developer. I specialize in creating websites that help businesses grow and achieve their goals.";

//   const handleResumeDownload = () => {
//     const resumeUrl = {Resume};
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.setAttribute("download", "Kasinath_Mandal_Resume.pdf");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box
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
//           <Typography variant="body1" sx={{ color: "gray", mb: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}>
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
//               onClick={handleResumeDownload}
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


import React from "react";
import { Box, Typography, Button } from "@mui/material";
import img from "../images/landing.png";
import Resume from "../../assets/Kasinath.pdf";

const Home = () => {
  const greeting = "Hi, I am";
  const name = "Kasinath Mandal";
  const description =
    "Hi, I'm Kasinath Mandal, a passionate freelance web developer. I specialize in creating websites that help businesses grow and achieve their goals.";

  return (
    <Box id = "home"
      sx={{
        backgroundColor: "#00242C",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          maxWidth: "1200px",
          width: "100%",
          gap: 4,
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
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
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mb: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}>
            {description}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00D1FF",
                color: "#000",
                fontSize: { xs: "0.8rem", md: "0.8rem" },
                "&:hover": { backgroundColor: "#00b3e6" },
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
              }}
              component="a"
              href={Resume}
              download="Kasinath_Mandal_Resume.pdf"
            >
              My Resume
            </Button>
          </Box>
        </Box>

        {/* Right Side - Static Image */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img
            src={img}
            alt="Kasinath Mandal"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              objectFit: "cover",
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
