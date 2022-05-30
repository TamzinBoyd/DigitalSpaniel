import React, { useState } from "react";
import styles from "./About.scss";
import { dataAbout } from "../../dataAbout.js";
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

  const handleMouseover = (description, tagline, subTagline, link) => {
    setIsHovering(true);
    setHoverText(description);
    setHoverTagline(tagline);
    setHoverSubTagline(subTagline);
    setHoverLink(link);
  };

  return (
    <section className="about" name="Services">
      <div className="about__hoverText">
        {isHovering && (
          <div>
            <Headings title1={hoverTagline} title2={hoverSubTagline} />
            <Paragraphs text={hoverText} />
            <Link text={hoverLink} />
          </div>
        )}
      </div>

      <section className="about__sections">
        <div className="about__section1">
          <h2 className="about__titles">BRAND</h2>
          <AboutLinks
            name={dataAbout[0].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[0].description,
                dataAbout[0].tagline,
                dataAbout[0].subTagline,
                dataAbout[0].link
              )
            }
          />

          <AboutLinks
            name={dataAbout[1].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[1].description,
                dataAbout[1].tagline,
                dataAbout[1].subTagline,
                dataAbout[1].link
              )
            }
          />
          <AboutLinks
            name={dataAbout[2].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[2].description,
                dataAbout[2].tagline,
                dataAbout[2].subTagline,
                dataAbout[2].link
              )
            }
          />
        </div>

        <div className="about__section2">
          <h2 className="about__titles">DEVELOPMENT</h2>
          <AboutLinks
            name={dataAbout[3].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[3].description,
                dataAbout[3].tagline,
                dataAbout[3].subTagline,
                dataAbout[3].link
              )
            }
          />
          <AboutLinks
            name={dataAbout[4].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[4].description,
                dataAbout[4].tagline,
                dataAbout[4].subTagline,
                dataAbout[4].link
              )
            }
          />
          <AboutLinks
            name={dataAbout[5].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[5].description,
                dataAbout[5].tagline,
                dataAbout[5].subTagline,
                dataAbout[5].link
              )
            }
          />
        </div>

        <div className="about__section3">
          <h2 className="about__titles">MARKETING</h2>
          <AboutLinks
            name={dataAbout[6].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[6].description,
                dataAbout[6].tagline,
                dataAbout[6].subTagline,
                dataAbout[6].link
              )
            }
          />
          <AboutLinks
            name={dataAbout[7].name}
            mouseover={(description, tagline, subTagline, link) =>
              handleMouseover(
                dataAbout[7].description,
                dataAbout[7].tagline,
                dataAbout[7].subTagline,
                dataAbout[7].link
              )
            }
          />
        </div>
      </section>
    </section>
  );
};

export default About;
