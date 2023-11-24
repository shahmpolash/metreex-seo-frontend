import React, { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [logo, setLogo] = useState([]);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error("Error sending password reset email", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  return (
    <>
      <div
        className="main-content payment-setting mt-100"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div className="page-content">
          <section className="bg-auth">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div
                    className="card auth-box mb-15"
                    style={{ background: "#35344c" }}
                  >
                    <div className="row g-0">
                      <div className="col-lg-6 text-center">
                        <div className="card-body p-4">
                          {logo.map((e) => (
                            <Link to="/">
                              <img src={e.logo} alt="logo" />
                            </Link>
                          ))}
                          <div className="mt-5">
                            <img
                              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg"
                              alt=""
                              className="img-fluid login__img"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 h-100 text-white">
                          <div className="w-100 mt-100">
                            <div className="text-center mb-4">
                              <h2 className="text-white">Reset Password !</h2>
                            </div>

                            {resetSent ? (
                              <div className="text-center mb-4">
                                <h5 className="text-white">Password reset. Check your inbox!</h5>
                              </div>
                            ) : (
                              <>
                                <input
                                  type="email"
                                  className="form-control mb-30"
                                  placeholder="Enter your exiting email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />

                                <div className="text-center">
                                  <button
                                    onClick={handleResetPassword}
                                    type="submit"
                                    className="btn btn-green tra-white-hover last-link"
                                  >
                                    <span> Send Reset Email</span>
                                  </button>
                                </div>
                              </>
                            )}
                            <div className="mt-4 text-center">
                              <p className="mb-0">
                                Have an account ?{" "}
                                <Link
                                  to="/login"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Login Now{" "}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
