import React, { useEffect, useState } from "react";

const WhySelectSection = () => {
  const [solution, setSolution] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/solutions`)
      .then((res) => res.json())
      .then((info) => setSolution(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/solutions-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    <>
      <section id="services-4" className="wide-60 services-section division">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {
                title.map(e =>
                  <>
                  <h3 className="h3-sm indigo-color">
               {e.title}
              </h3>

              <p className="p-lg">
                {e.desc}
              </p>
              </>)
              }
            </div>
          </div>

          <div className="services-boxes">
            <div className="row">
              {solution.map((e) => (
                <>
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <img
                        className="img-65"
                        src={e.featureImg}
                        alt="feature-icon"
                      />

                      <div className="sbox-4-txt">
                        <h5 className="h5-lg indigo-color">{e.featureTitle}</h5>

                        <p className="grey-color">
                          {e.featureDesc.length > 200
                            ? `${e.featureDesc.slice(0, 200)}...`
                            : e.featureDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySelectSection;
