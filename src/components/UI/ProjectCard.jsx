import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, description, image, onSeeMoreClick, technologies }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#00D1FF",
        color: "#00242C",
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          padding: "4px",
          border: "2px solid #00D1FF",
          borderRadius: "12px",
          backgroundClip: "content-box",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            mb: 1,
          }}
        >
          {description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <strong>Technologies:</strong> {technologies.join(", ")}
        </Typography>

        <Box mt={3} textAlign="left">
          <Button
            size="medium"
            variant="outlined"
            sx={{
            //   backgroundColor: "#00242C",
              color: "blue",
              border: "2px solid #FFFFFF",
              borderRadius: "8px",
              paddingX: "16px",
              textTransform: "capitalize",
              
            }}
            onClick={onSeeMoreClick}
          >
            See More...
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
