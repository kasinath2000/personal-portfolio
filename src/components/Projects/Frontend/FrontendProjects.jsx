import React from "react";
import { Grid } from "@mui/material";
import SmallCards from "../SmallCards";
import defultImage from "../../images/defult.png";

const dummyFrontendProjects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and MUI.",
    image: defultImage,
    technologies: ["React", "MUI", "Framer Motion"],
  },
  {
    title: "Landing Page",
    description: "A responsive landing page for a product launch.",
    image: defultImage,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-commerce UI",
    description: "Frontend design for an e-commerce platform.",
    image: defultImage,
    technologies: ["React", "Redux", "Tailwind CSS"],
  },
];

const FrontendProjects = ({ projects = [], onSeeMoreClick }) => {
  const filtered =
    projects.length > 0
      ? projects.filter((p) =>
          p.technologies?.toLowerCase().includes("frontend")
        )
      : [];

  const displayProjects =
    filtered.length > 0
      ? filtered.map((p) => ({
          ...p,
          technologies: p.technologies?.split(", ") || [],
        }))
      : dummyFrontendProjects;

  return (
    <Grid container spacing={2}>
      {displayProjects.map((project, idx) => (
        <Grid item xs={12} sm={6} key={idx}>
          <SmallCards
            title={project.title}
            description={project.description}
            image={project.image || defultImage}
            technologies={project.technologies}
            onSeeMoreClick={() =>
              onSeeMoreClick && onSeeMoreClick(project)
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FrontendProjects;
