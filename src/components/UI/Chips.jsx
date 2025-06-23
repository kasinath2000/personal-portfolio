// CategoryChip.jsx
import React from "react";
import { Chip } from "@mui/material";

const Chips = ({ label, onClick }) => {
  return (
    <Chip
      label={label}
      onClick={() => onClick(label)}
      sx={{
        m: 1,
        px: 2,
        py: 0.5,
        backgroundColor: "#004e5f",
        color: "#00D1FF",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#00D1FF",
          color: "black",
        },
      }}
    />
  );
};

export default Chips;
