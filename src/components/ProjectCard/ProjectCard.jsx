import React, { useState } from "react";
import styles from "./ProjectCard.scss";
import { dataProjects } from "../../dataProjects.js";

// add grey out class on hover
// add map function to generate hover jsx instead
// only got 1 square working at the minute
// add mouseout function

const ProjectCard = (props) => {
  const { filteredProjects } = props;

  const [isHovering, setIsHovering] = useState(false);
  const [hoverTagline, setHoverTagline] = useState("");
  const [hoverDescription, setHoverDescription] = useState("");

  const handleMouseover = (tagline, description) => {
    setIsHovering(true);
    setHoverTagline(tagline);
    setHoverDescription(description);
  };

  const projectCard = filteredProjects.map((project) => {
    return (
      <>
        <a href="#">
          <img
            src={project.image}
            className="projects__card__image"
            onMouseOver={(tagline, description) =>
              handleMouseover(
                dataProjects[0].tagline,
                dataProjects[0].description
              )
            }
            // onMouseOut={setIsHovering(false)}
          ></img>{" "}
        </a>
      </>
    );
  });

  const generateHoverJSX = () => {
    return (
      <div className="projects__card__hover">
        <h4 className="projects__card__tagline">{hoverTagline}</h4>
        <p className="projects__card__description">{hoverDescription}</p>
        <a href="#" className="projects__card__link">
          Full project
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="projects__card">
        {projectCard}
        {isHovering && generateHoverJSX()}
      </div>
    </>
  );
};

export default ProjectCard;
