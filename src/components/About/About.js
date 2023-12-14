import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <section>
                <h2>👋 Welcome to AR-Webstore!</h2>
                <p class="headerp">A web application for immersive augmented reality shopping experiences.</p>
            </section>

            <section id="why-ar">
                <h2>🤔 Why AR-Webstore?</h2>
                <div class="problem-solution">
                    <div class="problem">
                        <h3><div class="dot"></div> Problem 😧</h3>
                        <p>Traditional e-commerce platforms fail to deliver immersive product experiences, 
                        leaving customers uncertain about the look, fit, and functionality of items. This lack of 
                        visualization leads to higher return rates as products may not meet expectations. Additionally, 
                        customer engagement suffers due to the limited ability to interact with and explore products online.</p>
                    </div>
                    <div class="solution">
                        <h3><div class="dot"></div> Solution 😃</h3>
                        <p>Our AR-Webstore revolutionizes the shopping experience by seamlessly 
                        integrating augmented reality. With AR-Webstore,customers can visualize products 
                        in their own spaces and view all the virtual features more clearly. This empowers
                         customers to make informed decisions, reduces return rates, and enhances 
                         engagement, resulting in a more satisfying and immersive shopping journey.</p>
                    </div>
                </div>
            </section>

            <section id="current-state">
                <h2>👩🏻‍💻 Current State of the Project</h2>
                <p>It provides you a list of e-commerce products along with their 3D photorealistic 
                models to try out them in a 360deg viewer. Also, you can view those products in your own 
                environment using augmented reality, where you can check each and every detail of 
                products like chairs, photo frames, and cars as if they were actually present in your 
                room.</p>
            </section>

            <section id="future-goals">
                <h2>🤩 Future Goals</h2>
                <ul>
                    <li>Build an e-commerce platform providing an immersive shopping experience.</li>
                    <li>Make the products interactive in a real environment rather than just demonstrating static 
                    3D models using ML-AI.</li>
                </ul>
            </section>

            <section id="learning-exposure">
                <h2>😇 Learning Exposure</h2>
                <p>XR, or Extended Reality, is an exciting technology that combines the real world with 
                virtual elements. As a student interested in XR, while contributing to this project, 
                you will learn about the technical aspects of XR, which involve understanding how to 
                create and render virtual objects, recognize and track objects in the real world, 
                and explore how users interact with virtual environments, ensuring intuitive and 
                immersive experiences. While studying XR, you can delve into programming technologies 
                like Three.js or Unity to develop interactive and immersive experiences. 
                You'll also explore 3D modelling and animation to create virtual objects 
                and environments.</p>
                <div class="height"></div>
                <p>No no! Don't worry about some top of the world words mentioned above, 
                the project is completely beginner friendly 😅 !But if you give your best, 
                then you can really learn and build something out of the box for the future while working on this project, 
                which I can ensure 😎!Find some helpful resources below to start your journey in XR.</p>
            </section>

            <section id="resources">
                <h2>🙌 Resources</h2>
                <ul>
                    <li><a href="https://codemaker2016.medium.com/develop-your-first-webar-app-using-webxr-and-three-js-7a437cb00a92">Develop your first WebAR app using WebXR and Three.js</a></li>
                    <li><a href="https://www.youtube.com/watch?v=gAzIkjkJSzM">WebXR Workshop</a></li>
                </ul>
            </section>

            <section id="project-admin">
                <h2>👑 Project Admin</h2>
                <a href="https://github.com/ShwetKhatri2001">
                <img class="admin-img" src="https://avatars.githubusercontent.com/u/56475750?v=4" /> <div class="height"></div>
                <b> Shwet Khatri
                </b></a>
            </section>

            <section id="contributors">
                <h2>🫂 Contributors</h2>
                <p><b>Credits go to these contributors:</b></p>
                <div class="contributor">
                    <a href="https://github.com/ShwetKhatri2001/AR-Webstore/graphs/contributors">
                        <img src="https://contrib.rocks/image?repo=ShwetKhatri2001/AR-Webstore" />
                    </a>
                </div>
            </section>

            <p>&copy; 2023 AR-Webstore. All rights reserved.</p>

        </div>
    );
};

export default About;
