import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom/dist';


const ErrorPage = () => {
  return (
   <>
   <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" alt="error page img" />
<h1 className="error-text">Sorry, We can't seem to find the resource you're looking for.</h1>
<p className="text">Please check that the Web site address is spelled correctly.Or,</p>
<div className="btn1">
<Link className="error" href="/">Go to Homepage</Link>
</div>
</>
  );
};

export default ErrorPage;
