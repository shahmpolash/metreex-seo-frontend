import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FaqsSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [faqTitle, setFaqTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/faqs`)
      .then((res) => res.json())
      .then((info) => setFaqs(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/faqs-title/`)
      .then((res) => res.json())
      .then((info) => setFaqTitle(info));
  }, []);

  return (
    <>
      <section id="faqs-1" className="wide-100 faqs-section division">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {faqTitle.map((e) => (
                <>
                  <h3 className="h3-lg indigo-color">{e.titleTopText}</h3>

                  <p className="p-lg">{e.desc}</p>
                </>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div id="accordion" role="tablist">
                {faqs.map((faq, index) => (
                  <div
                    className="card wow fadeInUp"
                    data-wow-delay={`0.${index + 4}s`}
                    key={index}
                  >
                    <div
                      className="card-header"
                      role="tab"
                      id={`heading${index}`}
                    >
                      <h5 className="h5-sm indigo-color">
                        <a
                          data-toggle="collapse"
                          href={`#collapse${index}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                        >
                          {faq.question}
                        </a>
                      </h5>
                    </div>

                    <div
                      id={`collapse${index}`}
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby={`heading${index}`}
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center more-questions">
              <h5>
                Still have a question?
                <Link to="/contact-us" className="primary-color">
                  Ask your question here
                </Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
};

export default FaqsSection;
