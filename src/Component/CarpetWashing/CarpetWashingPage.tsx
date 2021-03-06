import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import CarpetWashingSlogan from "./CarpetWashingSlogan/CarpetWashingSlogan";
import ExplanationSection from "./ExplanationSection/ExplanationSection";
import HowWeDoIt from "./HowWeDoIt/HowWeDoIt";
import SliderCarpet from "./SliderCarpet/SliderCarpet";
import { explanationItem } from "../PropsConfig/ExplanationProps";
import { howWeDoProps } from "../PropsConfig/HowWeDoProps";
import { HeaderUserProps } from "../PropsConfig/HeaderUserProps";

function CarpetWashing() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);
  return (
    <div>
      <Header {...HeaderUserProps} />
      <SliderCarpet />
      <HowWeDoIt {...howWeDoProps} />
      <ExplanationSection {...explanationItem} />
      <CarpetWashingSlogan />
      <Footer />
    </div>
  );
}

export default CarpetWashing;
