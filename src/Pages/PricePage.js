import React from "react";
import Pricing from "../components/MetreexHomePage/Pricing";
import TestimonialSection from "../components/MetreexHomePage/TestimonialSection";
import VideoSection from "../components/MetreexHomePage/VideoSection";
import FaqsSection from "../components/MetreexHomePage/FaqsSection";
import CallToAction from "../components/MetreexHomePage/CallToAction";

const PricePage = () => {
  return (
    <>
      <Pricing></Pricing>
      <TestimonialSection></TestimonialSection>
      <VideoSection></VideoSection>
      <FaqsSection></FaqsSection>
      <CallToAction></CallToAction>
    </>
  );
};

export default PricePage;
