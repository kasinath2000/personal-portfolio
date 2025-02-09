import React from "react";
import { Grid, Skeleton } from "@mui/material";

// SkeletonLoading component to show placeholders
const SkeletonLoading = ({ count = 6 }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {/* Render Skeleton placeholders based on count */}
      {[...Array(count)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Skeleton variant="rectangular" width="100%" height={250} />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonLoading;
