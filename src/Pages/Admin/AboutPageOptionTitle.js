import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";
const AboutPageOptionTitle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about-page-titles`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, [id]);

  const handleTitle = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const desc = event.target.desc.value;

    const updateTitle = {
      title,
      desc,
    };

    const url = `http://localhost:5000/edit-about-page-title/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTitle),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  return (
    <div
      className="payment-setting"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <BackToAdminDashboard></BackToAdminDashboard>
      <form
        class="form seo-form centered-form-container"
        onSubmit={handleTitle}
      >
        {title.map((e) => (
          <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Title"
                  name="title"
                  defaultValue={e.title}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter description"
                  name="desc"
                  defaultValue={e.desc}
                />
              </div>
            </div>

            <div class="col-sm-3">
              <button
                type="submit"
                class="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update Title</span>
              </button>
            </div>
          </div>
        </div>
        ))}
      </form>
    </div>
  );
};

export default AboutPageOptionTitle;
