import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const AboutCompanyListEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [companyAbout, setCompanyAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-company-list/${id}`)
      .then((res) => res.json())
      .then((info) => setCompanyAbout(info));
  }, [id]);

  const handleCounter = (event) => {
    event.preventDefault();
    const counterNumber = event.target.counterNumber.value;
    const counterTitle = event.target.counterTitle.value;

    const about = {
      counterTitle,
      counterNumber,
    };

    const url = `http://localhost:5000/about-company-list/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(about),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div className="container">
      <BackToAdminDashboard></BackToAdminDashboard>
      <form
        class="form seo-form centered-form-container"
        onSubmit={handleCounter}
      >
        <h4 className="mb-15">Update Company Counter</h4>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Counter Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Counter Title"
                  name="counterTitle"
                  defaultValue={companyAbout.counterTitle}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Counter Number</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Counter Number"
                  name="counterNumber"
                  defaultValue={companyAbout.counterNumber}
                />
              </div>
            </div>

            <div class="col-sm-4">
              <button
                type="submit"
                class="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AboutCompanyListEdit;
