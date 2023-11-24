import React from "react";
import { Link } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const OrderMenu = () => {
  return (
    <div className="custom-ordermenu mb-15">
      <BackToAdminDashboard></BackToAdminDashboard>
      <div className="header__right container custom-orders">
        <nav id="main-nav" className="main-nav">
          <ul id="menu-primary-menu" className="menu custom-orders-ul">
            <li className="menu-item menu-item-has-children">
              <Link to="/admin/orders/" className="btn btn-green tra-black-hover">
                Total Orders
              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link to="/admin/orders-pending" className="btn btn-green tra-black-hover">
                Pending Orders
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/orders/accepted" className="btn btn-green tra-black-hover">
                Accepted Orders
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/orders/cancelled" className="btn btn-green tra-black-hover">
                Cancelled orders
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/orders/delivered" className="btn btn-green tra-black-hover">
                Delivered orders
              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link to="/admin/payments/pending" className="btn btn-green tra-black-hover">
                Pending Payments
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/payments/received" className="btn btn-green tra-black-hover">
                Recived Payments
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/payments/cancelled" className="btn btn-green tra-black-hover">
                Cancelled Payments
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/admin/payments/refunded" className="btn btn-green tra-black-hover">
                Refunded Payments
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OrderMenu;
