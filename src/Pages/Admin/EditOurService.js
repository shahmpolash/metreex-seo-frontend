import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditOurService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setServices] = useState([]);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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

        const url = `http://localhost:5000/service/${id}`;
        const sliderResponse = await fetch(url, {
          method: "PUT",
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
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((info) => setServices(info));
  }, []);

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form seo-form" onSubmit={handleService}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <h4 className="sub-heading">
              <span>Edit Services</span>
            </h4>
            <div className="col-sm">
              <label className="mt-1">Enter Service Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Service Title"
                  name="serviceTitle"
                  defaultValue={service.serviceTitle}
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
                  defaultValue={service.serviceDesc}
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
            <div className="form-group mb-3">
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Service Preview"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              )}
              {service.featureImg && !previewImage && (
                <img
                  src={service.featureImg}
                  alt="Current Service"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              )}
            </div>
            <div className="col-sm-4">
              <button
                type="submit"
                className="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update Now</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditOurService;
