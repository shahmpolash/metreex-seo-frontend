import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const InCompleteAuditRequest = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
  const itemsPerPage = 10; // Adjust the number of items per page as needed
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/website`)
      .then((res) => res.json())
      .then((info) => setData(info.reverse()));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUsers(info.reverse()));
  }, []);

  const filteredData = data.filter((item) => item.auditStatus === "Incomplete");
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const displayData = filteredData
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .map((item, index) => (
      <tr key={item._id}>
        <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
        <td data-th="Website Name">{item.website}</td>
        <td data-th="Email">{item.email}</td>
        <td data-th="Email">{item.auditStatus}</td>
        <td data-th="Edit">
          <Link to={`/admin/website-edit/${item._id}`}>View & Update</Link>
        </td>
        <td>-</td>
      </tr>
    ));

    const renderPaginationLinks = () => {
      const links = [];
      for (let i = 1; i <= pageCount; i++) {
        links.push(
          <li key={i} className={`page-item ${i === currentPage ? "active" : ""}`}>
            <Link
              onClick={() => handlePageChange(i)}
              className="page-link"
            >
              {i}
            </Link>
          </li>
        );
      }
      return (
        <nav aria-label="Pagination">
          <ul className="pagination">
            {links}
          </ul>
        </nav>
      );
    };

  return (
    <div className="centered-form-container">
      <BackToAdminDashboard></BackToAdminDashboard>
      {users.map(
        (u) =>
          user?.email === u.userEmail &&
          (u.userRole === "Admin" || u.userRole === "Manager") && (
            <div
              className="payment-setting"
              data-aos="fade-up"
              data-aos-duration={2000}
            >
              <div className="container">
                <h5 className="text-center mt-15">Audit Request</h5>
                <div className="custom-ordermenu">
                  <div className="header__right container custom-orders">
                    <nav id="main-nav" className="main-nav">
                      <ul
                        id="menu-primary-menu"
                        className="menu custom-orders-ul"
                      >
                        <li className="menu-item menu-item-has-children">
                          <Link
                            to="/admin/complete-audit-request/"
                            class="btn btn-green tra-black-hover mb-20"
                          >
                            Complete Audit Request
                          </Link>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <Link
                            to="/admin/incomplete-audit-request/"
                            class="btn btn-green tra-black-hover mb-20"
                          >
                            Incomplete Audit Request
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <table className="rwd-table">
                  <tbody>
                    <tr>
                      <th>SL No.</th>
                      <th>Website Name</th>
                      <th>Email</th>
                      <th>Audit Status</th>
                      <th>Edit</th>
                      <th>-</th>
                    </tr>
                    {displayData}
                  </tbody>
                </table>
                <div className="pagination d-flex justify-content-center">
                  <ul className="list-unstyled">
                    <li>
                      <div>{renderPaginationLinks()}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default InCompleteAuditRequest;
