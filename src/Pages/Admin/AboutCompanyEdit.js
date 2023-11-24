import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const AboutCompanyEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [companyAbount, setCompanyAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/company-about-title/`)
      .then((res) => res.json())
      .then((info) => setCompanyAbout(info));
  }, []);

  const handleCounter = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const companyName = event.target.companyName.value;
    const Desc = event.target.Desc.value;

    const about = {
      name,
      companyName,
      Desc,
    };

    const url = `http://localhost:5000/company-about-title/${id}`;
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
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      {companyAbount.map((e) => (
        <form
          class="form seo-form centered-form-container"
          onSubmit={handleCounter}
        >
          <h4 className="mb-15 text-center">Update Company About</h4>
          <div class="container">
            <div class="justify-content-center align-items-baseline">
              <div class="col-sm">
                <label className="mt-1">Enter Person Name</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Person Name"
                    name="name"
                    defaultValue={e.name}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Company Name</label>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Conpany Name"
                    name="companyName"
                    defaultValue={e.companyName}
                  />
                </div>
              </div>
              <div class="col-sm">
                <label className="mt-1">Enter Company Description</label>
                <div class="form-group mb-3">
                  <textarea
                style={{ width: '100%', height: '100px' }}
                    type="text"
                    class="form-control"
                    placeholder="Enter Company Description"
                    name="Desc"
                    defaultValue={e.Desc}
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
      ))}
    </div>
  );
};

export default AboutCompanyEdit;
