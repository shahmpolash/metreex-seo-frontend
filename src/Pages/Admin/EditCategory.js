import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/category/${id}`)
      .then((res) => res.json())
      .then((info) => setCategory(info));
  }, [id]);

  const handleEditCategory = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;
    const editCategory = { Category };

    const url = `https://e-commerce-seo-server.onrender.com/edit-category/${category._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editCategory),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate(`/admin/categories`);
      });
  };

  return (
    <div>
      <form className="new-category" onSubmit={handleEditCategory}>
        <input
          type="text"
          defaultValue={category.Category}
          placeholder="New category name"
          name="Category"
        ></input>
        <input type="submit" className="btn ml-5" value="Edit Now"></input>
      </form>
    </div>
  );
};

export default EditCategory;
