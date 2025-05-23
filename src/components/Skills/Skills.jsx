
// import React from "react";
// import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
// import SkillCard from "../UI/SkillCard";

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
//     { name: "TypeScript", logo: "/img/TypeScript.png" },
//     { name: "Git", logo: "/img/git.png" },
//     { name: "Firebase", logo: "/img/firebase.png" },
//     { name: "MongoDB", logo: "/img/mongodb.png" },
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

//         {/* Sub Heading after main big card */}
//         <Typography
//           variant="body1"
//           sx={{ color: "gray", textAlign: "center", mb: 4 }}
//         >
//           These are the key skills I’ve developed over time, which help me create dynamic and responsive web applications.
//         </Typography>

//         {/* Skill Cards Layout */}
//         <Grid container spacing={4} justifyContent="center" alignItems="center">
//           {/* Left Skill Card */}
//           <Grid item xs={12} sm={4} >
//             <SkillCard 
//               title="Frontend Technologies"
//               items={["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "MUI", "Redux"]}
//             />
            
//           </Grid>
          

//           {/* Big Skill Card in the Center */}
//           <Grid item xs={12} sm={4}>
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
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
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
//                 <Grid container spacing={2} justifyContent="center" >
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
//                         <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "10px", color: "#FFF2F2" }}>
//                           {skill.name}
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Skill Card */}
//           <Grid item xs={12} sm={4} >
//             <SkillCard 
//               title="Backend Technologies"
//               items={["JavaScript","Node.js", "Express", "MongoDB", "TypeScript", "Git/GitHub", "Firebase", "PostgreSQL"]}
//             />
            
//           </Grid>
//         </Grid>

//       </Container>
//     </Box>
//   );
// };

// export default Skills;


/**------------------------------good version--------------------------------------------------------- */

// import React from "react";
// import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
// import SkillCard from "../UI/SkillCard";

// const Skills = () => {
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
//     { name: "TypeScript", logo: "/img/TypeScript.png" },
//     { name: "Git", logo: "/img/git.png" },
//     { name: "Firebase", logo: "/img/firebase.png" },
//     { name: "MongoDB", logo: "/img/mongodb.png" },
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

//         <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 4 }}>
//           These are the key skills I’ve developed over time, which help me create dynamic and responsive web applications.
//         </Typography>

//         {/* Skill Cards Layout */}
//         <Grid container spacing={4} justifyContent="center" alignItems="center">
//           {/* Left Skill Card */}
//           <Grid item xs={12} sm={6} md={4}>
//             <SkillCard
//               title="Frontend Technologies"
//               items={["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "MUI", "Redux"]}
//             />
//           </Grid>

//           {/* Big Skill Card in the Center */}
//           <Grid item xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 backgroundColor: "rgba(0, 209, 255, 0.2)",
//                 color: "black",
//                 textAlign: "center",
//                 padding: 4,
//                 borderRadius: "16px",
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//                 backdropFilter: "blur(10px)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                   transform: "scale(1.05)",
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
//                   My Technologies
//                 </Typography>
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
//                         <Typography
//                           variant="body2"
//                           sx={{ fontWeight: "bold", fontSize: "10px", color: "#FFF2F2" }}
//                         >
//                           {skill.name}
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Skill Card */}
//           <Grid item xs={12} sm={6} md={4}>
//             <SkillCard
//               title="Backend Technologies"
//               items={["JavaScript", "Node.js", "Express", "MongoDB", "TypeScript", "Git/GitHub", "Firebase", "PostgreSQL"]}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Skills;

/**+++++++++++++++++++++++++++++animation add++++++++++++++++++++++++++++++++++++++++ */
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import SkillCard from "../UI/SkillCard";

const Skills = () => {
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
    <Box id="skills" sx={{ backgroundColor: "#00242C", py: 10 }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="caption" sx={{ color: "#00D1FF", textAlign: "center", display: "block", letterSpacing: 2, mb: 1 }}>
            WHAT I USE
          </Typography>
          <Typography variant="h3" sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 2 }}>
            My Skills
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", textAlign: "center", mb: 6 }}>
            These are the key technologies I’ve developed proficiency in to build interactive and scalable applications.
          </Typography>
        </Box>

        {/* Skill Cards Layout */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {/* Frontend Card */}
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard
              title="Frontend Technologies"
              items={["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "MUI", "Redux"]}
            />
          </Grid>

          {/* Center Technology Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              sx={{
                background: "linear-gradient(to bottom right, #00D1FF20, #00D1FF10)",
                color: "white",
                textAlign: "center",
                padding: 4,
                borderRadius: "16px",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(10px)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#00D1FF" }}>
                  Technologies I Use
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {skillsList.map((skill, index) => (
                    <Grid item xs={4} sm={3} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1,
                          transition: "0.3s",
                          "&:hover img": {
                            transform: "scale(1.2)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            background: "#001C24",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0 0 8px #00D1FF",
                            transition: "0.3s",
                          }}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            style={{
                              width: "60%",
                              height: "60%",
                              objectFit: "contain",
                            }}
                          />
                        </Box>
                        <Typography variant="caption" sx={{ color: "#fff", fontSize: "0.7rem" }}>
                          {skill.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Backend Card */}
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard
              title="Backend Technologies"
              items={["JavaScript", "Node.js", "Express", "MongoDB", "TypeScript", "Git/GitHub", "Firebase", "PostgreSQL"]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
