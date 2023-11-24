import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import axios from "axios";
import BackToAdminDashboard from "./BackToAdminDashboard";

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [p, setPackage] = useState([]);
  const [user] = useAuthState(auth);
  const [imgUrl, setImgUrl] = useState(p.img || "");
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=1f8cc98e0f42a06989fb5e2589a9a8a4",
        formData
      );
      setImgUrl(response.data.data.url);
    } catch (error) {
      console.error("Image upload failed: ", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/package/${id}`)
      .then((res) => res.json())
      .then((info) => setPackage(info));
    setImgUrl(p.img || "");
  }, [id]);

  let rowNumber = 1;

  const handlePackages = (event) => {
    event.preventDefault();
    const packageName = event.target.packageName.value;
    const price = event.target.price.value;
    const featureOne = event.target.featureOne.value;
    const featureTwo = event.target.featureTwo.value;
    const featureThree = event.target.featureThree.value;
    const featureFour = event.target.featureFour.value;
    const featureFive = event.target.featureFive.value;
    const featureSix = event.target.featureSix.value;
    const featureSeven = event.target.featureSeven.value;
    const featureEight = event.target.featureEight.value;
    const featureNine = event.target.featureNine.value;
    const featureTen = event.target.featureTen.value;

    const websiteCheck = {
      packageName,
      price,
      img: imgUrl,
      featureOne,
      featureTwo,
      featureThree,
      featureFour,
      featureFive,
      featureSix,
      featureSeven,
      featureEight,
      featureNine,
      featureTen,
    };

    const url = `http://localhost:5000/edit-package/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/packages/");
      });
  };

  return (
    <div>
      <BackToAdminDashboard></BackToAdminDashboard>
      <form className="form seo-form centered-form-container" onSubmit={handlePackages}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <div className="col-sm">
              <label className="mt-1 mb-15">Package Name</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control email"
                  placeholder="Type Package Name"
                  name="packageName"
                  defaultValue={p.packageName}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Package Price</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={p.price}
                  placeholder="Enter Package Price"
                  name="price"
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Upload Image</label>
              <div className="form-group mb-3">
                <label for="file-upload" className="custom-file-input">
                  Choose File
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="custom-file-input__1"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {imgUrl && (
                  <img src={imgUrl} alt="Uploaded" style={{ width: "100px" }} />
                )}
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">Feature One</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature One"
                  name="featureOne"
                  defaultValue={p.featureOne}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Two</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Two"
                  name="featureTwo"
                  defaultValue={p.featureTwo}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Three</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type feature Three"
                  name="featureThree"
                  defaultValue={p.featureThree}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Four</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Four"
                  name="featureFour"
                  defaultValue={p.featureFour}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Five</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Five"
                  name="featureFive"
                  defaultValue={p.featureFive}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Six</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Six"
                  name="featureSix"
                  defaultValue={p.featureSix}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Seven</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Seven"
                  name="featureSeven"
                  defaultValue={p.featureSeven}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Eight</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Eight"
                  name="featureEight"
                  defaultValue={p.featureEight}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Nine</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Nine"
                  name="featureNine"
                  defaultValue={p.featureNine}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Feature Ten</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Feature Ten"
                  name="featureTen"
                  defaultValue={p.featureTen}
                />
              </div>
            </div>

            <div className="col-sm-4">
              <button
                type="submit"
                className="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update Package</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPackage;
