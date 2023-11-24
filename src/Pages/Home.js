import React from "react";
import HeroSection from "../components/MetreexHomePage/HeroSection";
import BrandSection from "../components/MetreexHomePage/BrandSection";
import FeatureSection from "../components/MetreexHomePage/FeatureSection";
import StatisticSetion from "../components/MetreexHomePage/StatisticSetion";
import AboutSection from "../components/MetreexHomePage/AboutSection";
import TestimonialSection from "../components/MetreexHomePage/TestimonialSection";
import WhySelectSection from "../components/MetreexHomePage/WhySelectSection";
import ServicesSection from "../components/MetreexHomePage/ServicesSection";
import AboutCompany from "../components/MetreexHomePage/AboutCompany";
import OurWorkSection from "../components/MetreexHomePage/OurWorkSection";
import Pricing from "../components/MetreexHomePage/Pricing";
import VideoSection from "../components/MetreexHomePage/VideoSection";
import FaqsSection from "../components/MetreexHomePage/FaqsSection";
import CallToAction from "../components/MetreexHomePage/CallToAction";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <BrandSection></BrandSection>
      <FeatureSection></FeatureSection>
      <AboutSection></AboutSection>
      <WhySelectSection></WhySelectSection>
      {/* <StatisticSetion></StatisticSetion>
      
      <AboutCompany></AboutCompany>
      <ServicesSection></ServicesSection> */}
      <TestimonialSection></TestimonialSection>
      <OurWorkSection></OurWorkSection>
      <Pricing></Pricing>
      <VideoSection></VideoSection>
      <FaqsSection></FaqsSection>
      <CallToAction></CallToAction>
    </>
  );
};

export default Home;
