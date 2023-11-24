import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import BackToAdminDashboard from "./BackToAdminDashboard";

const DashboardMenu = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <>
      {/* <section className="project s2">
        <div className="shape right" />
        <div className="container">
          <div className="row">
            <div className="row mb-15">
              <div
                className="col"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div>
                  {user ? (
                    <Link className="action-btn" onClick={handleSignout}>
                      <span>Signout</span>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/packages/" className="h5 title">
                    Packages (edit)
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/orders/" className="h5 title">
                    Total Orders
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting" className="h5 title">
                    Setting Option
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/help-desk/" className="h5 title">
                    Help Desk
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/subscription-email/" className="h5 title">
                    Subscription Email
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/contact-messages/" className="h5 title">
                    Contact Messages
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/manage-users/" className="h5 title">
                    Manage Users
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/audit-request/" className="h5 title">
                    Audit Request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container">
        <section id="projects-2" className="wide-70 projects-section division">
          <div className="container">
            <div className="row mb-15">
              <div
                className="col"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div>
                  {user ? (
                    <Link
                      className="btn btn-md btn-primary tra-black-hover"
                      onClick={handleSignout}
                    >
                      <span>Signout</span>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/packages/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md"> Packages (edit)</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/orders/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/order-now-square-banner_23-2148721758.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md"> Total Orders</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/process-concept-illustration_114360-6763.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">  Setting Option</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/help-desk/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Help Desk</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/subscription-email/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-516.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Subscription Email</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/contact-messages/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-2081.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Contact Messages</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/manage-users/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/selecting-team-concept-illustration_114360-5423.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Manage Users</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/audit-request/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/documentation-management-colorful-icon-female-cartoon-character-putting-document-big-yellow-folder-files-storage-sorting-organization_335657-846.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Audit Request</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

            
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardMenu;
