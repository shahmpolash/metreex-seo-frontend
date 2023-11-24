import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditOurSolutions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feature, setFeature] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imgbbApiKey] = useState("1f8cc98e0f42a06989fb5e2589a9a8a4");

  useEffect(() => {
    fetch(`http://localhost:5000/solution/${id}`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, [id]);

  const handleFeature = async (event) => {
    event.preventDefault();

    const featureTitle = event.target.featureTitle.value;
    const featureDesc = event.target.featureDesc.value;

    // Determine if an image is being uploaded or if a stored image link should be used
    let featureImg = feature.img;

    if (!imageFile && feature.featureImg) {
      featureImg = feature.featureImg;
    }

    // If an image is being uploaded, send it to imgbb
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("key", imgbbApiKey);

        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );

        featureImg = imgbbResponse.data.data.url;
      } catch (error) {
        console.error("Image upload to imgbb failed:", error);
        return;
      }
    }

    const updatedFeature = {
      featureImg,
      featureTitle,
      featureDesc,
    };

    const url = `http://localhost:5000/solution/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFeature),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/solution-lists");
      });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    const previewURL = URL.createObjectURL(selectedFile);
    setImagePreview(previewURL);
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form mb-15 seo-form" onSubmit={handleFeature}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <h4 className="sub-heading">
              <span>Edit Solution Option</span>
            </h4>

            <div className="col-sm">
              <label className="mt-1">Enter Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  name="featureTitle"
                  defaultValue={feature.featureTitle}
                />
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">
                Enter Short Description
              </label>
              <div className="form-group mb-3">
                <textarea
                  type="text"
                  style={{ width: "100%", height: "100px" }}
                  className="form-control"
                  placeholder="Enter Feature Short Description"
                  name="featureDesc"
                  defaultValue={feature.featureDesc}
                />
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">Upload Feature Image</label>
              <div className="form-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Images"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {!imageFile && !imagePreview && feature.featureImg && (
                <img
                  src={feature.featureImg}
                  alt="Stored Images"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {!imageFile && !imagePreview && !feature.featureImg && (
                <img
                  src="default-image-url-here"
                  alt="features_image"
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
            <div className="col-sm-4">
              <button
                type="submit"
                className=" mt-20 btn btn-md btn-primary tra-black-hover"
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

export default EditOurSolutions;
