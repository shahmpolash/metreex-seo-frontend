import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const AboutUsServiceList = () => {
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

    const url = `http://localhost:5000/add-about/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAbout),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    const previewURL = URL.createObjectURL(selectedFile);
    setImagePreview(previewURL);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/abouts`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);

  let rowNumber = 1;

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
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Banner Title"
                  name="title"
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
                />
              </div>
            </div>

            <div class="col-sm-4">
              <button
                type="submit"
                class="btn btn-md btn-primary tra-black-hover"
              >
                <span>Add</span>
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
            {about.map((item) => (
              <tr key={item._id}>
                <td data-th="SL No.">{rowNumber++}</td>
                <td data-th="Title">{item.title}</td>
                <td data-th="Edit">
                  <Link to={`/admin/about-edit/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUsServiceList;
