import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

function Drawers({ children, buttonLabel }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <>
      <Button onClick={() => toggleDrawer(true)}>{buttonLabel}</Button>
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <List>
          {children}
        </List>
      </Drawer>
    </>
  );
}

export default Drawers;
