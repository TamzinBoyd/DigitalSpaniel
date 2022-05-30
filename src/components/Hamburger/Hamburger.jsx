import React, { useState } from "react";
import styles from "./Hamburger.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = (props) => {
  const { navLinks } = props;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const showMobileList = (
    <ul className="navbar__mobileList">
      {navLinks.map((link) => (
        <Link
          activeClass="active"
          to={link.href}
          smooth={true}
          spy={true}
          duration={500}
        >
          <li className="navbar__mobile__link">{link.href}</li>
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
          <FontAwesomeIcon
            icon={faBars}
            className="navbar__hamburgerIcon"
          ></FontAwesomeIcon>
        </div>
        {isNavbarOpen ? showMobileList : ""}
      </div>
    </>
  );
};

export default Hamburger;
