import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const [cta, setCta] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cta-lists`)
      .then((res) => res.json())
      .then((info) => setCta(info));
  }, []);
  return (
    <>
      <section id="cta-4" className="bg-06 cta-section division">
        <div className="container white-color">
          {cta.map((e) => (
            <>
              <div className="row d-flex align-items-center"
                data-wow-delay="0.4s"
                >
                <div className="col-lg-8">
                  <div className="cta-txt">
                    <h3 className="h3-xs">{e.ctaHeading}</h3>

                    <p className="p-md">{e.bannertext}</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="cta-btn text-right">
                    <Link
                      to={e.buttonLink}
                      className="btn btn-md btn-primary tra-white-hover"
                    >
                      {e.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default CallToAction;
