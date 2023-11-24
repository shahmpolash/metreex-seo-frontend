import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const SettingPayment = () => {
  const { id } = useParams();
  const [paymentEmail, setPaymentEmail] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/payments`)
      .then((res) => res.json())
      .then((info) => setPaymentEmail(info));
  }, []);

  return (
    <>
      {paymentEmail.map((payment) => (
        <>
          <section
            className="banner s2"
            data-aos="fade-up"
            data-aos-duration={3000}
          >
            <div className="shape" />
            <div className="shape right" />
            <div className="container">
              <BackToAdminDashboard></BackToAdminDashboard>

              <div className="form-holder text-center centered-form-container">
                <div className="col-12">
                  <h4 className="heading text-center mb-20">
                    Your Paypal Email
                  </h4>
                </div>
                <form name="seoForm" className="row form seo-form">
                  <div id="input-email" className="col-lg-6">
                    <input
                      readOnly
                      type="text"
                      name="email"
                      className="form-control email text-center"
                      placeholder="Email Address*"
                      value={payment.email}
                    />
                  </div>

                  <div className="col-lg-3 form-btn">
                    <Link
                      to={`/admin/paypal/${payment._id}`}
                      type="submit"
                      className="btn btn-primary black-hover submit"
                    >
                      Want to Update
                    </Link>
                  </div>

                  <div className="col-lg-12 seo-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default SettingPayment;
