import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";
const TestimonialTitle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonial-title/${id}`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, [id]);

  const handleTitle = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const desc = event.target.desc.value;
    const reviewNumber = event.target.reviewNumber.value;

    const testimonialTitle = {
      title,
      desc,
      reviewNumber,
    };

    const url = `http://localhost:5000/testimonial-title/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonialTitle),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <>
    <BackToAdminDashboard></BackToAdminDashboard>
    <div className="payment-setting" data-aos="fade-up" data-aos-duration={2000}>
      <form class="form seo-form centered-form-container" onSubmit={handleTitle}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Reviews Number</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Reviews Number"
                  name="reviewNumber"
                  defaultValue={title.reviewNumber}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Title"
                  name="title"
                  defaultValue={title.title}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Short Description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Short Description"
                  name="desc"
                  defaultValue={title.desc}
                />
              </div>
            </div>

            <div class="col-sm-3">
              <button type="submit" class="btn btn-md btn-primary tra-black-hover">
                <span>Update Title</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default TestimonialTitle;
