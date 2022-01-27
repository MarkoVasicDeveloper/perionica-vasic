import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import { galeryProps } from "../PropsConfig/GaleryProps";
import { HeaderUserProps } from "../PropsConfig/HeaderUserProps";
import Galery from "./Galery/Galery";

function GaleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);
  return (
    <div>
      <Header {...HeaderUserProps} />
      <Galery {...galeryProps} />
      <Footer />
    </div>
  );
}

export default GaleryPage;
