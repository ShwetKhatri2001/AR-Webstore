
import React from "react";
import "./Footer.css";

function Footer() {
  return (
 
    <div className="contact" id="contact">
    <div className="main-content">
        <div class="contact-content">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Service</a></li>
        </div>
    
        <div className="contact-content">
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Store Policy</a></li>
            <li><a href="#">Payment Method</a></li>
          
        </div>
    
        <div className="contact-content">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Tel: 123-456-7890</a></li>
         
        </div>
    
        <div className="contact-content">
            <li><a href="#">Github</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
       
        </div>
    </div>
    
    <div class="action">
        <form>
            <input type="email" name="email" placeholder="Your Email" required></input>
            <input type="submit" name="submit" value="submit" required></input>
        </form>
    </div>
    <div class="last">
<p>@ 2023 AR-Website | All Rights Reserved</p>
</div>
    </div>
  
  );
}

export default Footer;