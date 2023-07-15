/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <footer class="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <ul class="social-icon">
                <li class="social-icon_item"><a class="social-icon_link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
                <li class="social-icon_item"><a class="social-icon_link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
                <li class="social-icon_item"><a class="social-icon_link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
                <li class="social-icon_item"><a class="social-icon_link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
            </ul>
            <ul class="menu">
                <li class="menu_item"><a class="menu_link" href="#">Home</a></li>
                <li class="menu_item"><a class="menu_link" href="#">About</a></li>
                <li class="menu_item"><a class="menu_link" href="#">Services</a></li>
                <li class="menu_item"><a class="menu_link" href="#">Team</a></li>
                <li class="menu_item"><a class="menu_link" href="#">Contact</a></li>

            </ul>
            <p>&copy;2023 AR-Webstore | All Rights Reserved</p>
        </footer>
    )
}

export default Footer