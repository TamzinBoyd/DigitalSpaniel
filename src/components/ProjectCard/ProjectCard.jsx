import React from "react";
import { dataProjects } from "../../dataProjects.js";
import wellies01 from "../../assets/wellies01.png";

const ProjectCard = (props) => {
  const { filteredProjects } = props;

  const projectCard = filteredProjects.map((project) => {
    return <img src={project.image} className="project__card__image"></img>;
  });

  return (
    <>
      <div className="project__card">{projectCard}</div>
    </>
  );
};

export default ProjectCard;
