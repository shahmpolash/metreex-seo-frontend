import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PageHero from "./PageHero";

const NavBar = () => {
  const [logo, setLogo] = useState([]);
  const [contact, setContact] = useState([]);
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/contact`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, []);

  const isHomePage = location.pathname === "/";
  const shouldRenderPageHero = !isHomePage;

  return (
    <>
      <div id="page" className="page">
        {shouldRenderPageHero && <PageHero />}
        <header id="header" className="header tra-menu navbar-dark dark-scroll">
          <div className="header-wrapper">
            <div className="wsmobileheader clearfix">
              <Link id="wsnavtoggle" className="wsanimated-arrow">
                <span />
              </Link>
              <span className="smllogo smllogo-black">
                <>
                  <Link to="/">
                    {logo.length > 0 && (
                      <img
                        src={logo[0].logo}
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    )}
                  </Link>
                </>
              </span>
              <span className="smllogo smllogo-white">
                <>
                  <Link to="/">
                    {logo.length > 0 && (
                      <img
                        src={logo[0].logo}
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    )}
                  </Link>
                </>
              </span>
              <a href="mailto:email@website.com" className="callusbtn">
                <i className="fas fa-envelope" />
              </a>
            </div>
            {/* NAVIGATION MENU */}
            <div className="wsmainfull menu clearfix">
              <div className="wsmainwp clearfix">
                {/* LOGO IMAGE */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) */}
                <div className="desktoplogo">
                  <Link to="/" className="logo-black">
                    {logo.length > 0 && (
                      <img
                        src={logo[1].logo}
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    )}
                  </Link>
                </div>
                <div className="desktoplogo">
                  <Link to="/" className="logo-white">
                    {logo.length > 0 && (
                      <img
                        src={logo[0].logo}
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    )}
                  </Link>
                </div>
                {/* MAIN MENU */}
                <nav className="wsmenu clearfix blue-header">
                  <ul className="wsmenu-list">
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
                    {/* <li className="nl-simple mobile_link">
                      <div className="menu-container">
                        {user ? (
                          <Link
                            className="btn btn-md btn-primary tra-black-hover"
                            to="/user-dashboard"
                          >
                            <span>Dashboard</span>
                          </Link>
                        ) : (
                          <Link
                            to="/login"
                            className="btn btn-md btn-primary tra-black-hover"
                          >
                            <span>Login Now</span>
                          </Link>
                        )}
                      </div>
                    </li> */}

                    {contact.map((e) => (
                      <li className="nl-simple green-scroll">
                        <a
                          href={`mailto:${e.email}`}
                          aria-haspopup="true"
                          className="callusbtn"
                        >
                          <i className="fas fa-envelope" />
                        </a>
                      </li>
                    ))}

                    <li class="nl-simple">
                      {user ? (
                        <Link
                          className="btn btn-md btn-primary tra-black-hover last-link"
                          to="/user-dashboard"
                        >
                          <span>Dashboard</span>
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="btn btn-md btn-primary tra-black-hover last-link"
                        >
                          <span>Login Now</span>
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default NavBar;
