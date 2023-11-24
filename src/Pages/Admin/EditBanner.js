import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditBanner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/banner/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setBanner(info);
        if (info.length > 0) {
          setImageURL(info[0].bunnerImage);
        }
      });
  }, [id]);

  const [user] = useAuthState(auth);

  const handleBanner = (event) => {
    event.preventDefault();
    const bannerHeading = event.target.bannerHeading.value;
    const buttonText = event.target.buttonText.value;
    const bannertext = event.target.bannertext.value;

    const updateBanner = {
      bannerHeading,
      buttonText,
      bannertext,
      bunnerImage: imageURL,
    };

    const url = `http://localhost:5000/edit-banner/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBanner),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    fetch("https://api.imgbb.com/1/upload?key=1f8cc98e0f42a06989fb5e2589a9a8a4", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImageURL(data.data.url);
      })
      .catch((error) => {
        console.error("Image upload error:", error);
      });
  };

  return (
    <div>
      <BackToAdminDashboard />
      <form className="form mb-15 seo-form" onSubmit={handleBanner}>
        {banner.map((e) => (
          <div className="container" key={e._id}>
            <div className="col-sm">
              <label className="mt-1">Enter Banner Heading</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Banner Heading"
                  name="bannerHeading"
                  defaultValue={e.bannerHeading}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Banner Button Text</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Banner Button Text"
                  name="buttonText"
                  defaultValue={e.buttonText}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Upload Banner Image</label>
              <div className="form-group mb-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="form-control"
                />
              </div>
              {imageURL && (
                <img src={imageURL} alt="Banner Preview" style={{ maxWidth: "50%", maxHeight:"200px" }} />
              )}
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Banner Paragraph</label>
              <div className="form-group mb-3">
                <textarea
                  type="text"
                  style={{ width: "100%", height: "100px" }}
                  className="form-control"
                  placeholder="Enter Banner Paragraph"
                  name="bannertext"
                  defaultValue={e.bannertext}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <button type="submit" className="btn btn-md btn-primary tra-black-hover">
                <span>Update Banner</span>
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default EditBanner;
