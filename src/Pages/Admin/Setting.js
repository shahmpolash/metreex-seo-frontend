import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const Setting = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);
  return (
    <>
      <section
        className="project s2 payment-setting"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="shape right" />
        <div className="container">
          <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-general/">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/working-concept-illustration_114360-330.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />

                      <div className="project-description white-color">
                        <h3 className="p-md"> Logo Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-footer">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/operating-system-upgrade-concept-illustration_114360-8293.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />

                      <div className="project-description white-color">
                        <h3 className="p-md"> Footer Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-payment">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-4064.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Payment Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-homepage">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/web-page-visualization-protocol-procedure-dynamic-software-workflow-full-stack-development-markup-administrate-system-driver-shared-memory-vector-isolated-concept-metaphor-illustration_335657-4299.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">HomePage Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  {contact.map((e) => (
                    <Link to={`/admin/edit-contact-page/${e._id}`}>
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-vector/software-requirement-description-abstract-concept-illustration_335657-3813.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <h3 className="p-md">Contact Page Setting</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                
                    <Link to="/admin/about-page-option/">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="https://img.freepik.com/free-vector/software-requirement-description-abstract-concept-illustration_335657-3813.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <h3 className="p-md">About Page</h3>
                        </div>
                      </div>
                    </Link>
              
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
