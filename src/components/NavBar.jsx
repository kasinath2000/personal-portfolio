


// import React, { useEffect, useState, useRef } from "react";
// import { Box } from "@mui/material";
// import { Link as ScrollLink } from "react-scroll";
// import navItemsData from "../data/navItems.json";
// import NavLogo from "../assets/NavLogo.svg";

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     // Build references for each section
//     navItemsData.forEach((item) => {
//       const sectionId = item.link.substring(1);
//       sectionRefs.current[sectionId] = document.getElementById(sectionId);
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(`#${entry.target.id}`);
//           }
//         });
//       },
//       {
//         root: null, // Use viewport as root
//         threshold: 0.5, // Trigger when 50% of the element is visible
//         rootMargin: "-80px 0px 0px 0px", // Offset to account for navbar height
//       }
//     );

//     Object.values(sectionRefs.current).forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         backgroundColor: "rgba(0, 209, 255, 0.4)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//         boxShadow: "0 2px 10px rgba(0, 209, 255, 0.2)",
//         padding: "10px 5rem",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       {/* Logo */}
//       <Box component="a" href="#home">
//         <img src={NavLogo} alt="Logo" style={{ height: "40px" }} />
//       </Box>

//       {/* Navbar Links */}
//       <Box sx={{ display: "flex", gap: 4 }}>
//         {navItemsData.map((item) => (
//           <ScrollLink
//             key={item.id}
//             to={item.link.substring(1)}
//             smooth={true}
//             duration={500}
//             spy={true}
//             offset={-80}
//             style={{
//               color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
//               textDecoration: "none",
//               fontWeight: "bold",
//               fontSize: "16px",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//           >
//             {item.label}
//           </ScrollLink>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;





// import React, { useEffect, useState, useRef } from "react";
// import { Box, IconButton, Drawer } from "@mui/material";
// import { Link as ScrollLink } from "react-scroll";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useTheme, useMediaQuery } from "@mui/material";
// import navItemsData from "../data/navItems.json";
// import NavLogo from "../assets/NavLogo.svg";

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const sectionRefs = useRef({});
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detects screen width below medium (960px)

//   useEffect(() => {
//     navItemsData.forEach((item) => {
//       const sectionId = item.link.substring(1);
//       sectionRefs.current[sectionId] = document.getElementById(sectionId);
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(`#${entry.target.id}`);
//           }
//         });
//       },
//       {
//         root: null,
//         threshold: 0.5,
//         rootMargin: "-80px 0px 0px 0px",
//       }
//     );

//     Object.values(sectionRefs.current).forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleDrawer = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 1000,
//         backgroundColor: "rgba(0, 209, 255, 0.4)",
//         backdropFilter: "blur(10px)",
//         boxShadow: "0 2px 10px rgba(0, 209, 255, 0.2)",
//         padding: "10px 5rem",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         transition: "0.3s",
//         [theme.breakpoints.down("md")]: {
//           padding: "10px 2rem",
//         },
//       }}
//     >
//       {/* Logo */}
//       <Box component="a" href="#home">
//         <img src={NavLogo} alt="Logo" style={{ height: "40px" }} />
//       </Box>

//       {/* Desktop Navbar */}
//       {!isMobile && (
//         <Box sx={{ display: "flex", gap: 4 }}>
//           {navItemsData.map((item) => (
//             <ScrollLink
//               key={item.id}
//               to={item.link.substring(1)}
//               smooth={true}
//               duration={500}
//               spy={true}
//               offset={-80}
//               style={{
//                 color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//                 fontSize: "16px",
//                 cursor: "pointer",
//                 transition: "0.3s",
//               }}
//             >
//               {item.label}
//             </ScrollLink>
//           ))}
//         </Box>
//       )}

//       {/* Mobile Menu Button */}
//       {isMobile && (
//         <IconButton onClick={toggleDrawer} sx={{ color: "#F8F5E9" }}>
//           <MenuIcon fontSize="large" />
//         </IconButton>
//       )}

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
//         <Box
//           sx={{
//             width: 250,
//             height: "100%",
//             backgroundColor: "#0d1b2a",
//             color: "#F8F5E9",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             paddingTop: "20px",
//           }}
//         >
//           <IconButton onClick={toggleDrawer} sx={{ color: "#F8F5E9", alignSelf: "flex-end", marginRight: 2 }}>
//             <CloseIcon fontSize="large" />
//           </IconButton>
//           {navItemsData.map((item) => (
//             <ScrollLink
//               key={item.id}
//               to={item.link.substring(1)}
//               smooth={true}
//               duration={500}
//               spy={true}
//               offset={-80}
//               onClick={toggleDrawer} // Close drawer when a link is clicked
//               style={{
//                 color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//                 fontSize: "18px",
//                 margin: "10px 0",
//                 cursor: "pointer",
//               }}
//             >
//               {item.label}
//             </ScrollLink>
//           ))}
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default Navbar;












import React, { useEffect, useState, useRef } from "react";
import { Box, IconButton, Drawer } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
import navItemsData from "../data/navItems.json";
import NavLogo from "../assets/NavLogo.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionRefs = useRef({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    navItemsData.forEach((item) => {
      const sectionId = item.link.substring(1);
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 209, 255, 0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0, 209, 255, 0.2)",
        padding: "10px 5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.3s",
        [theme.breakpoints.down("md")]: {
          padding: "10px 2rem",
        },
      }}
    >
      {/* Logo */}
      <Box component="a" href="#home">
        <img src={NavLogo} alt="Logo" style={{ height: "40px" }} />
      </Box>

      {/* Desktop Navbar */}
      {!isMobile && (
        <Box sx={{ display: "flex", gap: 4 }}>
          {navItemsData.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.link.substring(1)}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              style={{
                color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </Box>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton onClick={toggleDrawer} sx={{ color: "#F8F5E9" }}>
          <MenuIcon fontSize="large" />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "220px", // Set drawer width
            height: "90vh", // Set drawer height to 90% of viewport
            marginTop: "10px", // Add top margin for spacing
            backgroundColor: "#0d1b2a", // Dark theme background
            color: "#F8F5E9",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 209, 255, 0.2)",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          {/* Close Button */}
          <IconButton onClick={toggleDrawer} sx={{ color: "#F8F5E9", alignSelf: "flex-end", marginRight: 2 }}>
            <CloseIcon fontSize="large" />
          </IconButton>

          {/* Navigation Links */}
          {navItemsData.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.link.substring(1)}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={toggleDrawer}
              style={{
                color: activeSection === item.link ? "#FFD700" : "#F8F5E9",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
                margin: "15px 0",
                cursor: "pointer",
              }}
            >
              {item.label}
            </ScrollLink>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
