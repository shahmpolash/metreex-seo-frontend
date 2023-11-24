import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditFeature = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feature, setFeature] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imgbbApiKey] = useState("1f8cc98e0f42a06989fb5e2589a9a8a4");

  useEffect(() => {
    fetch(`http://localhost:5000/feature/${id}`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, [id]);

  const handleFeature = async (event) => {
    event.preventDefault();

    const featureTitle = event.target.featureTitle.value;
    const featureDescOne = event.target.featureDescOne.value;
    const featureDescTwo = event.target.featureDescTwo.value;
    const featureDescThree = event.target.featureDescThree.value;
    const counterTitleOne = event.target.counterTitleOne.value;
    const couterDescOne = event.target.couterDescOne.value;
    const counterNumberOne = event.target.counterNumberOne.value;
    const counterTitleTwo = event.target.counterTitleTwo.value;
    const couterDescTwo = event.target.couterDescTwo.value;
    const counterNumberTwo = event.target.counterNumberTwo.value;

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
      featureDescOne,
      featureDescTwo,
      featureDescThree,
      counterTitleOne,
      couterDescOne,
      counterNumberOne,
      counterTitleTwo,
      couterDescTwo,
      counterNumberTwo,
    };

    const url = `http://localhost:5000/feature/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFeature),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/feature-page");
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
              <span>Edit Features One</span>
            </h4>

            <div className="col-sm">
              <label className="mt-1">Enter Feature Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Title"
                  name="featureTitle"
                  defaultValue={feature.featureTitle}
                />
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">
                Enter Feature Short Description One
              </label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Short Description"
                  name="featureDescOne"
                  defaultValue={feature.featureDescOne}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">
                Enter Feature Short Description Two
              </label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Short Description"
                  name="featureDescTwo"
                  defaultValue={feature.featureDescTwo}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">
                Enter Feature Short Description Three
              </label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Feature Short Description"
                  name="featureDescThree"
                  defaultValue={feature.featureDescThree}
                />
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">Enter Counter Title One</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Counter Title One"
                  name="counterTitleOne"
                  defaultValue={feature.counterTitleOne}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Counter Description One</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Counter Description One"
                  name="couterDescOne"
                  defaultValue={feature.couterDescOne}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Counter Number One</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Counter Number One"
                  name="counterNumberOne"
                  defaultValue={feature.counterNumberOne}
                />
              </div>
            </div>

            {/* Two */}
            <div className="col-sm">
              <label className="mt-1">Enter Counter Title Two</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Counter Title Two"
                  name="counterTitleTwo"
                  defaultValue={feature.counterTitleTwo}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Counter Description Two</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Counter Description Two"
                  name="couterDescTwo"
                  defaultValue={feature.couterDescTwo}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Counter Number Two</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Counter Number Two"
                  name="counterNumberTwo"
                  defaultValue={feature.counterNumberTwo}
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
                <span>Update Feature</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFeature;
