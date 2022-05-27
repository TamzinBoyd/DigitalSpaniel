import React from "react";
import styles from "./Link.scss";

const Link = (props) => {
  const { text, click } = props;
  return (
    <div>
      <button onClick={click} className="button">
        {text}
      </button>
    </div>
  );
};

export default Link;
