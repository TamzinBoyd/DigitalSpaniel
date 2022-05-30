import React, { useState, useEffect } from "react";
import styles from "./Work.scss";
import Headings from "../Headings/Headings";
import { dataProjects } from "../../dataProjects.js";
import ProjectStageBtn from "../ProjectStageBtn/ProjectStageBtn";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = () => {
  const [data, setData] = useState(dataProjects);
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [active, setActive] = useState(false);

  const [activeTab, setActiveTab] = useState({
    all: true,
    branding: false,
    webDesign: false,
    digMarketing: false,
  });

  const handleAllTab = () => {
    setFilteredProjects(data);
    setActiveTab({
      all: true,
      branding: false,
      webDesign: false,
      digMarketing: false,
    });
  };

  const handleBrandingTab = () => {
    setFilteredProjects(data.filter((item) => item.category === "Branding"));
    setActiveTab({
      all: false,
      branding: true,
      webDesign: false,
      digMarketing: false,
    });
  };

  const handleWebDesignTab = () => {
    setFilteredProjects(data.filter((item) => item.category === "Web Design"));
    setActiveTab({
      all: false,
      branding: false,
      webDesign: true,
      digMarketing: false,
    });
  };

  const handleDigMarketingTab = () => {
    setFilteredProjects(
      data.filter((item) => item.category === "Digital Marketing")
    );
    setActiveTab({
      all: false,
      branding: false,
      webDesign: false,
      digMarketing: true,
    });
  };

  let activateBranding = activeTab.branding && `active`;
  let activateAll = activeTab.all && `active`;
  let activateWebDesign = activeTab.webDesign && `active`;
  let activateDigMarketing = activeTab.digMarketing && `active`;

  return (
    <section className="projects" name="Work">
      <div className="projects__container">
        <Headings title1="Some of our" title2="recent projects" />
        <div className="projects__slider">
          <ProjectStageBtn
            text="All"
            value="All"
            handleTab={handleAllTab}
            activateTab={activateAll}
          />
          <ProjectStageBtn
            text="Branding"
            value="Branding"
            handleTab={handleBrandingTab}
            activateTab={activateBranding}
          />
          <ProjectStageBtn
            text="Web Design"
            value="Web Design"
            handleTab={handleWebDesignTab}
            activateTab={activateWebDesign}
          />

          <ProjectStageBtn
            text="Digital Marketing"
            value="Digital Marketing"
            handleTab={handleDigMarketingTab}
            activateTab={activateDigMarketing}
          />
        </div>

        <ProjectCard filteredProjects={filteredProjects} />
      </div>
    </section>
  );
};

export default Work;
