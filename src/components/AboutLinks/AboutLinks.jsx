import React from "react";
import styles from "./AboutLinks.scss";

const AboutLinks = (props) => {
  const { title, data, mouseover, mouseout } = props;
  return (
    <div className="aboutLinks">
      <h3 onMouseOver={mouseover} onMouseOut={mouseout}>
        {title}
      </h3>
    </div>
  );
};

export default AboutLinks;
