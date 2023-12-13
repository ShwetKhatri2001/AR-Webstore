import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <div className="formContainer">
      <h1>Let's Connect and Revolutionize E-commerce</h1>

      <div className="contact-form">
        <form action="https://formsubmit.co/shwetkhatri2001@gmail.com" method="POST">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Email"
                  className="form-control"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="Message"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "100px" }}
                  required
                ></textarea>
              </div>
            </div>
            <div className="submit-btn">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContactSubmit"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>

      <h2>
        Reach out to Project Admin at{" "}
        <Link
          to="https://www.linkedin.com/in/shwet-khatri-4ab216196/"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        and{" "}
        <Link to="mailto:shwetkhatri2001@gmail.com" target="_blank">
          shwetkhatri2001@gmail.com
        </Link>
      </h2>
    </div>
  );
};

export default Contact;
