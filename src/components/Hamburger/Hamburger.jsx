import React, { useState } from "react";
import styles from "./Hamburger.scss";
import { Link } from "react-scroll";

const Hamburger = (props) => {
  const { navLinks } = props;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // example to set link ref
  // const setStyle2 = isNavbarOpen ? styles.active : "";

  // to get animation add classlist and apply animation
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const showMobileList = (
    <ul className="navbar__mobile">
      {navLinks.map((link) => (
        <Link
          activeClass="active"
          to={link.href}
          smooth={true}
          spy={true}
          duration={500}
        >
          <li className="mobile__link">{link.href}</li>
        </Link>
      ))}
    </ul>
  );

  return (
    <>
      <div>
        <div className="navbar__hamburger">
          <button
            className="navbar__toggle"
            onClick={handleNavbarToggle}
          ></button>
          <label htmlFor="navbar__toggle" className="navbar__toggleLabel">
            <span className="navbar__toggleLabel"></span>
          </label>
        </div>
        {isNavbarOpen ? showMobileList : ""}
      </div>
    </>
  );
};

export default Hamburger;
