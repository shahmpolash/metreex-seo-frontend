import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const CtaEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cta, setCta] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cta-lists`)
      .then((res) => res.json())
      .then((info) => setCta(info));
  }, []);

  const handleBanner = (event) => {
    event.preventDefault();
    const ctaHeading = event.target.ctaHeading.value;
    const buttonText = event.target.buttonText.value;
    const buttonLink = event.target.buttonLink.value;
    const bannertext = event.target.bannertext.value;

    const cta = {
      ctaHeading,
      buttonText,
      bannertext,
      buttonLink,
    };

    const url = `http://localhost:5000/cta-list/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cta),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div>
      <BackToAdminDashboard />
      <form className="form mb-15 seo-form" onSubmit={handleBanner}>
        {cta.map((e) => (
          <div className="container" key={e._id}>
            <div className="col-sm">
              <label className="mt-1">Enter Cta Heading</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Cta Heading"
                  name="ctaHeading"
                  defaultValue={e.ctaHeading}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Button Text</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Banner Button Text"
                  name="buttonText"
                  defaultValue={e.buttonText}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Button Link</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Button Text"
                  name="buttonLink"
                  defaultValue={e.buttonLink}
                />
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">Enter Description</label>
              <div className="form-group mb-3">
                <textarea
                  type="text"
                  style={{ width: "100%", height: "100px" }}
                  className="form-control"
                  placeholder="Enter Description"
                  name="bannertext"
                  defaultValue={e.bannertext}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <button
                type="submit"
                className="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update</span>
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CtaEdit;
