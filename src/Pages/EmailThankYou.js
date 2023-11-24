import React from "react";
import { Link } from "react-router-dom";

const EmailThankYou = () => {
  return (
    <section className="watch-video py-5">
      <div className="shape" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h5>Congratulations! 🚀 Your SEO report is on its way</h5>
              <p className="lead">
                We've received your website and email, and our SEO wizards are already hard at work, analyzing your online presence.
              </p>
              <img
                className="img-fluid mt-4 rounded"
                src="https://i.ibb.co/Qc7FKJ7/Seo-Report.png"
                alt="SEO Report"
                style={{ transition: "transform 0.3s ease-in-out", borderRadius: "15px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailThankYou;
