import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <section>
                <h2>Welcome to AR-Webstore!</h2>
                <p class="headerp">A web application for immersive augmented reality shopping experiences.</p>
            </section>

            <section id="why-ar">
                <h2>Why AR-Webstore?</h2>
                <div class="problem-solution">
                    <div class="problem">
                        <h3>Problem</h3>
                        <p>Traditional e-commerce platforms lack immersive product experiences, leading to uncertainty
                            among customers about product look, fit, and functionality. This results in higher return rates and
                            limited customer engagement.</p>
                    </div>
                    <div class="solution">
                        <h3>Solution</h3>
                        <p>AR-Webstore integrates augmented reality, allowing customers to visualize products in their own
                            spaces. This empowers informed decisions, reduces return rates, and enhances engagement for a
                            satisfying shopping journey.</p>
                    </div>
                </div>
            </section>

            <section id="current-state">
                <h2>Current State of the Project</h2>
                <p>The project offers a list of e-commerce products with 3D photorealistic models. Users can view these
                    products in a 360-degree viewer and in their own environment using augmented reality.</p>
            </section>

            <section id="future-goals">
                <h2>Future Goals</h2>
                <ul>
                    <li>Build an e-commerce platform providing an immersive shopping experience.</li>
                    <li>Make products interactive in a real environment using ML-AI, moving beyond static 3D models.</li>
                </ul>
            </section>

            <section id="learning-exposure">
                <h2>Learning Exposure</h2>
                <p>XR (Extended Reality) offers technical aspects involving creating and rendering virtual objects,
                    object recognition and tracking, user interaction in virtual environments, and exploring programming
                    technologies like Three.js or Unity.</p>
                <p>It's beginner-friendly yet offers opportunities to delve into advanced technologies while working on
                    the project.</p>
            </section>

            <section id="resources">
                <h2>Resources</h2>
                <ul>
                    <li><a href="https://codemaker2016.medium.com/develop-your-first-webar-app-using-webxr-and-three-js-7a437cb00a92">Develop your first WebAR app using WebXR and Three.js</a></li>
                    <li><a href="https://www.youtube.com/watch?v=gAzIkjkJSzM">WebXR Workshop</a></li>
                </ul>
            </section>

            <section id="project-admin">
                <h2>Project Admin</h2>
                <a href="https://github.com/ShwetKhatri2001"><b> Shwet Khatri
                        </b></a>
            </section>

            <section id="contributors">
                <h2>Contributors</h2>
                <p>Credits go to these contributors:</p>
                <a href="https://github.com/ShwetKhatri2001/AR-Webstore/graphs/contributors">
                    <img src="https://contrib.rocks/image?repo=ShwetKhatri2001/AR-Webstore" />
                </a>
            </section>

            <p>&copy; 2023 AR-Webstore. All rights reserved.</p>

        </div>
    );
};

export default About;
