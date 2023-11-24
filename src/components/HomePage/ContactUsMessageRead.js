import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "../../Pages/Admin/BackToAdminDashboard";

const ContactUsMessageRead = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/contact-message/${id}`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);

  const UserContactMessage = (event) => {
    event.preventDefault();
    const messageStatus = event.target.messageStatus.value;

    const contact = {
      messageStatus,
    };

    const url = `http://localhost:5000/contact-message/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/contact-messages/");
      });
  };

  return (
    <>
      <section
        className="touch hight-full"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div className="mb-15">
          <BackToAdminDashboard></BackToAdminDashboard>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="block-text text-center">
                <h3 className="heading">Contact Message Details</h3>
              </div>
              <div className="touch__main ">
                <div className="info text-center">
                  <h5>Sender information</h5>
                  <ul className="list">
                    <li>
                      <p>Name: {contact.name}</p>
                    </li>

                    <li>
                      <p>{contact.email}</p>
                    </li>
                  </ul>
                </div>
                <form onSubmit={UserContactMessage} className="form-box">
                  <input
                    hidden
                    type="text"
                    className="form-control"
                    name="messageStatus"
                    value="Read"
                  />

                  <div className="row">
                    <div className="row mb-0">
                      <div
                        className="col"
                       
                      >
                        <button type="submit" className="btn btn-md btn-primary tra-black-hover">
                          <span>
                            <img
                              src="https://i.ibb.co/0p5VPN9/message.png"
                              alt="message"
                              border="0"
                            />
                            Mark as Read
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="col">
                      <label>Message</label>
                      <textarea
                        defaultValue={contact.message}
                        readOnly
                        required
                        className="form-control message"
                        name="message"
                        cols={30}
                        rows={10}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsMessageRead;
