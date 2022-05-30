import React, { useState, useEffect } from "react";
import styles from "./Work.scss";
import Headings from "../Headings/Headings";
import { dataProjects } from "../../dataProjects.js";
import ProjectStageBtn from "../ProjectStageBtn/ProjectStageBtn";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = () => {
  const [filterStage, setFilterStage] = useState("All");
  const [data, setData] = useState(dataProjects);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isBranding, setIsBranding] = useState("");
  const [isWebDesign, setIsWebDesign] = useState("");
  const [isDigitalMarketing, setIsDigitalMarketing] = useState("");
  const [isAll, setIsAll] = useState("");

  const handleFilterOfCategories = (e) => {
    setFilterStage(e.target.value);
  };

  //   change class to active,
  //   do I neeed state for all

  useEffect(() => {
    if (filterStage === "Branding") {
      setFilteredProjects(data.filter((item) => item.category === "Branding"));
      setIsBranding("true");
    } else if (filterStage === "Web Design") {
      setFilteredProjects(
        data.filter((item) => item.category === "Web Design")
      );
      setIsWebDesign("true");
    } else if (filterStage === "Digital Marketing") {
      setFilteredProjects(
        data.filter((item) => item.category === "Digital Marketing")
      );
      setIsDigitalMarketing("true");
    } else if (filterStage === "All") {
      setFilteredProjects(data);
      setIsAll("true");
    }
  }, [filterStage]);

  return (
    <div className="projects">
      <secion className="projects__container">
        <Headings title1="Some of our" title2="recent projects" />
        <div className="projects__slider">
          <ProjectStageBtn
            text="All"
            value="All"
            click={handleFilterOfCategories}
            isAll={isAll}
          />
          <ProjectStageBtn
            text="Branding"
            value="Branding"
            click={handleFilterOfCategories}
            isBranding={isBranding}
          />
          <ProjectStageBtn
            text="Web Design"
            value="Web Design"
            click={handleFilterOfCategories}
            isWebDesign={isWebDesign}
          />

          <ProjectStageBtn
            text="Digital Marketing"
            value="Digital Marketing"
            click={handleFilterOfCategories}
            isDigitalMarketing={isDigitalMarketing}
          />
        </div>

        <ProjectCard filteredProjects={filteredProjects} />
      </secion>
    </div>
  );
};

export default Work;
