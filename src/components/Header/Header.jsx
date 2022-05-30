import React from "react";
import spaniel from "../../images/spanielGradient.png";
import styles from "./Header.scss";
import Link from "../Link/Link";
import Headings from "../Headings/Headings";
import Paragraphs from "../Paragraphs/Paragraphs";

const Header = () => {
  const handleClick = () => {
    console.log("click worked");
  };

  const paragraphText = `We create brand experiences which are memorable and distinct. Our
  experienced team create and develop brands with personality and
  resonance.`;

  return (
    <header className="header">
      <div className="header__text">
        <h5 className="header__brand">BRAND, DEV, ECOM, MARKETING</h5>
        <Headings title1={"We unleash"} />
        <Headings title2={"business potential"} />
        <Paragraphs text={paragraphText} />
        <Link text="Let's talk" click={handleClick} />
      </div>
      <div className="header__img__container">
        <img src={spaniel} alt="image of a dog" className="header__img"></img>
      </div>
    </header>
  );
};

export default Header;
