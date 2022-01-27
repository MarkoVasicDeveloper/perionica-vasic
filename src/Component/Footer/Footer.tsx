import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";
import img from "../../Img/logo_perionica.png";

function Footer() {
  return (
    <section id="footer">
      <div className="map">
        {/* <iframe style = {{width: '100%', height: '100%'}} title = 'Perionica Vasic Mapa' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.2900324572556!2d19.31187511575386!3d44.65242569526006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475bddd1e0a52945%3A0x84c9fa48c3100dce!2sPerionica%20Vasic!5e0!3m2!1ssr!2srs!4v1610057830346!5m2!1ssr!2srs" aria-hidden="false">

            </iframe> */}
      </div>
      <div className="footer-info">
        <div className="text">
          +381 (0)60 53 86 187 <br />
          <a href="mailto:perionicavasic2018@gmail.com">
            perionicavasic2018@gmail.com
          </a>
          <br />
          <br />
          Kneza Milosa 36, Lesnica <br />
          Loznica, Republika Srbija <br />
        </div>
        <div className="social">
          <a href="/#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="logo">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
