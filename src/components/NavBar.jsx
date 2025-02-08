// import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import navItemsData from "../data/navItems.json"; 
// import logo from "../assets/logo.png";
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navItems, setNavItems] = useState([]);

//   useEffect(() => {
//     setNavItems(navItemsData);
//   }, []);

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         bgcolor: "rgba(0, 209, 255, 0.2)",  // Transparent cyan background
//         backdropFilter: "blur(10px)",  // Glassmorphism effect
//         WebkitBackdropFilter: "blur(10px)",  // Ensures compatibility
//         boxShadow: "0 4px 10px rgba(0, 209, 255, 0.4)", // Soft glow effect
//       }}
//     >
//       <Toolbar>
//         {/* Logo Image */}
//         <Box component="a" href="#" sx={{ flexGrow: 1 }}>
//           <img src={logo} alt="Logo" style={{ height: "40px" }} />
//         </Box>

//         {/* Mobile Menu Button */}
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           onClick={() => setMenuOpen(true)}
//           sx={{ display: { xs: "block", md: "none" }, color: "#00D1FF" }} // Cyan icon color
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Desktop Navbar Links */}
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//           {navItems.map((item) => (
//             <Box
//               key={item.id}
//               component="a"
//               href={item.link}
//               sx={{
//                 color: "#00D1FF",  // Cyan text color
//                 textDecoration: "none",
//                 fontWeight: "bold",
//                 "&:hover": {
//                   color: "white",  // White hover effect
//                   transition: "0.3s",
//                 },
//               }}
//             >
//               {item.label}
//             </Box>
//           ))}
//         </Box>

//         {/* Mobile Drawer */}
//         <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
//           <List sx={{ width: 250, bgcolor: "#001F2E" }}> {/* Dark blue background for contrast */}
//             {navItems.map((item) => (
//               <ListItem button key={item.id} onClick={() => setMenuOpen(false)}>
//                 <ListItemText
//                   primary={item.label}
//                   sx={{
//                     color: "#00D1FF",
//                     textAlign: "center",
//                     "&:hover": { color: "white" },
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import navItemsData from "../data/navItems.json";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    setNavItems(navItemsData);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 209, 255, 0.2)", // Transparent cyan background
        backdropFilter: "blur(10px)", // Glassmorphism effect
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 10px rgba(0, 209, 255, 0.4)", // Soft glow effect
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Box component="a" href="#">
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </Box>

      {/* Navbar Links */}
      <Box sx={{ display: "flex", gap: 4 }}>
        {navItems.map((item) => (
          <Box
            key={item.id}
            component="a"
            href={item.link}
            sx={{
              color: "#00D1FF",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              "&:hover": {
                color: "white",
                transition: "0.3s",
              },
            }}
          >
            {item.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
