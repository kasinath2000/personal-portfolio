
// import React from "react";
// import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
// import SkillCard from "../UI/SkillCard"; // Import SkillCard component
// const Skills = () => {
//   // Skill Logos
//   const skillsList = [
//     { name: "JavaScript", logo: "/img/js.png" },
//     { name: "React", logo: "/img/reactJs.png" },
//     { name: "Node.js", logo: "/img/node.png" },
//     { name: "HTML", logo: "/img/html.png" },
//     { name: "CSS", logo: "/img/css.png" },
//     { name: "Tailwind CSS", logo: "/img/Tailwind.png" },
//     { name: "MUI", logo: "/img/mui.png" },
//     { name: "Redux", logo: "/img/redux.png" },
//     { name: "Express", logo: "/img/Express.png" },
//     { name: "MongoDB", logo: "/img/mongodb.png" },
//     { name: "TypeScript", logo: "/img/TypeScript.png" },
//     { name: "Git", logo: "/img/git.png" },
//     { name: "Firebase", logo: "/img/firebase.png" },
//     { name: "PostgreSQL", logo: "/img/postg.png" },
//   ];

//   return (
//     <Box id="skills" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="lg">
//         {/* Main Heading */}
//         <Typography
//           variant="h3"
//           sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 2 }}
//         >
//           My Skills
//         </Typography>

//         {/* Sub Heading */}
//         <Typography
//           variant="body1"
//           sx={{ color: "gray", textAlign: "center", mb: 12 }}
//         >
//           These are the key skills I’ve developed over time, which help me create dynamic and responsive web applications.
//         </Typography>
        
        
//         {/* One Big Skill Card Containing All Logos */}
//         <Grid container justifyContent="center">
//           <Grid item xs={12} sm={8} md={6}>
//             <Card
//               sx={{
//                 backgroundColor: "rgba(0, 209, 255, 0.2)", // Semi-transparent blue
//                 color: "black",
//                 textAlign: "center",
//                 padding: 4,
//                 borderRadius: "16px",
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//                 backdropFilter: "blur(10px)", // Glassmorphic effect
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   backgroundColor: "rgba(255, 255, 255, 0.3)",
//                   transform: "scale(1.05)",
//                 },
//               }}
//             >
//               <CardContent>
//                 {/* Card Title */}
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
//                   My Technologies
//                 </Typography>

//                 {/* Logos inside the card */}
//                 <Grid container spacing={2} justifyContent="center">
//                   {skillsList.map((skill, index) => (
//                     <Grid item xs={4} sm={3} key={index}>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           flexDirection: "column",
//                         }}
//                       >
//                         <img
//                           src={skill.logo}
//                           alt={skill.name}
//                           style={{
//                             width: "40px",
//                             height: "40px",
//                             borderRadius: "50%",
//                             objectFit: "cover",
//                             marginBottom: "8px",
//                             filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))",
//                           }}
//                         />
//                         <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "12px", color: "#fff" }}>
//                           {skill.name}
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Skills;



import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import SkillCard from "../UI/SkillCard";

const Skills = () => {
  // Skill Logos
  const skillsList = [
    { name: "JavaScript", logo: "/img/js.png" },
    { name: "React", logo: "/img/reactJs.png" },
    { name: "Node.js", logo: "/img/node.png" },
    { name: "HTML", logo: "/img/html.png" },
    { name: "CSS", logo: "/img/css.png" },
    { name: "Tailwind CSS", logo: "/img/Tailwind.png" },
    { name: "MUI", logo: "/img/mui.png" },
    { name: "Redux", logo: "/img/redux.png" },
    { name: "Express", logo: "/img/Express.png" },
    { name: "TypeScript", logo: "/img/TypeScript.png" },
    { name: "Git", logo: "/img/git.png" },
    { name: "Firebase", logo: "/img/firebase.png" },
    { name: "MongoDB", logo: "/img/mongodb.png" },
    { name: "PostgreSQL", logo: "/img/postg.png" },
  ];

  return (
    <Box id="skills" sx={{ backgroundColor: "#00242C", py: 8 }}>
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 2 }}
        >
          My Skills
        </Typography>

        {/* Sub Heading after main big card */}
        <Typography
          variant="body1"
          sx={{ color: "gray", textAlign: "center", mb: 4 }}
        >
          These are the key skills I’ve developed over time, which help me create dynamic and responsive web applications.
        </Typography>

        {/* Skill Cards Layout */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Left Skill Card */}
          <Grid item xs={12} sm={4} >
            <SkillCard 
              title="Frontend Technologies"
              items={["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "MUI", "Redux"]}
            />
            {/* <SkillCard 
              title="Desktop Applications"
            /> */}
          </Grid>
          

          {/* Big Skill Card in the Center */}
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                backgroundColor: "rgba(0, 209, 255, 0.2)", // Semi-transparent blue
                color: "black",
                textAlign: "center",
                padding: 4,
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)", // Glassmorphic effect
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                {/* Card Title */}
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                  My Technologies
                </Typography>

                {/* Logos inside the card */}
                <Grid container spacing={2} justifyContent="center" >
                  {skillsList.map((skill, index) => (
                    <Grid item xs={4} sm={3} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "8px",
                            filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))",
                          }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "12px", color: "#fff" }}>
                          {skill.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Skill Card */}
          <Grid item xs={12} sm={4} >
            <SkillCard 
              title="Backend Technologies"
              items={["JavaScript","Node.js", "Express", "MongoDB", "TypeScript", "Git/GitHub", "Firebase", "PostgreSQL"]}
            />
            
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Skills;
