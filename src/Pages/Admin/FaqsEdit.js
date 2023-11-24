import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";
const FaqsEdit = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:5000/faq/${id}`)
      .then((res) => res.json())
      .then((info) => setFaqs(info));
  }, [id]);



  const handleFaqs = (event) => {
    event.preventDefault();
    const question = event.target.question.value;
    const answer = event.target.answer.value;

    const faq = {
      question,
      answer,
    };

    const url = `http://localhost:5000/faq/${id}/`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(faq),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/faqs");
      });
  };

  return (
    <>
    <BackToAdminDashboard></BackToAdminDashboard>
    <div className="form seo-form centered-form-container"> 
      <form class="form" onSubmit={handleFaqs}>
        <h4 className="mb-15 text-center">Add Faqs Question</h4>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Question</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Question"
                  name="question"
                  defaultValue={faqs.question}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Answer</label>
              <div class="form-group mb-3">
                <input
                  type="textarea"
                  class="form-control"
                  placeholder="Enter Answer"
                  name="answer"
                  defaultValue={faqs.answer}
                />
              </div>
            </div>

            <div class="col-sm-3">
              <button type="submit" class="btn btn-md btn-primary tra-black-hover">
                <span>Update Faq</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default FaqsEdit;
