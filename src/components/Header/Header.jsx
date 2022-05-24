import React from "react";
import spaniel from "../../assets/spanielGradient.png";
import styles from "./Header.module.scss";
import Link from "../Link/Link";

const Header = () => {
  const handleClick = () => {
    console.log("click worked");
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__text}>
        <h5>BRAND, DEV, ECOM, MARKETING</h5>
        <h1>We unleash</h1>
        <h2>business potential</h2>
        <p>
          We create brand experiences which are memorable and distinct. Our
          experienced team create and develop brands with personality and
          resonance.
        </p>
        <Link text="Let's talk" click={handleClick} />
      </div>
      <img src={spaniel} alt="image of a dog"></img>
    </div>
  );
};

export default Header;
