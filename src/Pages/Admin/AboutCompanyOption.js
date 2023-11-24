import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const AboutCompanyOption = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [counter, setCounter] = useState([]);
  const [companyAbount, setCompanyAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-company-list`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/company-about-title`)
      .then((res) => res.json())
      .then((info) => setCompanyAbout(info));
  }, []);

  let rowNumber = 1;

  const handleCounter = (event) => {
    event.preventDefault();
    const counterNumber = event.target.counterNumber.value;
    const counterTitle = event.target.counterTitle.value;

    const about = {
      counterTitle,
      counterNumber,
    };

    const url = `http://localhost:5000/add-about-company`;
    fetch(url, {
      method: "POST",
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
      {/* <form class="form" onSubmit={handleCounter}>
        <h4 className="mb-15">Add Counter</h4>
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
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Add Counter</span>
              </button>
            </div>
          </div>
        </div>
      </form> */}
      <BackToAdminDashboard></BackToAdminDashboard>

      <div className="container">
        {companyAbount.map((e) => (
          <Link
            to={`/admin/company-about-edit/${e._id}`}
            className="col-sm-4 btn btn-green tra-black-hover"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Edit Company About
          </Link>
        ))}

        <h5 className="mt-30">Counter List</h5>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Title</th>

              <th>Edit</th>
            </tr>
            {counter.map((item, index) => (
              <tr key={item._id}>
                <td data-th="SL No.">{rowNumber++}</td>
                <td data-th="Title">{item.counterTitle}</td>

                <td data-th="Edit">
                  <Link to={`/admin/company-option/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutCompanyOption;
