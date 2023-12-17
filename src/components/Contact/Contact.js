import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <div className="formContainer">
      <h1>Let's Connect and Revolutionize E-commerce</h1>

      <div className="contact-form">
        <form
          action="https://formsubmit.co/shwetkhatri2001@gmail.com"
          method="POST"
        >
          <h3>Drop Us a Message</h3>
          <div className="form-Field">
            <input type="text" name="Name" placeholder="Your Name" required />
          </div>
          <div className="form-Field">
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-Field">
            <textarea
              type="text"
              name="Message"
              placeholder="Your message"
              required
            ></textarea>

            <button type="submit" className="btnContactSubmit">
              Send Message
            </button>
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
