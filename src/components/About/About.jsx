import React, { useState } from "react";
import styles from "./About.scss";
import AboutLinks from "../AboutLinks/AboutLinks";
import Headings from "../Headings/Headings";
import Link from "../Link/Link";
import Paragraphs from "../Paragraphs/Paragraphs";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTagline, setHoverTagline] = useState("");
  const [hoverSubTagline, setHoverSubTagline] = useState("");
  const [hoverLink, setHoverLink] = useState("");

  const [hoverText, setHoverText] = useState("");
  const data = [
    {
      name: "Brand Strategy",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.",
      link: "Our process",
    },

    {
      name: "Logo & Name",
      tagline: "Our name",
      subTagline: "is the best",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Logo",
    },

    {
      name: "Identity & Collateral",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Our process",
    },

    {
      name: "eCommerce",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Our process",
    },

    {
      name: "Web Development",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Our process",
    },

    {
      name: "Mobile Apps",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Our process",
    },

    {
      name: "Digital",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Our process",
    },

    {
      name: "Market Research",
      tagline: "What are",
      subTagline: "we capable of",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur voluptas quaerat amet, illum deserunt nisi. Repellendus cupiditate similique distinctio!",
      link: "Our process",
    },
  ];
  const handleMouseover = (description, tagline, subTagline, link) => {
    setIsHovering(true);
    setHoverText(description);
    setHoverTagline(tagline);
    setHoverSubTagline(subTagline);
    setHoverLink(link);
  };

  return (
    <div className="about">
      <div className="about__hoverText">
        {/* only return is state value is truthy */}
        {isHovering && (
          <div>
            <Headings title1={hoverTagline} title2={hoverSubTagline} />
            <Paragraphs text={hoverText} />
            <Link text={hoverLink} />
          </div>
        )}
      </div>

      <div className="about__sections">
        <div className="about__section1">
          <h2 className="about__titles">BRAND</h2>
          <AboutLinks
            name={data[0].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[0].description,
                data[0].tagline,
                data[0].subTagline,
                data[0].link
              )
            }
          />

          <AboutLinks
            name={data[1].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[1].description,
                data[1].tagline,
                data[1].subTagline,
                data[1].link
              )
            }
          />
          <AboutLinks
            name={data[2].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[2].description,
                data[2].tagline,
                data[2].subTagline,
                data[2].link
              )
            }
          />
        </div>

        <div className="about__section2">
          <h2 className="about__titles">DEVELOPMENT</h2>
          <AboutLinks
            name={data[3].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[3].description,
                data[3].tagline,
                data[3].subTagline,
                data[3].link
              )
            }
          />
          <AboutLinks
            name={data[4].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[4].description,
                data[4].tagline,
                data[4].subTagline,
                data[4].link
              )
            }
          />
          <AboutLinks
            name={data[5].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[5].description,
                data[5].tagline,
                data[5].subTagline,
                data[5].link
              )
            }
          />
        </div>

        <div className="about__section3">
          <h2 className="about__titles">MARKETING</h2>
          <AboutLinks
            name={data[6].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[6].description,
                data[6].tagline,
                data[6].subTagline,
                data[6].link
              )
            }
          />
          <AboutLinks
            name={data[7].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                data[7].description,
                data[7].tagline,
                data[7].subTagline,
                data[7].link
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
