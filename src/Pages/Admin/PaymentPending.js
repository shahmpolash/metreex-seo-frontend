import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const PaymentPending = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const paginationDigits = 3;

  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  // Filter orders with paymentStatus === "Pending"
  const pendingPayment = orders.filter(
    (order) => order.paymentStatus === "Pending"
  );

 // Pagination function
 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};
  const totalPendingPayment = pendingPayment.length;

  const totalPages = Math.ceil(totalPendingPayment / itemsPerPage);

  // Calculate the range of pagination digits
  const startDigit = Math.max(
    1,
    currentPage - Math.floor(paginationDigits / 2)
  );
  const endDigit = Math.min(startDigit + paginationDigits - 1, totalPages);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pendingPayment.slice(indexOfFirstItem, indexOfLastItem);





 

  return (
    <>
      <div className="hight-full p-3">
        <h4 className="text-center">Total Pending Payments</h4>
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
            {currentItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{item.orderDate}</td>
                <td>{item.customerName}</td>
                <td>{item.packageName}</td>
                <td>${item.packagePrice}</td>
                <td>{item.customerWebsite}</td>
                <td>{item.customerEmail}</td>
                <td>{item.customerNote}</td>
                <td>{item.paymentStatus}</td>
               
                <td>
                  <Link to={`/admin/order/${item._id}`}>Action</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
            <div class="col-md-12">
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                  {currentPage > 1 && (
                    <Link
                      className="page-link"
                      onClick={() => paginate(currentPage - 1)}
                    >
                      <i class="fas fa-angle-left"></i>
                    </Link>
                  )}
                  {Array.from(
                    { length: endDigit - startDigit + 1 },
                    (_, index) => (
                      <Link
                        className="page-link"
                        key={startDigit + index}
                        onClick={() => paginate(startDigit + index)}
                      >
                        {startDigit + index}
                      </Link>
                    )
                  )}
                  {currentPage < totalPages && (
                    <Link
                      className="page-link"
                      onClick={() => paginate(currentPage + 1)}
                    >
                      <i class="fas fa-angle-right"></i>
                    </Link>
                  )}
                </ul>
              </nav>
            </div>
          </div>
      </div>
    </>
  );
};

export default PaymentPending;
