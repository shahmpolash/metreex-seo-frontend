import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";
const EditFooterLink = () => {
  const [footerLink, setFooterLink] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleLinks = (event) => {
    event.preventDefault();
    const FooterAbout = event.target.FooterAbout.value;

    const CopyRight = event.target.CopyRight.value;

    const footerLink = {
      FooterAbout,

      CopyRight,
    };

    const url = `http://localhost:5000/footer-about/${id}/`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(footerLink),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/footer-about/${id}`)
      .then((res) => res.json())
      .then((info) => setFooterLink(info));
  }, [id]);

  return (
    <>
      <BackToAdminDashboard></BackToAdminDashboard>

      <div
        className="payment-setting "
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <h4 className="mb-15 text-center">Update About & CopyRight</h4>
        <form
          class="form mb-15 form seo-form centered-form-container"
          onSubmit={handleLinks}
        >
          <div class="container">
            <div class="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Enter Short About</label>
                <div class="form-group mb-3">
                  <textarea
                    style={{ width: "100%", height: "100px" }}
                    type="text"
                    className="form-control"
                    placeholder="Type short About"
                    name="FooterAbout"
                    defaultValue={footerLink.FooterAbout}
                  />
                </div>
              </div>

              <div class="col-sm">
                <label className="mt-1">Enter CopyRight Text</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter CopyRight Text"
                    name="CopyRight"
                    defaultValue={footerLink.CopyRight}
                  />
                </div>
              </div>

              <div class="col-sm-4">
                <button type="submit" class="btn btn-md btn-primary tra-black-hover">
                  <span>Update</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditFooterLink;
