/* eslint-disable no-useless-concat */

import React, { useEffect, useRef } from "react";
import "./Feedback.css";

const Feedback = () => {
  const formRef = useRef(null);

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
    let likes = document.getElementById("liked").value;
    let usersname = document.getElementById("username").value;
    let usersemail = document.getElementById("useremail").value;
    let improvement = document.getElementById("improve").value;
    let feature = document.getElementById("features").value;
    let comment = document.getElementById("comments").value;

    let body = "Name of the User: <br/>" + usersname + "<br/>" + "Email of the User: <br/>" + usersemail + "<br/><br/>" +
      "What did you like most about AR-Webstore? <br/>" +
      likes +
      "<br/><br/> Will our 3D and AR features improve your shopping experience if we integrate it on an online e-commerce store ?<br/>" +
      improvement +
      "<br/><br/> What are the other features that excite you to have them on AR-Webstore ?<br/>" +
      feature +
      "<br/> <br/>Any other comments?<br/>" +
      comment;

    console.log(body);

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shwetkhatri2001@gmail.com",
      Password: "BAAF238142FDFE27699F12B3FC14B1A5C9F7",
      To: "shwetkhatri2001@gmail.com",
      From: "shwetkhatri2001@gmail.com",
      Subject: "AR-Webstore has got a feedback",
      Body: body,
    }).then((message) => {
        if (message === "OK") {
          window.swal(
            "Successfull",
            "Thanks! We've received your feedback",
            "success"
          ).then(() => {
            formRef.current.reset(); 
          });
        } else {
          window.swal(
            "Something Wrong",
            "Your FeedBack is not Received",
            "error"
          );
        }
      });
  };

  return (
    <div className="container">
      <h1>Your Feedback ✍️ Our Evolution 🚀</h1>
      <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Name:</label><br/>
        <input type="text" id="username" placeholder="Your Name..." />
        <br />

        <label htmlFor="useremail">Email:</label><br/>
        <input type="text" id="useremail" placeholder="Your Email..." />
        <br />

        <label htmlFor="liked">What did you like most about AR-Webstore?</label>
        <input type="text" id="liked" placeholder="I would Like to say..." />
        <br />

        <label htmlFor="improve">
          Will our 3D and AR features improve your shopping experience if we
          integrate it on an online e-commerce store ?
        </label>
        <input type="text" id="improve" placeholder="I would Like to say..." />
        <br />

        <label htmlFor="features">
          What are the other features that excite you to have them on
          AR-Webstore ?
        </label>
        <input type="text" id="features" placeholder="I would Like to say..." />
        <br />

        <label htmlFor="comments">Any other comments?</label>
        <br />
        <textarea
          name="message"
          id="comments"
          placeholder="I would Like to say..."
          style={{ height: "200px" }}
        ></textarea>
        <br />
        <button type="button" className="btn" onClick={sendMail}>
          Send Reply
        </button>
      </form>
    </div>
  );
};

export default Feedback;
