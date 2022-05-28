import React, { useState } from "react";
import styles from "./About.scss";
import AboutLinks from "../AboutLinks/AboutLinks";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const data = [
    {
      title: "Brand Strategy",
      description:
        "By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.",
    },

    {
      title: "Logo & Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },

    {
      title: "Identity & Collateral",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },

    {
      title: "eCommerce",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },

    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },

    {
      title: "Mobile Apps",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },

    {
      title: "Digital",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },

    {
      title: "Market Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
    },
  ];
  const handleMouseover = (text) => {
    setIsHovering(true);
    setHoverText(text);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverText("");
  };

  return (
    <div className="about">
      <div className="about__hoverText">
        {/* only return is state value is truthy */}
        {isHovering && <p>{hoverText}</p>}
      </div>

      <div className="about__links">
        <div className="about__links__section1">
          <h2 className="about__titles">BRAND</h2>
          <AboutLinks
            title={data[0].title}
            mouseover={(event) => handleMouseover(data[0].description)}
            mouseout={handleMouseOut}
          />

          <AboutLinks
            title={data[1].title}
            mouseover={(event) => handleMouseover(data[1].description)}
            mouseout={handleMouseOut}
          />
          <AboutLinks
            title={data[2].title}
            mouseover={(event) => handleMouseover(data[2].description)}
            mouseout={handleMouseOut}
          />
        </div>

        <div className="about__links__section2">
          <h2 className="about__titles">DEVELOPMENT</h2>
          <AboutLinks title={data[3].title} />
          <AboutLinks title={data[4].title} />
          <AboutLinks title={data[5].title} />
        </div>

        <div className="about__links__section3">
          <h2 className="about__titles">MARKETING</h2>
          <AboutLinks title={data[6].title} />
          <AboutLinks title={data[7].title} />
        </div>
      </div>
    </div>
  );
};

export default About;
