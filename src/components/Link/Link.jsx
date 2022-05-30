import React from "react";
import styles from "./Link.scss";

const Link = (props) => {
  const { text, click } = props;
  return (
    <div>
      <a
        href="https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/"
        className="link"
      >
        <button onClick={click} className="button">
          {text}
        </button>
      </a>
    </div>
  );
};

export default Link;
