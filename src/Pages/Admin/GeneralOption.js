import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const GeneralOption = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  return (
    <div>
      <section
        className="participants payment-setting"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="container">
          <div className="row">
            <BackToAdminDashboard></BackToAdminDashboard>
            <div className="col-12">
              <div className="block-text center">
                <div className="col-md-4">
                  {logo.map((logoImg) => (
                    <div key={logoImg._id} className="blog-box mt-20">
                      <h5 className="heading mb-3">
                        Logo Option for {logoImg.logoFor}
                      </h5>
                      <img
                        className="mb-15 footer__logo"
                        src={logoImg.logo}
                        width={190}
                        height={45}
                        alt=""
                      />
                      <hr />
                      <p>Logo Size: width="160px" height: "40px"</p>
                      <Link
                        to={`/admin/update-logo/${logoImg._id}`}
                        className="btn btn-md btn-primary tra-black-hover"
                      >
                        <span>Update Logo</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralOption;
