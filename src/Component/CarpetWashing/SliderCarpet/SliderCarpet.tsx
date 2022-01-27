import React, { useEffect, useRef, useState } from "react";
import "./SliderCarpet.scss";
import img from "../../../Img/centrifuga-masina-za-cedjenje-tepiha.png";
import img2 from "../../../Img/kalorifer.png";
import img3 from "../../../Img/vlagara-masina-za-isusivanje-i-odstanjanje-vlage.png";
import img4 from "../../../Img/cetkara-masina-za-cetkanje-tepiha.png";

function SliderCarpet() {
  const imageDiv = useRef(null) as any;
  const [margin, setMargin] = useState(0);
  const [transition, setTransition] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("load", widthOfContainer);
    window.addEventListener("orientationchange", orientationChangeWidth, true);

    function widthOfContainer() {
      if (window.screen.availWidth < 768) return setWidth(100);
      if (window.screen.availWidth > 768) return setWidth(50);
    }

    function orientationChangeWidth() {
      if (window.screen.availWidth < 768) {
        setWidth(100);
        if (margin > 200) setMargin(0);
        return;
      }
      if (window.screen.availWidth > 768) return setWidth(50);
    }

    const interval = setInterval(
      () => {
        if (margin === -(width * 4)) {
          setTransition(false);
          setMargin(0);
        } else {
          setTransition(true);
          setMargin(margin - width);
        }
      },
      margin === -(width * 4) ? 500 : 3000
    );
    return () => {
      clearInterval(interval);
      window.removeEventListener("load", widthOfContainer);
      window.removeEventListener("orientationchange", orientationChangeWidth);
    };
  }, [margin, width]);

  return (
    <section id="sliderCarpet">
      <div className="sliderInfo">
        <div className="titleCarpet">
          <h2>Masinsko pranje tepiha</h2>
        </div>
        <div className="textSlider">
          <p>
            Masinsko pranje tepiha je veoma zahtevan posao. Da bi tepisi bili
            100% cisti, potrebno je koristiti vise razlicitih masina i hemije od
            kojih svaka obavlja odedjene operacije. Koriscenje kvalitetnih
            masina i pravi izbor hemije su od izuzetnog znacaja. Kod masinskog
            pranja tepisi prolaze kroz nekoliko faza koje smo dole objasnili.
          </p>
        </div>
      </div>
      <div className="slider" ref={imageDiv}>
        <div
          className="imageContainer"
          style={{
            marginLeft: margin + "vw",
            transition: transition ? "500ms ease" : "none",
          }}
        >
          <div>
            <img src={img} alt="centrifuga-masina-za-cedjenje-tepiha" />
          </div>
          <div>
            <img src={img2} alt="kalorifer" />
          </div>
          <div>
            <img
              src={img3}
              alt="vlagara-masina-za-isusivanje-i-odstanjanje-vlage"
            />
          </div>
          <div>
            <img src={img4} alt="cetkara-masina-za-cetkanje-tepiha" />
          </div>
          <div>
            <img src={img} alt="centrifuga-masina-za-cedjenje-tepiha" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderCarpet;
