import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const EmailContact = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k0mhirp",
        "template_ztx5mpi",
        e.target,
        "RBjYA0qSND-CqVuao"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          // Add your success message or redirect to a success page
        },
        (error) => {
          console.error("There was an error sending the email:", error.text);
          // Handle the error, display an error message, etc.
        }
      );

    e.target.reset(); // Reset the form after sending
  }

  // Function to get the current date in yyyy-MM-dd format
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
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
          <div className="row">
            <div className="col-lg-8">
              <div className="form-holder mb-40 pc-25">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={sendEmail}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailContact;



