import React from "react";
import styles from "./ProjectStageBtn.scss";

const ProjectStageBtn = (props) => {
  const { text, value, handleTab, activateTab } = props;

  return (
    <div className={`project__btn__container ${activateTab}`}>
      <button onClick={handleTab} value={value} className="project__btn">
        {text}
      </button>
    </div>
  );
};

export default ProjectStageBtn;
