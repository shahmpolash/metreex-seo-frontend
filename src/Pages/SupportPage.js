import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const SupportPage = () => {
  const [user] = useAuthState(auth);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tickets`)
      .then((res) => res.json())
      .then((info) => setTickets(info.reverse()));
  }, []);
  let rowNumber = 1;

  return (
    <>
      <section
        className="faq payment-setting"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              
              <div className="block-text center">
                <section className="py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 offset-md-2">
                        <div className="text-center mb-4">
                          <h2 className="font-weight-bold mb-3">
                            Customer Support
                          </h2>
                          <p className="text-muted">
                            We are here to assist you. Create a ticket or view
                            your submitted tickets below.
                          </p>
                        </div>
                        <div className="text-center mb-4">
                          <Link
                            to="/user-dashboard/create-ticket/"
                            className="btn btn-lg btn-primary"
                          >
                            Create Ticket
                          </Link>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </section>

                {tickets.filter(
                  (ticket) => ticket.ticketCreator === user?.email
                ).length >= 1 && (
                  <div className="container">
                    <h5 mt-15>List of the Submitted Tickets</h5>
                    <table className="rwd-table" style={{ marginTop: "2rem" }}>
                      <tbody>
                        <tr>
                          <th>SL No.</th>
                          <th>Date</th>
                          <th>Ticket ID</th>
                          <th>Subject</th>
                          <th>Status</th>

                          <th>View</th>
                        </tr>
                        {tickets.map(
                          (item, index) =>
                            item.ticketCreator === user?.email && (
                              <tr key={item._id}>
                                <td>{rowNumber++}</td>

                                <td>{item.currentDate}</td>
                                <td>{item.TicketId}</td>
                                <td>{item.subject}</td>
                                <td>{item.ticketStatus}</td>

                                <td>
                                  <Link
                                    to={`/user-dashboard/ticket/${item._id}`}
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                            )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
                {tickets.filter(
                  (ticket) => ticket.ticketCreator === user?.email
                ).length === 0 && (
                  <>
                    <div className="col">
                      <Link
                        to="/user-dashboard/create-ticket/"
                        type="sumbit"
                        className="action-btn"
                      >
                        <span>Create Ticket</span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;
