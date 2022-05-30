import React from "react";
import Headings from "../Headings/Headings";
import styles from "./AboutLinks.scss";

const AboutLinks = (props) => {
  const { name, mouseover } = props;
  return (
    <div className="about__linksContainer">
      <h3 onMouseOver={mouseover} className="about__links">
        {name}
      </h3>
    </div>
  );
};

export default AboutLinks;
