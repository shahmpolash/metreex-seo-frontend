import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";
const TestimonialsList = () => {
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState([]);
  const [title, setTitle] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);

  let rowNumber = 1;

  const handleTestimonials = (event) => {
    event.preventDefault();
    const personName = event.target.personName.value;
    const personTitle = event.target.personTitle.value;
    const personImg = event.target.personImg.value;
    const desc = event.target.desc.value;

    const testimonial = {
      personName,
      personTitle,
      personImg,
      desc,
    };

    const url = `https://e-commerce-seo-server.onrender.com/testimonial`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonial),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };
  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/testimonials-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, [id]);

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form class="form seo-form" onSubmit={handleTestimonials}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Person Name</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Name"
                  name="personName"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Person Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Title"
                  name="personTitle"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Person Image</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Image"
                  name="personImg"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Testimonial Description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Testimonial Description"
                  name="desc"
                />
              </div>
            </div>

            <div class="col-sm-3">
              <button
                type="submit"
                class="btn btn-md btn-primary tra-black-hover"
              >
                <span>Add Testimonial</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* add title which are center */}

      <div className="container">
       

        <div class="container">
          <div class="justify-content-center align-items-baseline mt-30"></div>
          <div class="col-sm">
         
            {title.map((e) => (
              <>
                <Link
                  to={`/admin/edit-testimonial-title/${e._id}`}
                  class="col-sm-3 btn btn-green tra-black-hover mb-20"
                >
                  <span>Update Testimonial Title</span>
                </Link>
              </>
            ))}
             <h3 className="text-center mb-15"> Testimonial List</h3>
          </div>
        </div>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Person Name</th>

              <th>Edit</th>
            </tr>
            {testimonial.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.personName}</td>

                <td>
                  <Link to={`/admin/testimonial-edit/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestimonialsList;
