import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const OrderAction = () => {
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/order/${id}`)
      .then((res) => res.json())
      .then((info) => setOrder(info));
  }, [id]);

  const handelOrderAction = (event) => {
    event.preventDefault();
    const orderStatus = event.target.orderStatus.value;
    const paymentStatus = event.target.paymentStatus.value;
    const updateOrder = {
      orderStatus,
      paymentStatus,
    };

    const url = `https://e-commerce-seo-server.onrender.com/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/orders/");
      });
  };

  return (
    <div className="hight-full">
      <BackToAdminDashboard></BackToAdminDashboard>

      <form
        class="form seo-form centered-form-container"
        onSubmit={handelOrderAction}
      >
        <div class="p-3">
          <div className="mb-30">
            <h5 className="mb-30">
              Current Payment Status :- {order.paymentStatus}
            </h5>
            <h5 className="mb-30">
              Current Order Status :- {order.orderStatus}
            </h5>

            <h5 className="mb-30">Customer Name:- {order.customerName}</h5>
          </div>
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Update Payment Status</label>
              <div class="form-group mb-3">
                <select class="form-control" name="paymentStatus">
                  <option value="Received">Received</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Update Order Status</label>
              <div class="form-group mb-3">
                <select class="form-control" name="orderStatus">
                  <option value="Accepted">Accepted</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>

            <div class="col-sm-4">
              <button
                type="submit"
                class="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderAction;
