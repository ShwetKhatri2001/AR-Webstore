/* eslint-disable no-useless-concat */

import React, { useEffect, useRef, useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState({
    username: "",
    useremail: "",
    liked: "",
    improve: "",
    features: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://smtpjs.com/v3/smtp.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const sendMail = () => {
    // Construct the body of the email
    const body =
      "Name of the User: <br/>" +
      formValues.username +
      "<br/>" +
      "Email of the User: <br/>" +
      formValues.useremail +
      "<br/><br/>" +
      "What did you like most about AR-Webstore? <br/>" +
      formValues.liked +
      "<br/><br/> Will our 3D and AR features improve your shopping experience if we integrate it on an online e-commerce store ?<br/>" +
      formValues.improve +
      "<br/><br/> What are the other features that excite you to have them on AR-Webstore ?<br/>" +
      formValues.features +
      "<br/> <br/>Any other comments?<br/>" +
      formValues.comments;

    console.log(body);

    
    
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shwetkhatri2001@gmail.com",
      Password: "BAAF238142FDFE27699F12B3FC14B1A5C9F7",
      To: "shwetkhatri2001@gmail.com",
      From: "shwetkhatri2001@gmail.com",
      Subject: "AR-Webstore has got feedback",
      Body: body,
    }).then((message) => {
      if (message === "OK") {
        window.swal("Successfull", "Thanks! We've received your feedback", "success").then(() => {
          setFormValues({
            username: "",
            useremail: "",
            liked: "",
            improve: "",
            features: "",
            comments: "",
          });
          setFormSubmitted(false);
        });
      } else {
        window.swal("Something Wrong", "Your Feedback is not Received", "error");
      }
    });
  };

  
  const validateForm = (e) => {
    e.preventDefault(); 
    setFormSubmitted(true);

    const newErrors = {};
 
    if (!formValues.username.trim()) {
      newErrors.username = "Name is required";
    }else if (/^\d+$/.test(formValues.username.trim())) {
      newErrors.username = "Name should not contain only numbers";
    }
    if (!formValues.useremail.trim()) {
      newErrors.useremail = "Email is required";
    }else if (!validateEmail(formValues.useremail.toLowerCase())) {
      newErrors.useremail = "Enter a valid email address";
    }
    console.log(formValues.useremail);
    if (!formValues.liked.trim()) {
      newErrors.liked = "Please share your feedback";
    }
    if (!formValues.improve.trim()) {
      newErrors.improve = "Yes/No is required";
    }
    if (!formValues.features.trim()) {
      newErrors.features = "please tell your suggestions";
    }

    setErrors(newErrors); 

    if (Object.keys(newErrors).length === 0) {
      sendMail();
    }
  };

  const validateEmail = (email) => {
   
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value.toLowerCase() }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() ? "" : prevErrors[id],
    }));
  };

  return (
    <div className="container">
      <h1>Your Feedback ✍️ Our Evolution 🚀</h1>
      <form ref={formRef} onSubmit={validateForm}>
        <label htmlFor="username">Name:</label>
        <br />
        <input
          type="text"
          id="username"
          placeholder="Your Name..."
          value={formValues.username}
          onChange={handleInputChange}
          className={(errors.username && formSubmitted) ? "error-input" : ""}
        />
        <br />
        {(errors.username && formSubmitted) && <span className="error">{errors.username}</span>}
        <label htmlFor="useremail">Email:</label>
        <br />
        <input
          type="text"
          id="useremail"
          placeholder="Your Email..."
          value={formValues.useremail.toLowerCase()}
          onChange={handleInputChange}
          className={(errors.useremail && formSubmitted) ? "error-input" : ""}
        />
        <br />
        {(errors.useremail && formSubmitted) && <span className="error">{errors.useremail}</span>}
        <label htmlFor="liked">What did you like most about AR-Webstore?</label>
        <input
          type="text"
          id="liked"
          placeholder="I would like to say..."
          value={formValues.liked}
          onChange={handleInputChange}
          className={(errors.liked && formSubmitted) ? "error-input" : ""}
        />
        <br />
        {(errors.liked && formSubmitted) && <span className="error">{errors.liked}</span>}
        <label htmlFor="improve">
          Will our 3D and AR features improve your shopping experience if we integrate them into an online e-commerce store?
        </label>
        <input
          type="text"
          id="improve"
          placeholder="I would like to say..."
          value={formValues.improve}
          onChange={handleInputChange}
          className={(errors.improve && formSubmitted) ? "error-input" : ""}
        />
        <br />
        {(errors.improve && formSubmitted) && <span className="error">{errors.improve}</span>}
        <label htmlFor="features">What are the other features that excite you to have them on AR-Webstore?</label>
        <input
          type="text"
          id="features"
          placeholder="I would like to say..."
          value={formValues.features}
          onChange={handleInputChange}
          className={(errors.features && formSubmitted) ? "error-input" : ""}
        />
        <br />
        {(errors.features && formSubmitted) && <span className="error">{errors.features}</span>}
        <label htmlFor="comments">Any other comments?</label>
        <br />
        <textarea
          name="message"
          id="comments"
          placeholder="I would like to say..."
          style={{ height: "200px" }}
          value={formValues.comments}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button type="submit" className="btn">
          Send Reply
        </button>
      </form>
    </div>
  );
};

export default Feedback;


