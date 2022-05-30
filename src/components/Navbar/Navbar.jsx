import React, { useState, useEffect } from "react";
import Hamburger from "../Hamburger";
import styles from "./Navbar.scss";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [didUserScroll, setDidUserScroll] = useState(true);
  const [scrollClassName, setScrollClassName] = useState("");
  const [lastScroll, setLastScroll] = useState(0);

  const navLinks = [
    { name: "Services", href: "Services" },
    { name: "Work", href: "Work" },
    { name: "About", href: "About" },
    { name: "Blog", href: "Blog" },
    { name: "Contact", href: "Contact" },
  ];

  // create sticky scroll on desktop NAV
  const checkForScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScroll) {
        setDidUserScroll(false);
        setScrollClassName("hidden");
      } else {
        setDidUserScroll(true);
        setScrollClassName("");
      }
      // remember current page location
      setLastScroll(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkForScroll);
      return () => {
        window.removeEventListener("scroll", checkForScroll);
      };
    }
  }, [lastScroll]);

  let scrollNav = `navbar__desktop__list ${scrollClassName}`;

  return (
    <>
      <nav className="navbar">
        <div className="navbar__desktop">
          <ul className={scrollNav}>
            {navLinks.map((link) => (
              <Link
                activeClass="active"
                to={link.href}
                smooth={true}
                spy={true}
                duration={500}
              >
                <li className="desktop__link">{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <img src={logo} alt="company logo" className="navbar__logo"></img>
        <Hamburger navLinks={navLinks} />
      </nav>
    </>
  );
};

export default Navbar;
