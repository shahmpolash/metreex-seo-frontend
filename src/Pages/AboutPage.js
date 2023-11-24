import React, { useEffect, useState } from "react";
import AboutCompany from "../components/MetreexHomePage/AboutCompany";
import TestimonialSection from "../components/MetreexHomePage/TestimonialSection";
import OurWorkSection from "../components/MetreexHomePage/OurWorkSection";
import VideoSection from "../components/MetreexHomePage/VideoSection";
import CallToAction from "../components/MetreexHomePage/CallToAction";
import StatisticSetion from "../components/MetreexHomePage/StatisticSetion";

const AboutPage = () => {
  const [title, setTitle] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/abouts-page/`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);

  const renderDescription = (text) => {
    const paragraphs = text.split("\n");
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/about-page-titles`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <>
      <section id="about-1" className="wide-60 about-section division">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3 className="h3-lg indigo-color">
                {title.length > 0 ? title[0].title : "Loading..."}
              </h3>

              <p className="p-lg">
                {title.length > 0 ? title[0].desc : "Loading..."}
              </p>
            </div>
          </div>
          {about.map((e, index) => (
            <div
              className={`row d-flex align-items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              key={index}
            >
              <div className="col-md-12 col-lg-6">
                <div
                  className={`img-block pr-25 mb-40 wow ${
                    index % 2 !== 0 ? "fadeInRight" : "fadeInLeft"
                  }`}
                  data-wow-delay={index % 2 !== 0 ? "0.4s" : "0.6s"}
                >
                  <img className="img-fluid" src={e.img} alt="about-images" />
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div
                  className={`txt-block pc-25 mb-40 wow ${
                    index % 2 !== 0 ? "fadeInLeft" : "fadeInRight"
                  }`}
                  data-wow-delay={index % 2 !== 0 ? "0.6s" : "0.4s"}
                >
                  <h4 className="h4-xl indigo-color">{e.title}</h4>
                  {/* Render description in multiple paragraphs for all items */}
                  {renderDescription(e.subText)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <StatisticSetion></StatisticSetion>
      <AboutCompany></AboutCompany>

      <OurWorkSection></OurWorkSection>
      <TestimonialSection></TestimonialSection>
      <VideoSection></VideoSection>
      <CallToAction></CallToAction>
    </>
  );
};

export default AboutPage;
