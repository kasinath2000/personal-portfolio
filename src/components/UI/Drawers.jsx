import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

/**
 * Reusable MUI Drawer
 *
 * @param {boolean} open - Drawer open state
 * @param {function} onClose - Function to close drawer
 * @param {string} anchor - Drawer position: 'left' | 'right' | 'top' | 'bottom'
 * @param {Array} items - Array of sections: each with a title and an items array
 */
const Drawers = ({ open, onClose, anchor = "right", items = [] }) => {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={onClose}
      >
        {items.map((section, idx) => (
          <React.Fragment key={idx}>
            <List>
              {section.items.map((item, index) => (
                <ListItem key={item.label || index} disablePadding>
                  <ListItemButton onClick={item.onClick}>
                    {item.icon && (
                      <ListItemIcon>{item.icon}</ListItemIcon>
                    )}
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {idx !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
    </Drawer>
  );
};

export default Drawers;
