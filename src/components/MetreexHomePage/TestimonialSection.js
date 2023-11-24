import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const TestimonialSection = () => {
  const [title, setTitle] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);
  return (
    <>
      <section
        id="reviews-3"
        className="bg-04 wide-100 reviews-section division"
        data-wow-delay="0.3s"
      >
        <div className="container">
          <div className="row">
            {title.map((e) => (
              <div
                className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3 className="h3-xs indigo-color">
                  <span className="title-digit">
                    <span className="count-element">{e.reviewNumber} </span>
                  </span>
                  {e.title}
                </h3>

                <p className="p-lg">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="row" data-wow-delay="0.5s">
            <AliceCarousel
              autoPlay
              
              autoPlayStrategy="none"
              autoPlayInterval={2000}
              animationDuration={2000}
              animationType="slide"
              infinite
              touchTracking={false}
              disableDotsControls
              disableButtonsControls
              items={testimonial.map((item, index) => (
                <div key={index} className="review-3">
                  <div className="quote-ico">
                    <img
                      src="https://jthemes.net/themes/html/metreex/files/images/left-quote.png"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginBottom: "20px",
                      }}
                      alt="quote-images"
                    />
                  </div>
                  <p>{item.desc}</p>
                  <div className="review-3-author d-flex align-items-center justify-content-center">
                    <div className="author-avatar">
                      <img
                        className="img-fluid"
                        src={item.personImg}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                        }}
                        alt={`review-author-avatar-${index}`}
                      />
                    </div>
                    <div className="review-author text-center">
                      <h5 className="h5-xs indigo-color">{item.personName}</h5>
                      <span>{item.personTitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
