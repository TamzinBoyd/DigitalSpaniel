import React, { useState, useEffect } from "react";
import styles from "./Work.scss";
import Headings from "../Headings/Headings";
import { dataProjects } from "../../dataProjects.js";
import ProjectStageBtn from "../ProjectStageBtn/ProjectStageBtn";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = () => {
  const [filterStage, setFilterStage] = useState("");
  const [data, setData] = useState(dataProjects);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleFilterOfCategories = (e) => {
    setFilterStage(e.target.value);
  };

  //   if filterStage  == branding then filter data
  useEffect(() => {
    if (filterStage === "Branding") {
      setFilteredProjects(data.filter((item) => item.category === "Branding"));
    } else if (filterStage === "Web Design") {
      setFilteredProjects(
        data.filter((item) => item.category === "Web Design")
      );
    } else if (filterStage === "Digital Marketing") {
      setFilteredProjects(
        data.filter((item) => item.category === "Digital Marketing")
      );
    } else if (filterStage === "All") {
      setFilteredProjects(data);
    }
  }, [filterStage]);

  return (
    <div>
      <Headings title1="Some of our" title2="recent projects" />
      <div className="projects__slider">
        <ProjectStageBtn
          text="All"
          value="All"
          click={handleFilterOfCategories}
        />
        <ProjectStageBtn
          text="Branding"
          value="Branding"
          click={handleFilterOfCategories}
        />
        <ProjectStageBtn
          text="Web Design"
          value="Web Design"
          click={handleFilterOfCategories}
        />

        <ProjectStageBtn
          text="Digital Marketing"
          value="Digital Marketing"
          click={handleFilterOfCategories}
        />
      </div>

      <ProjectCard filteredProjects={filteredProjects} />
    </div>
  );
};

export default Work;

// slider, manage with state - buttons and on slick. state determines class name which adds the pink

// on click also applies filter and generates jsx based on this

// so All generates all

// Branding filters on object and generates jsx according to this - just generates images, grid layout

// store data in object, each one has category, title. text, link, image

// then add hover state which updates state and useEffect to generate the html and apply classlist

// slider with state to load second batch of data
