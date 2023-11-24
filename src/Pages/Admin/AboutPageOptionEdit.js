import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const AboutPageOptionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [about, setAbout] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [storedImage, setStoredImage] = useState("");
  const imgbbApiKey = "1f8cc98e0f42a06989fb5e2589a9a8a4"; // Your imgbb API key

  const handleEditAbout = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const subText = event.target.subText.value;

    let img = imageFile ? imagePreview : storedImage;

    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("key", imgbbApiKey);

        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );

        img = imgbbResponse.data.data.url;
      } catch (error) {
        console.error("Image upload to imgbb failed:", error);
        return;
      }
    }

    const updateAbout = {
      img,
      title,
      subText,
    };

    const url = `http://localhost:5000/edit-about-page/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAbout),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    const previewURL = URL.createObjectURL(selectedFile);
    setImagePreview(previewURL);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/about-page/${id}`)
      .then((res) => res.json())
      .then((info) => {
        const storedImg = info.img; // Access 'img' directly from the response
        setAbout(info); // Set the entire 'info' object in 'about' state
        setStoredImage(storedImg);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div
      className="centered-form-container"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form seo-form" onSubmit={handleEditAbout}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Banner Image</label>
              <div class="form-group mb-3">
                <input
                  type="file"
                  class="form-control"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Images Preview"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {!imageFile && !imagePreview && storedImage && (
                <img
                  src={storedImage}
                  alt="Storeds"
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Banner Title"
                  name="title"
                  defaultValue={about.title}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner About Text</label>
              <div class="form-group mb-3">
                <textarea
                  type="text"
                  style={{ width: "100%", minHeight: "200px" }}
                  class="form-control"
                  placeholder="Your Sub Text"
                  name="subText"
                  defaultValue={about.subText}
                />
              </div>
            </div>

            <div class="col-sm-4">
              <button
                type="submit"
                class="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update About</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AboutPageOptionEdit;
