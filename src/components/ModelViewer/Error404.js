import React from "react";
import imgerror  from '../ModelViewer/error404img.jpg';
import '../ModelViewer/Error404_style.css';

const Error404 = () => {

    const redirectToHomePage = () => {
        window.location.href = '/'; // Replace with the desired home page URL or path
      };

    return (
        <>
            <div className="wrapper">
                <h2>Oops! Page not found</h2>
                <div>
                    <img src={imgerror} alt="404" />
                </div>
                <h4>We can't find the page you're looking for</h4>
                <button type="button" class="main-btn" onClick={redirectToHomePage} >GO BACK HOME</button>
            </div>
        </>
    );
};

export default Error404;