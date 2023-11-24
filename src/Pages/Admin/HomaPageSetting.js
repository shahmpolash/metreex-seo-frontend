import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const HomaPageSetting = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [banner, setBanner] = useState([]);
  const [speciality, SetSpeciality] = useState([]);
  const [choose, SetChoose] = useState([]);
  const [road, SetRoad] = useState([]);
  const [title, setTitle] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/speciality/`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/road/`)
      .then((res) => res.json())
      .then((info) => SetRoad(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  const [cta, setCta] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cta-lists`)
      .then((res) => res.json())
      .then((info) => setCta(info));
  }, []);

  const [videoSection, setVideoSection] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/video-sections`)
      .then((res) => res.json())
      .then((info) => setVideoSection(info));
  }, []);

  return (
    <div>
      <section className="participants payment-setting">
        <div className="container">
          <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                {banner.map((e) => (
                  <Link to={`/admin/edit-banner-option/${e._id}`}>
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/insert-block-concept-illustration_114360-4291.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md"> Banner Edit</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/admin/slider-banner/">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/gradient-colored-ui-sliders-collection_23-2149194881.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Brand Slider Options</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.5s">
                <Link to="/admin/feature-page">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-1500.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Feature One Options</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.6s">
                <Link to="/admin/solution-lists">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/wireframing-concept-illustration_114360-1388.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Solutions List</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.7s">
                <Link to="/admin/counter-option">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/infographic-gradient-set_23-2148353791.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Counter Option</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.8s">
                 <Link to="/admin/about-option">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Service Deteils</h3>
                      </div>
                    </div>
                  </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.9s">
                <Link to={`/admin/about-company-option/`}>
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2721.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">About Company</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.10s">
                <Link to={`/admin/services-list/`}>
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889312.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">Our Services Card</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.11s">
                <Link to="/admin/testimonials">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/testimonial-review-template-with-star-rating-remark_1017-44232.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">Testimonials</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.12s">
                <Link to="/admin/feature-page-two">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/packaged-software-abstract-concept-illustration_335657-3887.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">Feature Two Option</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.12s">
                <Link to="/admin/faqs">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/flat-people-asking-questions_23-2148929673.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">Faqs Option</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.12s">
                {cta.map((e) => (
                  <Link to={`/admin/cta-edit/${e._id}`}>
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/click-collect-button-collection_23-2148795653.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />

                      <div className="project-description white-color">
                        <h3 className="p-md">CTA Option</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.12s">
                {videoSection.map((e) => (
                  <Link to={`/admin/video-section-edit/${e._id}`}>
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/e-sport-game-streaming-abstract-concept-illustration_335657-3855.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />

                      <div className="project-description white-color">
                        <h3 className="p-md">Video Section</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomaPageSetting;
