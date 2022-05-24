import React from "react";

const Link = (props) => {
  const { text, click } = props;
  return (
    <div>
      <button onClick={click}>{text}</button>
    </div>
  );
};

export default Link;
