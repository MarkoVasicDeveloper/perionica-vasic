import React, { useEffect } from "react";
import HowWeDoIt from "../CarpetWashing/HowWeDoIt/HowWeDoIt";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import DeepWashingSlogan from "./DeepWashingSlogan/DeepWashingSlogan";
import ExplanationSection from "../CarpetWashing/ExplanationSection/ExplanationSection";
import { DeepWashingExplanation } from "../PropsConfig/DeepWashingExplanationProps";
import { deepWashingHowWeDoProps } from "../PropsConfig/DeepWashingHowWeDoProps";
import { HeaderUserProps } from "../PropsConfig/HeaderUserProps";

function DeepWashingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);
  return (
    <div>
      <Header {...HeaderUserProps} />
      <DeepWashingSlogan />
      <HowWeDoIt {...deepWashingHowWeDoProps} />
      <ExplanationSection {...DeepWashingExplanation} />
      <Footer />
    </div>
  );
}

export default DeepWashingPage;
