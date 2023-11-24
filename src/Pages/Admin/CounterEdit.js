import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";
const CounterEdit = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/counter/${id}`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, [id]);

  const handleUpdateCounter = (event) => {
    event.preventDefault();
    const counterNumber = event.target.counterNumber.value;
    const counterTitle = event.target.counterTitle.value;

    const counter = {
      counterNumber,
      counterTitle,
    };

    const url = `http://localhost:5000/counter/${id}/`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(counter),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div>
        <BackToAdminDashboard></BackToAdminDashboard>
      <form class="form seo-form" onSubmit={handleUpdateCounter}>
        <h4 className="mb-15 text-center">Update Counter</h4>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Edit Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title"
                  name="counterTitle"
                  defaultValue={counter.counterTitle}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Edit Number</label>
              <div class="form-group mb-3">
                <input
                  type="textarea"
                  class="form-control"
                  placeholder="Type Number"
                  name="counterNumber"
                  defaultValue={counter.counterNumber}
                />
              </div>
            </div>

            <div class="col-sm-4">
              <button type="submit" class="btn btn-md btn-primary tra-black-hover">
                <span>Update Counter</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CounterEdit;
