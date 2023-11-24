import React, { useEffect, useState } from "react";

const ServicesSection = () => {
  const [service, setService] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/services-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    <>
      <section id="services-2" className="wide-30 services-section division">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {title.map((e) => (
                <>
                  <h3 className="h3-lg indigo-color" data-wow-delay="0.4s">
                    {e.title}
                  </h3>

                  <p className="p-lg">{e.desc}</p>
                </>
              ))}
            </div>
          </div>

          <div className="row">
            {service.map((e, index) => (
              <div className="col-sm-6 col-lg-4" key={e._id}>
                <div
                  className="sbox-2 wow fadeInUp"
                  data-wow-delay={`0.${index + 4}s`}
                >
                  <img
                    className="img-85"
                    src={e.featureImg}
                    alt="feature-icon"
                  />

                  <h5 className="h5-md indigo-color">{e.serviceTitle}</h5>

                  <p className="p-sm grey-color">{e.serviceDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
