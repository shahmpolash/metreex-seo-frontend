import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const PaymentsRefunded = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  // Filter orders with paymentStatus === "Refunded"
  const pendingOrders = orders.filter(
    (order) => order.paymentStatus === "Refunded"
  );

  const paginatedOrders = pendingOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(pendingOrders.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="p-3">
        <h4 className="text-center">Total Refunded Payments</h4>
        <OrderMenu></OrderMenu>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Date</th>
              <th>Name</th>
              <th>Package</th>
              <th>Price</th>
              <th>Website</th>
              <th>Email</th>
              <th>Note</th>
              <th>Payment Status</th>
              <th>Edit</th>
            </tr>
            {paginatedOrders.map((item, index) => (
              <tr key={item._id}>
                <td data-th="SL No.">
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </td>
                <td data-th="Date">{item.orderDate}</td>
                <td data-th="Name">{item.customerName}</td>
                <td data-th="Package">{item.packageName}</td>
                <td data-th="Price">${item.packagePrice}</td>
                <td data-th="Website">{item.customerWebsite}</td>
                <td data-th="Email">{item.customerEmail}</td>
                <td data-th="Note">{item.customerNote}</td>
                <td data-th="Payment Status">{item.paymentStatus}</td>

                <td data-th="Edit">
                  <Link to={`/admin/order/${item._id}`}>Action</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="row">
            <div class="col-md-12">
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                  {Array.from({ length: totalPages }, (_, index) => (
              <li className="page-item" key={index}>
                <Link
                  onClick={() => changePage(index + 1)}
                  className={currentPage === index + 1 ? "active , page-item" : ""}
                >
                  {index + 1}
                </Link>
              </li>
            ))}
                </ul>
              </nav>
            </div>
          </div>

      </div>
    </>
  );
};

export default PaymentsRefunded;
