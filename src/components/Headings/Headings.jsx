import React from "react";
import styles from "./Headings.scss";

const Headings = (props) => {
  const { title1, title2 } = props;
  return (
    <div>
      <h1 className="mainHeading1">{title1}</h1>
      <h2 className="mainHeading2">{title2}</h2>
    </div>
  );
};

export default Headings;
