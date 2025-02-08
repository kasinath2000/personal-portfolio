import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const SkillCard = ({ title, items }) => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 209, 255, 0.2)", // Semi-transparent blue
        color: "white",
        textAlign: "center",
        padding: 3,
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)", // Glassmorphic effect
        transition: "none", // Remove hover effect
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>
        {items.map((item, index) => (
          <Typography key={index} variant="body2" sx={{ fontSize: "14px", mb: 1 }}>
            {item}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillCard;