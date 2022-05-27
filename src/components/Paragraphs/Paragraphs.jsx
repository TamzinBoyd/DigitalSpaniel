import React from "react";
import styles from "./Paragraphs.scss";

const Paragraphs = (props) => {
  const { text } = props;
  return (
    <div>
      <p className="paragraphText">{text}</p>
    </div>
  );
};

export default Paragraphs;
