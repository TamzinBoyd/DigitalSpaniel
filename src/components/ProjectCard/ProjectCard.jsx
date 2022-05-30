import React from "react";
import { dataProjects } from "../../dataProjects.js";
import wellies01 from "../../assets/wellies01.png";

const ProjectCard = (props) => {
  const { filteredProjects } = props;

  const test2 = `../../assets/${wellies01}`;
  // need to map over data,
  const test = filteredProjects.map((project) => {
    return (
      <div>
        {/* below not working */}
        {/* <img src={`../../assets/${project.image}`}></img> */}
      </div>
    );
  });

  return (
    <>
      <div className="project__card">{test}</div>

      <img src={test2}></img>
    </>
  );
};

export default ProjectCard;
