import React from "react";
import "./Feedback.css";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className="container">
      <h1>Thanks for exploring AR-Webstore.</h1>
      <h3>
        Share your views on the questions below at{" "}
        <Link
          to="mailto:shwetkhatri2001@gmail.com"
          target="_blank"
          className="email"
        >
          shwetkhatri2001@gmail.com
        </Link>
      </h3>

      <div>
        <form>
          <div className="form-field">
            <label>What did you like the most about AR-Webstore ?</label>
            <textarea
              type="text"
              placeholder="I would like to say ..."
            ></textarea>
          </div>
          <div className="form-field">
            <label>
              Will our 3D and AR features improve your shopping experience if we
              integrate it on an online e-commerce store ?
            </label>
            <textarea
              type="text"
              placeholder="I would like to say ..."
            ></textarea>
          </div>
          <div className="form-field">
            <label>
              What are the other features that excites you to have them on
              AR-Webstore ?
            </label>
            <textarea
              type="text"
              placeholder="I would like to say ..."
            ></textarea>
          </div>
          <div className="form-field">
            <label>Any other comments?</label>
            <textarea
              type="text"
              placeholder="I would like to say ..."
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
