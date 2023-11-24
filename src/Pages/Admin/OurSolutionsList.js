import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const OurSolutionsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feature, setFeature] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState(null);

  let rowNumber = 1;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleFeature = async (event) => {
    event.preventDefault();

    const featureDesc = event.target.featureDesc.value;
    const featureTitle = event.target.featureTitle.value;

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
          featureDesc,
          featureTitle,
          featureImg,
        };

        const url = `http://localhost:5000/add-solution`;
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
    fetch(`http://localhost:5000/solutions`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/solutions-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>

      <div className="container">
        <div className="justify-content-center align-items-baseline">
          {
            title.map(e =>
              <Link
            to={`/admin/soution-title-edit/${e._id}`}
            className="col-sm-3 btn btn-green tra-black-hover mb-20"
          >
            Edit Title
          </Link>)
          }
        </div>
      </div>

      <form className="form seo-form" onSubmit={handleFeature}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <h4 className="sub-heading">
              <span>Add Our Solutions Items</span>
            </h4>
            <div className="col-sm">
              <label className="mt-1">Enter Feature Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Title"
                  name="featureTitle"
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Feature Short Description</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Short Description"
                  name="featureDesc"
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Upload Feature Image</label>
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
            {feature.map((item) => (
              <tr key={item._id}>
                <td data-th="SL No.">{rowNumber++}</td>
                <td data-th="Title">{item.featureTitle}</td>
                <td data-th="Edit">
                  <Link to={`/admin/edit-solution/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurSolutionsList;
