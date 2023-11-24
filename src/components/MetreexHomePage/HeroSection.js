import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const HeroSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [banner, setBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddWebsite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const website = event.target.website.value;
    const userMail = event.target.userMail.value;
    const auditStatus = event.target.auditStatus.value;

    const websiteCheck = {
      email,
      website,
      userMail,
      auditStatus,
    };

    const url = `http://localhost:5000/add-website`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/submitted-website");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <section id="hero-2" className="bg-fixed hero-section division">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="hero-txt text-center">
                  <h3 className="indigo-color">
                    {banner.length > 0
                      ? banner[0].bannerHeading
                      : "Update banner Title from the Setting"}
                  </h3>

                  <p className="grey-color">
                    {banner.length > 0
                      ? banner[0].bannertext
                      : "Update banner Text from the Setting"}
                  </p>

                  <div className="form-holder text-center">
                    <form
                      name="seoForm"
                      className="row seo-form"
                      onSubmit={handleAddWebsite}
                    >
                      <div id="input-email" className="col-lg-4">
                        <input
                          type="text"
                          name="email"
                          className="form-control email"
                          placeholder="Email Address*"
                        />
                      </div>

                      <div id="input-url" className="col-lg-5">
                        <input
                          type="url"
                          name="website"
                          className="form-control url"
                          placeholder="Your Website*"
                          defaultValue="http://www."
                        />
                        <input
                          hidden
                          type="email"
                          class="form-control"
                          name="userMail"
                          value={user?.email}
                        />
                        <input
                          required
                          type="text"
                          hidden
                          name="auditStatus"
                          value="Incomplete"
                        />
                      </div>

                      <div className="col-lg-3 form-btn">
                        <button
                          type="submit"
                          className="btn btn-primary black-hover submit"
                        >
                          {banner.length > 0
                            ? banner[0].buttonText
                            : "Let's started"}
                        </button>
                      </div>

                      <div className="col-lg-12 seo-form-msg">
                        <span className="loading" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="hero-2-img text-center">
                  <img
                    className="img-fluid"
                    src={
                      banner.length > 0
                        ? banner[0].bunnerImage
                        : "https://i.ibb.co/YZB5mvP/hero-2-img.png"
                    }
                    alt="hero images"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-fixed white-overlay-wave" />
        </section>
      )}
    </>
  );
};

export default HeroSection;
