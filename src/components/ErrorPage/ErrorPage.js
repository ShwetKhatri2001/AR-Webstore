import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="err-container">
      <img
        src="https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif"
        alt="error page img"
      />
      <div className="btn1">
        <Link className="error" to="/">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
