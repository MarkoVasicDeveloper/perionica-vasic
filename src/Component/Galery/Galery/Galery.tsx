import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "./Galery.scss";

function Galery(props: { items: { imgSrc: string; imgAlt: string }[] }) {
  const galery = useRef(null) as any;
  const [width, setWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const galeryWidth = galery.current.offsetWidth;
    if (windowWidth < 860 && galeryWidth != null) return setWidth(galeryWidth);
    if (galeryWidth != null) setWidth(galeryWidth / 3);
  }, []);

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
                <img src={item.imgSrc} alt={item.imgAlt} />
              </div>
            ))}
          </div>
        </div>
        <div className="btn-forward">
          <button
            onClick={() => {
              setTranslate((previTranslate) => previTranslate - width);
              setScale((prevScale) => prevScale - 1);
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
