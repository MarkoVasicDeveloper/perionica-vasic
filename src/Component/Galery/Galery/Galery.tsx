import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "./Galery.scss";

function Galery(props: { items: { imgSrc: string; imgAlt: string }[] }) {
  const galery = useRef() as any;
  const [width, setWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const windowWidth = window.screen.availWidth;
    const galeryWidth = galery.current.offsetWidth;

    if (windowWidth < window.screen.availHeight && galeryWidth != null) {
      lockScreen();
      setWidth(galeryWidth);
      return;
    }
    setWidth(galeryWidth / 3);

    return () => {};
  }, [galery]);

  function touchStartMoveFunction(evant: React.TouchEvent<HTMLImageElement>) {
    const position = evant.touches[0].clientX;
    const halfOfScreen = window.screen.availWidth / 2;

    if (halfOfScreen > position) {
      if (scale === props.items.length) return;
      setTranslate((previTranslate) => previTranslate + width);
      setScale((prevScale) => prevScale + 1);
      return;
    }
    if (scale === 1) return;
    setTranslate((previTranslate) => previTranslate - width);
    setScale((prevScale) => prevScale - 1);
  }

  async function lockScreen() {
    return await window.screen.orientation.lock("natural");
  }

  return (
    <section id="galery">
      <div className="galery-container">
        <div className="btn-back">
          <button
            disabled={scale === props.items.length ? true : false}
            onClick={() => {
              setTranslate((previTranslate) => previTranslate + width);
              setScale((prevScale) => prevScale + 1);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="galery-img" ref={galery}>
          <div
            className="div-img"
            style={{ transform: `translateX(-${translate}px)` }}
          >
            <div className="mobileHidden" style={{ width: width }}></div>
            {props.items.map((item, index) => (
              <div
                key={index}
                style={{
                  width: width,
                  transform: scale === index + 1 ? "scale(1.3)" : "scale(1)",
                }}
              >
                <img
                  onTouchStart={(evant) => touchStartMoveFunction(evant)}
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="btn-forward">
          <button
            onClick={() => {
              if (scale !== 1) {
                setTranslate((previTranslate) => previTranslate - width);
                setScale((prevScale) => prevScale - 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Galery;
