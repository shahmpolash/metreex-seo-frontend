import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const OurServicesList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setServices] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState(null);

  let rowNumber = 1;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleService = async (event) => {
    event.preventDefault();

    const serviceDesc = event.target.serviceDesc.value;
    const serviceTitle = event.target.serviceTitle.value;

    if (!image) {
      alert("Please select an image for the slider.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    // Upload the image to ImgBB using the ImgBB API key
    const imgbbApiKey = "1f8cc98e0f42a06989fb5e2589a9a8a4";
    const imgbbUploadUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    try {
      const response = await fetch(imgbbUploadUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const featureImg = data.data.url;

        const solution = {
          serviceDesc,
          serviceTitle,
          featureImg,
        };

        const url = `http://localhost:5000/add-service`;
        const sliderResponse = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(solution),
        });

        if (sliderResponse.ok) {
          navigate("/admin/setting-homepage");
        } else {
          alert("Failed to add feature.");
        }
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/services-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form seo-form" onSubmit={handleService}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            {title.map((e) => (
              <Link
                to={`/admin/service-title-edit/${e._id}`}
                className="col-sm-3 btn btn-green tra-black-hover mb-20"
              >
                Edit Title
              </Link>
            ))}
            <h4 className="sub-heading">
              <span>Add Our Services</span>
            </h4>
            <div className="col-sm">
              <label className="mt-1">Enter Service Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Service Title"
                  name="serviceTitle"
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Service Short Description</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Service Short Description"
                  name="serviceDesc"
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Upload Service Image</label>
              <div className="form-group mb-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <button
                type="submit"
                className="btn btn-md btn-primary tra-black-hover"
              >
                <span>Add Now</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="container">
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Title</th>
              <th>Edit</th>
            </tr>
            {service.map((item) => (
              <tr key={item._id}>
                <td data-th="SL No.">{rowNumber++}</td>
                <td data-th="Title">{item.serviceTitle}</td>
                <td data-th="Edit">
                  <Link to={`/admin/service-edit/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurServicesList;
