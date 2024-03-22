import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/css/about/styles.css" />

      <Navbar />
      <div className="about-container">
        <div className="content">
          <div className="text-container">
            <h1>About Us</h1>
            <p>
              Welcome to Thikachi, your go-to destination for culinary
              inspiration! Our AI generative recipe web app is crafted for both
              chefs and home cooks. Discover unique, organic recipes tailored to
              your taste and dietary preferences. With an interactive interface,
              cooking becomes a personalized, eco-conscious adventure. Join us
              at Thikachi and reimagine the art of cooking with innovation and
              sustainability.
            </p>
          </div>
          <div className="image-container">
            <img src="css/about/images/about.svg" alt="About Us" />
          </div>
        </div>
      </div>      
    </div>
  );
}

export default About;
