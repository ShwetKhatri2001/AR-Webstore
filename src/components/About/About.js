import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import tick from './tick.png';
import archery from './archery.png';
import gun from './rightimg3.png'
import img1 from './prob1.jpg'
import img2 from './prob2.jpg'
import res1 from './resource1.png'
const About = () => {
    return (
        <>
            <div className="about-banner">
            <div className="about-banner-front"> 
            <div className="aboutleft"><div className="aboutleftsec">AR Webstore</div>
            <p className="abouleftseccont">A web application for immersive augmented reality shopping experiences.</p></div>
            
            <img src={gun} className="aboutrightsec"/>
           
           
           </div>
             
            </div>
            <div>
                <h1 className="second-head">Why AR WEBSTORE ?</h1>
                <div className="prob-box">
                    <img src={img1} className="prob-img"/>
                    <div className="about-prob">
                        <p className="about-prob-header"><i>Problem</i></p>
                        <p className="about-prob-sol">Traditional e-commerce platforms fail to deliver immersive product experiences, 
                        leaving customers uncertain about the look, fit, and functionality of items. This lack of 
                        visualization leads to higher return rates as products may not meet expectations. Additionally, 
                        customer engagement suffers due to the limited ability to interact with and explore products online.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="prob-box2">
                    
                    <div className="about-prob">
                        <p className="about-prob-header" style={{"padding":"1vh","width":"70%"}}><i>Solution</i></p>
                        <p className="about-prob-sol2"> With AR-Webstore,customers can visualize products 
                       in their own spaces and view all the virtual features more clearly. This empowers
                         customers to make informed decisions, reduces return rates, and enhances 
                          engagement, resulting in a more satisfying and immersive shopping journey.</p>
                    </div>
                    <img src={img2} className="prob-img2"/>
                </div>
            </div>
            <div className="about-goals-box">
            
                <div className="status">
                <h1 className="status-header" style={{"color":" rgb(19, 227, 19)"}}>Current Status</h1>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={tick} /><p className="status-points">E-commerce products with 3D models for 360° viewing</p></div>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={tick} /><p className="status-points">Photorealistic 3D models for immersive shopping experiences.</p></div>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={tick} /><p className="status-points">360° viewer for detailed inspection of chairs, frames, and cars.</p></div>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={tick} /><p className="status-points">Explore products in your space using augmented reality.</p></div>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={tick} /><p className="status-points">Augmented reality for in-home product exploration.</p></div>
                </div>
                <div className="status">
                <h1 className="status-header" style={{"color":"rgb(9, 16, 250)"}}>Future Goals</h1>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={archery} /><p className="status-points">Build an e-commerce platform providing an immersive shopping experience.</p></div>
                    <div style={{"display":"flex"}}><img style={{"height":"40px","display":"block","margin":"4vh 2vh 0 0"}}src={archery} /><p className="status-points">Make the products interactive in a real environment rather than just demonstrating static 
                     3D models using ML-AI.</p></div>
                   
                </div>
               
            </div>
            <h1 className="second-head">Learning Exposure !</h1>
            <div className="learning-about">
            <b>XR</b>, or  <b>Extended Reality</b>, is an exciting technology that combines the real world with 
                 virtual elements. As a student interested in XR, while contributing to this project, 
                 you will learn about the technical aspects of XR, which involve understanding how to 
                 create and render virtual objects, recognize and track objects in the real world, 
                 and explore how users interact with virtual environments, ensuring intuitive and 
                 immersive experiences. <p>While studying XR, you can delve into programming technologies 
                 like <i style={{"color":"blueviolet"}}>Three.js</i> or <i style={{"color":"blueviolet"}}>Unity</i> to develop interactive and immersive experiences. 
                 You'll also explore 3D modelling and animation to create virtual objects 
                 and environments.</p>
                 
                 No no! Don't worry about some top of the world words mentioned above, 
                the project is completely beginner friendly 😅 !But if you give your best, 
                then you can really learn and build something out of the box for the future while working on this project, 
                which I can ensure 😎!.<p style={{"color":"yellow"}}><i>Find some helpful resources below to start your journey in XR.</i></p>
                <ul className="about-res-ul">
                  <li><a  href="https://codemaker2016.medium.com/develop-your-first-webar-app-using-webxr-and-three-js-7a437cb00a92">
                  <img className="res1-img" src={res1}/></a></li>

                   <li><a><iframe className='yt-res' width="600" height="405" src="https://www.youtube.com/embed/gAzIkjkJSzM?si=66Slz3nUzBZC-b5i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a></li>
                   <li><a><iframe width="600" height="405" src="https://www.youtube.com/embed/gAzIkjkJSzM?si=66Slz3nUzBZC-b5i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a></li>

                </ul>
            </div>
            <div><h1 className="second-head">Project Admin</h1>
            <a href="https://github.com/ShwetKhatri2001"><div className="about-admin-box"><img className="about-admin-img" src="https://avatars.githubusercontent.com/u/56475750?v=4"/><p className="about-admin">Shwet Khatri</p></div></a></div>
            <div><h1 className="second-head">Contributors</h1>
            <p className="second-head" style={{"color":"blue"}}><b>Credits go to these contributors:</b></p>
                 <div class="contributor">
                     <a href="https://github.com/ShwetKhatri2001/AR-Webstore/graphs/contributors">
                         <img src="https://contrib.rocks/image?repo=ShwetKhatri2001/AR-Webstore" />
                     </a>
                </div>
            </div>
        </>
        
    );
};

export default About;
