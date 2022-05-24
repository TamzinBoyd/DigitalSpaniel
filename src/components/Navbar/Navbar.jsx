import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt="company logo" width="200"></img>
      </div>
      <div className={styles.navbar__desktopList}>
        <h3>Services</h3>
        <h3>Work</h3>
        <h3>About</h3>
        <h3>Blog</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
};

export default Navbar;
