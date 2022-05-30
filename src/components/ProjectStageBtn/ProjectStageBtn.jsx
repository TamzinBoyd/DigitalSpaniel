import React from "react";
import styles from "./ProjectStageBtn.scss";

const ProjectStageBtn = (props) => {
  const { text, value, click } = props;

  return (
    <div>
      <button onClick={click} value={value} className="project__btn">
        {text}
      </button>
    </div>
  );
};

export default ProjectStageBtn;
