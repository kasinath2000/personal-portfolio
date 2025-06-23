import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const SmallCards = ({ title, description, image, onSeeMoreClick, technologies }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#00D1FF",
        color: "#00242C",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.03)" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1,
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 120,
          width: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      {/* Content */}
      <CardContent sx={{ p: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#131D4F",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "0.85rem",
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

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", fontSize: "0.75rem" }}
        >
          <strong>Tech:</strong> {technologies.join(", ")}
        </Typography>

        <Box mt={1}>
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: "#00242C",
              borderColor: "#00242C",
              fontSize: "0.75rem",
              px: 2,
              py: 0.3,
              textTransform: "capitalize",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "#00242C",
                color: "#00D1FF",
              },
            }}
            onClick={onSeeMoreClick}
          >
            See More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SmallCards;
