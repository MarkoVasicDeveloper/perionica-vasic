import React, { useEffect, useState } from "react";
import Header from "../../Header/header";
import "./Hero.scss";
import img1 from "../../../Img/spoljasnje-pranje-vozila-1.jpg";
import img1_2 from "../../../Img/spoljasnje-pranje-vozila-2.jpg";
import img1_3 from "../../../Img/spoljasnje-pranje-vozila-3.jpg";
import img2_1 from "../../../Img/pranje-tepiha-finish-1.jpg";
import img2_2 from "../../../Img/pranje-tepiha-finish-2.jpg";
import img2_3 from "../../../Img/pranje-tepiha-finish-3.jpg";
import img3_1 from "../../../Img/car_polishing-1.jpg";
import img3_2 from "../../../Img/car_polishing-2.jpg";
import img3_3 from "../../../Img/car_polishing-3.jpg";
import img4_1 from "../../../Img/polishing-light-1.jpg";
import img4_2 from "../../../Img/polishing-light-2.jpg";
import img4_3 from "../../../Img/polishing-light-3.jpg";
import img5_1 from "../../../Img/dubinsko-pranje-masina-za-dubinsko-pranje-1.jpg";
import img5_2 from "../../../Img/dubinsko-pranje-masina-za-dubinsko-pranje-2.jpg";
import img5_3 from "../../../Img/dubinsko-pranje-masina-za-dubinsko-pranje-3.jpg";
import { HeaderUserProps } from "../../PropsConfig/HeaderUserProps";

export default function Hero() {
  const [margin, setMargin] = useState(-400);
  const [marginFirstSecond, setMarginFirstSecond] = useState(0);
  const [hedingLeft, setHedingLeft] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setMargin(margin + 80);
        setMarginFirstSecond(marginFirstSecond - 80);
        setHedingLeft(hedingLeft - 100);
        if (hedingLeft === -500) {
          setHedingLeft(0);
        }
        if (marginFirstSecond === -400) {
          setMarginFirstSecond(0);
        }
        if (margin === 0) {
          setMargin(-400);
          setTransition(false);
        } else {
          setTransition(true);
        }
      },
      margin === 0 ? 1000 : 4000
    );
    return () => {
      clearInterval(interval);
    };
  }, [margin, marginFirstSecond, hedingLeft]);

  return (
    <>
      <Header {...HeaderUserProps} />
      <section id="hero">
        <div
          className="partOne"
          style={{
            marginTop: marginFirstSecond + "vh",
            transition: transition ? "1000ms ease" : "none",
          }}
        >
          <div>
            <div style={{ backgroundImage: `url(${img1})` }}></div>
            <div style={{ backgroundImage: `url(${img2_1})` }}></div>
            <div style={{ backgroundImage: `url(${img3_1})` }}></div>
            <div style={{ backgroundImage: `url(${img4_1})` }}></div>
            <div style={{ backgroundImage: `url(${img5_1})` }}></div>
            <div style={{ backgroundImage: `url(${img1})` }}></div>
          </div>
        </div>
        <div
          className="partTwo"
          style={{
            marginTop: margin + "vh",
            transition: transition ? "1000ms ease" : "none",
          }}
        >
          <div>
            <div style={{ backgroundImage: `url(${img1_2})` }}></div>
            <div style={{ backgroundImage: `url(${img5_2})` }}></div>
            <div style={{ backgroundImage: `url(${img4_2})` }}></div>
            <div style={{ backgroundImage: `url(${img3_2})` }}></div>
            <div style={{ backgroundImage: `url(${img2_2})` }}></div>
            <div style={{ backgroundImage: `url(${img1_2})` }}></div>
          </div>
        </div>
        <div
          className="partThree"
          style={{
            marginTop: marginFirstSecond + "vh",
            transition: transition ? "1000ms ease" : "none",
          }}
        >
          <div>
            <div style={{ backgroundImage: `url(${img1_3})` }}></div>
            <div style={{ backgroundImage: `url(${img2_3})` }}></div>
            <div style={{ backgroundImage: `url(${img3_3})` }}></div>
            <div style={{ backgroundImage: `url(${img4_3})` }}></div>
            <div style={{ backgroundImage: `url(${img5_3})` }}></div>
            <div style={{ backgroundImage: `url(${img1_3})` }}></div>
          </div>
        </div>
        <div className="hedings" style={{ left: hedingLeft + "vw" }}>
          <div>
            <h1 className={hedingLeft === 0 ? "hedingAnimation" : ""}>
              Najbolje pranje vozila
            </h1>
            <h3 className={hedingLeft === 0 ? "hedingAnimationH3" : ""}>
              Sigurna opcija za vaseg mezimca
            </h3>
          </div>
          <div>
            <h1 className={hedingLeft === -100 ? "hedingAnimation" : ""}>
              Masinsko pranje tepiha
            </h1>
            <h3 className={hedingLeft === -100 ? "hedingAnimationH3" : ""}>
              Za potpunu cistocu
            </h3>
          </div>
          <div>
            <h1 className={hedingLeft === -200 ? "hedingAnimation" : ""}>
              Poliranje vozila
            </h1>
            <h3 className={hedingLeft === -200 ? "hedingAnimationH3" : ""}>
              Zastita u nekoliko slojeva
            </h3>
          </div>
          <div>
            <h1 className={hedingLeft === -300 ? "hedingAnimation" : ""}>
              Masinsko poliranje farova
            </h1>
            <h3 className={hedingLeft === -300 ? "hedingAnimationH3" : ""}>
              Umesto novih farova
            </h3>
          </div>
          <div>
            <h1 className={hedingLeft === -400 ? "hedingAnimation" : ""}>
              Dubinsko pranje vozila
            </h1>
            <h3 className={hedingLeft === -400 ? "hedingAnimationH3" : ""}>
              Kao nov i lepo mirise
            </h3>
          </div>
        </div>
      </section>
      <section id="info">
        <div>
          <h1>Najbolja Perionica u Gradu</h1>
          <p>Odlican Odnos Cene i Kvaliteta</p>
          <p>060/53 86 187</p>
          <p>
            <a href="mailto:perionicavasic2018@gmail.com">
              perionicavasic2018@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
