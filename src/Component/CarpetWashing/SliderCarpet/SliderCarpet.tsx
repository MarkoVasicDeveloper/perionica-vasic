import React, { useEffect, useState } from "react";
import "./SliderCarpet.scss";
import img from "../../../Img/centrifuga-masina-za-cedjenje-tepiha.png";
import img2 from "../../../Img/kalorifer.png";
import img3 from "../../../Img/vlagara-masina-za-isusivanje-i-odstanjanje-vlage.png";
import img4 from "../../../Img/cetkara-masina-za-cetkanje-tepiha.png";

function SliderCarpet() {
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState("none");

  useEffect(() => {
    const imageSliderEfect = setInterval(
      () => {
        if (translate === -80) {
          setTranslate(0);
          setTransition("none");
          return;
        }
        setTranslate((prevTrans) => prevTrans - 20);
        setTransition("transform 500ms ease");
      },
      translate === -80 ? 500 : 2000
    );
    return () => {
      clearInterval(imageSliderEfect);
    };
  }, [translate]);

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
      <div className="slider">
        <div
          className="imageContainer"
          style={{
            transform: `translateX(${translate}%)`,
            transition: transition,
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
