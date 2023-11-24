import React from "react";
import { Link } from "react-router-dom";

const BackToAdminDashboard = () => {
  return (
    <div
      className="header__action mt-20 mb-20"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        className="btn btn-md btn-primary tra-black-hover"
        to="/admin/dashboard"
      >
        <span> Admin Dashboard</span>
      </Link>
    </div>
  );
};

export default BackToAdminDashboard;
