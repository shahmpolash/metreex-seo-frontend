import React from "react";
import { Link } from "react-router-dom";

const NewsLetterThank = () => {
  return (
    <section className="watch-video py-5">
      <div className="shape" />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h5 className="mb-4">Thank you for subscribing to our newsletter! 🚀</h5>
              <p className="lead">
                We are thrilled to have you on board and look forward to keeping you informed and engaged with our updates.
              </p>
              <img
                className="img-fluid mt-4 rounded"
                src="https://img.freepik.com/free-vector/newsletter-illustration-concept_114360-777.jpg"
                alt="Newsletter Illustration"
                style={{ transition: "transform 0.3s ease-in-out" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterThank;
