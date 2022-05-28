import React from "react";
import Headings from "../Headings/Headings";
import styles from "./AboutLinks.scss";

const AboutLinks = (props) => {
  const { name, title1, title2, mouseover, mouseout } = props;
  return (
    <div className="about__linksContainer">
      <h3
        onMouseOver={mouseover}
        onMouseOut={mouseout}
        className="about__links"
      >
        {name}
      </h3>
    </div>
  );
};

export default AboutLinks;
