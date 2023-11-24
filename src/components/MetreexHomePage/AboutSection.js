import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/abouts/`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);

  const renderDescription = (text) => {
    const paragraphs = text.split('\n');
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    )); 
  };

  return (
    <>
      <section id="about-1" className="wide-60 about-section division">
        <div className="container">
          {about.map((e, index) => (
            <div className={`row d-flex align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <div className="col-md-12 col-lg-6">
                <div
                  className={`img-block pr-25 mb-40 wow ${index % 2 !== 0 ? 'fadeInRight' : 'fadeInLeft'}`}
                  data-wow-delay={index % 2 !== 0 ? '0.4s' : '0.6s'}
                >
                  <img className="img-fluid" src={e.img} alt="about-images" />
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div
                  className={`txt-block pc-25 mb-40 wow ${index % 2 !== 0 ? 'fadeInLeft' : 'fadeInRight'}`}
                  data-wow-delay={index % 2 !== 0 ? '0.6s' : '0.4s'}
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
      <hr className="w-75"></hr>
    </>
  );
};

export default AboutSection;
