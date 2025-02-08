import * as React from "react";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Deawers from "../UI/Drawers";

const Drawers = ({ navItems, iconColor = "#00D1FF", drawerBg = "#001F2E", textColor = "#fff" }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {/* Menu Button to Open Drawer */}
      <IconButton onClick={toggleDrawer(true)} sx={{ color: iconColor }}>
        <MenuIcon />
      </IconButton>

      {/* Drawer Component */}
      {/* Mobile Drawer */}
      {/* <ReusableDrawer navItems={navItemsData} iconColor="#00D1FF" drawerBg="#001F2E" textColor="#fff" /> */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: drawerBg,
            height: "100vh",
            color: textColor,
            paddingTop: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton href={item.link}>
                  <ListItemIcon sx={{ color: iconColor }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.label} sx={{ color: textColor }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Drawers;
