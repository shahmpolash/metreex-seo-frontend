import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AboutCompany = () => {
  const [counter, setCounter] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-company-list/`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/company-about-title/`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  return (
    <>
      <section id="reviews-4" className="bg-05 reviews-section division">
        <div className="container white-color">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="small-statistic pc-25">
                <div className="row">
                  {counter.map((e) => (
                    <div className="col-sm-6 col-md-3 col-lg-6">
                      <div
                        className="statistic-block wow fadeInUp"
                        data-wow-delay="1s"
                      >
                        <h5 className="statistic-number primary-color">
                          <span className="count-element">
                            {e.counterNumber}
                          </span>
                        </h5>
                        <p>{e.counterTitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="review-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="quote-ico">
                  <img
                    src="https://jthemes.net/themes/html/metreex/files/images/left-quote.png"
                    alt="quote-images"
                  />
                </div>
                {about.map((e) => (
                  <>
                    <p>
                      "<span>{e.Desc}</span>"
                    </p>

                    <div className="review-4-author">
                      <h5 className="h5-xs">{e.name}</h5>
                      <span className="lightgrey-color">{e.companyName}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
