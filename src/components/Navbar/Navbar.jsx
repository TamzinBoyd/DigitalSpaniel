import React, { useState } from "react";

import logo from "../../assets/logo.png";

const Test = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // example to set
  // const setStyle2 = isNavbarOpen ? styles.active : "";

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const showMobileList = (
    <ul>
      <li>mobile 1</li>
      <li>mobile 1</li>
      <li>mobile 1</li>
    </ul>
  );

  return (
    <div className="navbar">
      <div class="navbar__logo">
        <img src={logo} alt="company logo" width="200"></img>
      </div>
      <div className="navbar__desktop">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>

      <div className="navbar__mobile">
        <div className="navbar__hamburger">
          <button
            className="navbar__toggle"
            onClick={handleNavbarToggle}
          ></button>
          <label for="navbar__toggle" className="navbar__toggleLabel">
            <span className="navbar__toggleLabel"></span>
          </label>
        </div>
        <div className="navbar__mobileList">
          {isNavbarOpen ? showMobileList : ""}
        </div>
      </div>
    </div>
  );
};

export default Test;
