import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const UserDashboardMenu = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  // Filter the orders with paymentStatus === "Received"
  const receivedOrders = orders.filter(
    (order) =>
      order.paymentStatus === "Received" && order.customerEmail === user?.email
  );

  // Calculate the total spend
  const totalSpend = receivedOrders.reduce(
    (total, order) => total + parseFloat(order.packagePrice),
    0
  );

  return (
    <>
      <section className="project s2">
        <div className="shape right" />
        <div className="container">
          <div className="row mb-15">
            <div
              className="col"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div>
                {user ? (
                  <Link
                    className="btn btn-md btn-primary tra-black-hover mt-20"
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
            <div className="col-md-6 col-lg-4">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/user-dashboard/my-orders/">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/working-concept-illustration_114360-330.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">
                        {" "}
                        My Orders <br></br>(Total Orders:{" "}
                        {receivedOrders.length})
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/working-concept-illustration_114360-330.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">Total Spent ({totalSpend}$)</h3>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-2 wow fadeInUp">
                <Link to="/user-dashboard/support/">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/working-concept-illustration_114360-330.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />

                    <div className="project-description white-color">
                      <h3 className="p-md">Support</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboardMenu;
