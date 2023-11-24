import React, { useEffect, useState } from "react";

const FeatureSection = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/features`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, []);
  return (
    <>
      <section
        id="content-5"
        className="bg-lightgrey wide-60 content-section division"
      >
        {feature.map((e) => (
          <>
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-6">
                  <div
                    className="txt-block pc-25 mb-40 wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <h4 className="h4-xl indigo-color">{e.featureTitle}</h4>
                    <div className="cbox-1">
                      <i className="fas fa-check grey-color" />
                      <div className="cbox-1-txt">
                        <p>{e.featureDescOne}</p>
                      </div>
                    </div>
                    <div className="cbox-1">
                      <i className="fas fa-check grey-color" />
                      <div className="cbox-1-txt">
                        <p>{e.featureDescTwo}</p>
                      </div>
                    </div>
                    <div className="cbox-1">
                      <i className="fas fa-check grey-color" />
                      <div className="cbox-1-txt">
                        <p>{e.featureDescThree}</p>
                      </div>
                    </div>
                    <div className="small-statistic">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="statistic-block">
                            <h5 className="statistic-number primary-color">
                              <span className="count-element">
                                {e.counterNumberOne}
                              </span>
                            </h5>
                            <p className="indigo-color">{e.counterTitleOne}</p>
                            <p className="p-sm">{e.couterDescOne}</p>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="statistic-block">
                            <h5 className="statistic-number primary-color">
                              <span className="count-element">
                                {e.counterNumberTwo}
                              </span>
                            </h5>
                            <p className="indigo-color">{e.counterTitleTwo}</p>
                            <p className="p-sm">{e.couterDescTwo}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-6">
                  <div
                    className="content-5-img mb-40 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src={e.featureImg}
                      alt="content-images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default FeatureSection;
