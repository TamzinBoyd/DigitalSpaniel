import React from "react";
import styles from "./Link.scss";

const Link = (props) => {
  const { text, click } = props;
  return (
    <div>
      <a href="#" className="link">
        <button onClick={click} className="button">
          {text}
        </button>
      </a>
    </div>
  );
};

export default Link;
