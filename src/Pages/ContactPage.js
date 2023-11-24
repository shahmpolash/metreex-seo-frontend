import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CallToAction from "../components/MetreexHomePage/CallToAction";

const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("Message sent successfully!");
  };
  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);

  const UserContactMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;
    const date = event.target.date.value;
    const messageStatus = event.target.messageStatus.value;

    const contact = {
      name,
      email,
      message,
      subject,
      date,
      messageStatus,
    };

    const url = `http://localhost:5000/add-contact-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        notifySuccess();
        navigate("/message-sent-success");
      });
  };
  // Function to get the current date in yyyy-MM-dd format
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <section
        id="contacts-1"
        className="wide-60 contacts-section division"
        style={{
          backgroundImage: `url(https://i.ibb.co/SBH8fTs/banner-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          {contact.map((e) => (
            <div className="text-center">
              <div
                className="txt-block pc-25 mb-40 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <h4 className="h4-xl indigo-color">
                  {e.titleOne} <spna> {e.titleTwo}</spna>
                 
                </h4>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-lg-8">
              <div className="form-holder mb-40 pc-25">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={UserContactMessage}
                >
                  <input
                    type="date"
                    hidden
                    className="form-control"
                    name="date"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                  />
                  <input
                    type="text"
                    hidden
                    className="form-control"
                    name="messageStatus"
                    value="UnRead"
                  />

                  <div id="input-name" className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div id="input-email" className="col-md-6">
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div id="input-subject" className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control subject"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div id="input-message" className="col-md-12 input-message">
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="Your Message ..."
                      defaultValue={""}
                    />
                  </div>

                  <div className="col-lg-12 mt-10 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-md btn-green deepgreen-hover submit"
                    >
                      Send Message
                    </button>
                  </div>

                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              {contact.map((e) => (
                <div className="contacts-info pc-25">
                  <div
                    className="contact-box wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h5 className="h5-sm">Our Location:</h5>
                    <p className="grey-color">{e.address}</p>
                  </div>

                  <div
                    className="contact-box wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <h5 className="h5-sm">Contact Phones:</h5>
                    <p className="grey-color">Phone : {e.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction></CallToAction>
    </>
  );
};

export default ContactPage;
