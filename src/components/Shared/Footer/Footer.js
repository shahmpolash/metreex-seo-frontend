import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState([]);
  const [footer, setFooter] = useState([]);
  const [social, setSocial] = useState([]);
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-about`)
      .then((res) => res.json())
      .then((info) => setFooter(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setSocial(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/contact`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const newsLetter = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    const contact = {
      email,
    };

    const url = `http://localhost:5000/add-newsLetter/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/news-letter-submit");
      });
  };
  const blackLogo = logo.find((logo) => logo.logoFor === "black");

  return (
    <>
      <footer id="footer-2" className="pt-100 footer division">
        <div className="container">
          {/* FOOTER CONTENT */}
          <div className="row">
            {/* FOOTER INFO */}
            <div className="col-md-10 col-lg-4">
              <div className="footer-info mb-40">
                {/* Footer Logo */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 364 x 90 pixels) */}

                {blackLogo && (
                  <img
                    src={blackLogo.logo}
                    width={182}
                    height={45}
                    alt="Black Logo"
                  />
                )}

                {/* Text */}
                <p>{footer.map((e) => e.FooterAbout)}</p>
              </div>
            </div>
            {/* FOOTER PRODUCTS LINKS */}
            <div className="col-md-3 col-lg-2 col-xl-2">
              <div className="footer-links mb-40">
                {/* Title */}
                <h5 className="h5-sm indigo-color">Quick Links</h5>
                {/* Footer Links */}
                <ul className="foo-links clearfix">
                  <li className="nl-simple">
                    <Link to="/" aria-haspopup="true">
                      Home
                    </Link>
                  </li>
                  <li className="nl-simple">
                    <Link to="/services" aria-haspopup="true">
                      Services
                    </Link>
                  </li>
                  <li className="nl-simple">
                    <Link to="/pricing" aria-haspopup="true">
                      Pricing
                    </Link>
                  </li>
                  <li className="nl-simple">
                    <Link to="/about-us" aria-haspopup="true">
                      About Us
                    </Link>
                  </li>
                  <li className="nl-simple">
                    <Link to="/contact-us" aria-haspopup="true">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* FOOTER COMPANY LINKS */}
            <div className="col-md-4 col-lg-3 col-xl-3">
              <div className="footer-links mb-40">
                {/* Title */}
                <h5 className="h5-sm indigo-color">Quick Connect</h5>
                {/* Footer Links */}
                {contact.map((e) => (
                  <ul className="clearfix">
                    <li>
                      <p>
                        <a href={`tel:${e.phone}`}>{e.phone}</a>
                      </p>
                    </li>
                    <li>
                      <p className="last-li">
                        <a href={`mailto:${e.email}`}>{e.email}</a>
                      </p>
                    </li>
                    <li>
                      <p className="last-li">{e.address}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            {/* FOOTER NEWSLETTER FORM */}
            <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="footer-form mb-20">
                {/* Title */}
                <h5 className="h5-sm indigo-color">Follow the Best</h5>
                {/* Newsletter Form Input */}
                <form className="newsletter-form" onSubmit={newsLetter}>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required=""
                      name="email"
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="btn">
                        <i className="far fa-arrow-alt-circle-right" />
                      </button>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label htmlFor="s-email" className="form-notification" />
                </form>
              </div>
            </div>{" "}
            {/* END FOOTER NEWSLETTER FORM */}
          </div>{" "}
          {/* END FOOTER CONTENT */}
          {/* BOTTOM FOOTER */}
          <div className="bottom-footer">
            <div className="row">
              {/* FOOTER COPYRIGHT */}
              <div className="col-lg-8">
                <ul className="bottom-footer-list">
                  <li>
                    <p>{footer.map((e) => e.CopyRight)}</p>
                  </li>
                </ul>
              </div>
              {/* FOOTER SOCIALS LINKS */}

              {social.map((e) => (
                <div className="col-lg-4 text-right">
                  <ul className="foo-socials text-center clearfix">
                    <li>
                      <Link to={e.facebook} className="ico-facebook">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to={e.twitter} className="ico-twitter">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={e.instragram} class="ico-instagram">
                        <i class="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={e.youtube} class="ico-youtube">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={e.linkedin} class="ico-linkedin">
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* END BOTTOM FOOTER */}
        </div>{" "}
        {/* End container */}
      </footer>
    </>
  );
};

export default Footer;
