import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const PaymentsReceived = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const paginationDigits = 3;


  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  // Filter orders with paymentStatus === "Received	"
  const PaymentsReceived = orders.filter(
    (order) => order.paymentStatus === "Received"
  );

// Pagination function
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const totalPages = Math.ceil(PaymentsReceived.length / itemsPerPage);

// Calculate the range of pagination digits
const startDigit = Math.max(1, currentPage - Math.floor(paginationDigits / 2));
const endDigit = Math.min(startDigit + paginationDigits - 1, totalPages);

// Calculate the index range for the current page
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = PaymentsReceived.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <> 
      <div className="hight-full p-3">
        <h4 className="text-center">Total Payment Received</h4>
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
                <td data-th="SL No.">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td data-th="Name">{item.orderDate}</td>
                <td data-th="Package">{item.customerName}</td>
                <td data-th="Price">{item.packageName}</td>
                <td data-th="Website">${item.packagePrice}</td>
                <td data-th="Email">{item.customerWebsite}</td>
                <td data-th="Note">{item.customerEmail}</td>
                <td data-th="Payment Status">{item.customerNote}</td>
                <td data-th="Edit">{item.paymentStatus}</td>
               
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

export default PaymentsReceived;
