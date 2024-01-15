// New Code

import React, { useEffect } from "react";
import "./Feedback.css";

const Feedback = () => {
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
    let improvement = document.getElementById("improve").value;
    let feature = document.getElementById("features").value;
    let comment = document.getElementById("comments").value;

    let body =
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
      Username: "guptauv21@gmail.com",
      Password: "6B757A6226DDCFFD5B9E62BE67AAE5868267",
      To: "shwetkhatri2001@gmail.com",
      From: "guptauv21@gmail.com",
      Subject: "Your Website is Reviewed",
      Body: body,
    }).then((message) => {
      if (message === "OK") {
        window.swal("Successfull", "Your Data Successfull Received", "success");
      } else {
        window.swal("Something Wrong", "Your Data is not Received", "error");
      }
    });
  };

  return (
    <div className="container">
      <h1>Leave a Message</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="liked">What did you like most about AR-Webstore?</label><br/>
        <input type="text" id="liked" placeholder="I would Like to say..." /><br/>

        <label htmlFor="improve">Will our 3D and AR features improve your shopping experience if we integrate it on an online e-commerce store ?</label><br/>
        <input type="text" id="improve" placeholder="I would Like to say..." /><br/>

        <label htmlFor="features">What are the other features that excite you to have them on AR-Webstore ?</label><br/>
        <input type="text" id="features" placeholder="I would Like to say..." /><br/>

        <label htmlFor="comments">Any other comments?</label><br/>
        <textarea name="message" id="comments" placeholder="I would Like to say..." style={{ height: "200px" }}></textarea><br/>

        <button type="button" className = "btn" onClick={sendMail}>Send Reply</button>
      </form>
    </div>
  );
};

export default Feedback;

// Old Code

// import React from "react";
// import "./Feedback.css";
// import { Link } from "react-router-dom";

// const Feedback = () => {
//   return (
//     <div className="container">
//       <h1>Thanks for exploring AR-Webstore.</h1>
//       <h3>
//         Share your views on the questions below at{" "}
//         <Link
//           to="mailto:shwetkhatri2001@gmail.com"
//           target="_blank"
//           className="email"
//         >
//           shwetkhatri2001@gmail.com
//         </Link>
//       </h3>

//       <div>
//         <form>
//           <div className="form-field">
//             <label>What did you like the most about AR-Webstore ?</label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//           <div className="form-field">
//             <label>
//               Will our 3D and AR features improve your shopping experience if we
//               integrate it on an online e-commerce store ?
//             </label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//           <div className="form-field">
//             <label>
//               What are the other features that excites you to have them on
//               AR-Webstore ?
//             </label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//           <div className="form-field">
//             <label>Any other comments?</label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
