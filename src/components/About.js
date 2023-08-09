import React from "react";

const About = () => {
  const aboutStyle = {
    textAlign: "justify",
    padding: "20px",
    maxWidth: "auto",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  return (
    <div style={aboutStyle}>
      <h2 style={headingStyle}>Why AR-Webstore?</h2>
      <p style={textStyle}>
        Traditional e-commerce platforms fail to deliver immersive product
        experiences, leaving customers uncertain about the look, fit, and
        functionality of items. This lack of visualization leads to higher
        return rates as products may not meet expectations. Additionally,
        customer engagement suffers due to the limited ability to interact with
        and explore products online.
      </p>

      <h2 style={headingStyle}>Solution 😃</h2>
      <p style={textStyle}>
        Our AR-Webstore revolutionizes the shopping experience by seamlessly
        integrating augmented reality. With AR-Webstore, customers can visualize
        products in their own spaces and view all the virtual features more
        clearly. This empowers customers to make informed decisions, reduces
        return rates, and enhances engagement, resulting in a more satisfying
        and immersive shopping journey.
      </p>

      <h2 style={headingStyle}>Current State of the Project</h2>
      <p style={textStyle}>
        It showcases a 3D photorealistic model of a chair in your own environment
        using augmented reality, where you can check each and every detail about
        the chair as if it were actually present in your room.
      </p>

      <h2 style={headingStyle}>Future Goals</h2>
      <p style={textStyle}>
        Build an e-commerce platform that can provide an immersive online
        shopping experience. Make the products interactive in a real environment
        rather than just demonstrating static 3D models using ML-AI.
      </p>

      <h2 style={headingStyle}>Learning Exposure</h2>
      <p style={textStyle}>
        XR, or Extended Reality, is an exciting technology that combines the real
        world with virtual elements. As a student interested in XR, while
        contributing to this project, you will learn about the technical aspects
        of XR, which involve understanding how to create and render virtual
        objects, recognize and track objects in the real world, and explore how
        users interact with virtual environments, ensuring intuitive and
        immersive experiences. While studying XR, you can delve into programming
        technologies like Three.js or Unity to develop interactive and immersive
        experiences. You'll also explore 3D modelling and animation to create
        virtual objects and environments.
      </p>

      <p style={{ fontStyle: "italic" }}>
        No no! Don't worry about some top of the world words mentioned above, the
        project is completely beginner-friendly 😅! But if you give your best,
        then you can really learn and build something out of the box for the
        future while working on this project, which I can ensure 😎! Find some
        helpful resources below to start your journey in XR.
      </p>
    </div>
  );
};

export default About;
