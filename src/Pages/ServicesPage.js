import React from "react";
import ServicesSection from "../components/MetreexHomePage/ServicesSection";
import TestimonialSection from "../components/MetreexHomePage/TestimonialSection";
import FaqsSection from "../components/MetreexHomePage/FaqsSection";
import CallToAction from "../components/MetreexHomePage/CallToAction";
import AboutSection from "../components/MetreexHomePage/AboutSection";

const ServicesPage = () => {
  return (
    <>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <TestimonialSection></TestimonialSection>
      <FaqsSection></FaqsSection>
      <CallToAction></CallToAction>
    </>
  );
};

export default ServicesPage;
