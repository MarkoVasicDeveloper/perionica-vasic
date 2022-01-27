import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props: {
  links: { id: number; link: string; text: string }[];
}) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header-holder">
      <div className="logo-holder">
        <div className="logo">perionica vasic</div>
      </div>
      <div className="nav-holder">
        <button className="buttonMenu" onClick={() => setShowNav(!showNav)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={showNav ? "showNavClass" : "navigation"}>
          <ul>
            {props.links.map((link) => (
              <li key={link.id}>
                <Link to={link.link}> {link.text} </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
