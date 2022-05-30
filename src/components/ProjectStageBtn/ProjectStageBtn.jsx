import React from "react";
import styles from "./ProjectStageBtn.scss";

const ProjectStageBtn = (props) => {
  const {
    text,
    value,
    click,
    isAll,
    isBranding,
    isWebDesign,
    isDigitalMarketing,
  } = props;

  return (
    <div className="project__btn__container">
      <button onClick={click} value={value} className="project__btn">
        {text}
      </button>
    </div>
  );
};

export default ProjectStageBtn;
