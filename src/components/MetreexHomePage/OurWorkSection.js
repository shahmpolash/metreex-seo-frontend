import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OurWorkSection = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/features-two/`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, []);

  return (
    <>
      <section
        id="content-8"
        className="bg-lightgrey wide-60 content-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {feature.map((e) => (
              <>
                <div className="col-md-6 col-lg-5">
                  <div
                    className="txt-block pc-25 mb-40 wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    {/* Title */}
                    <h4 className="h4-xl indigo-color">{e.featureTitle}</h4>
                    {/* Text */}
                    <p>{e.Desc}</p>
                    {/* List */}
                    <ul className="ico-list">
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>{e.featureDescOne}</span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>{e.featureDescTwo}</span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>{e.featureDescThree}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6 col-lg-7">
                  <div
                    className="img-block pl-25 mb-40 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={e.featureImg}
                      alt="content-images"
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorkSection;
