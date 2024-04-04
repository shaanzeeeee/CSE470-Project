import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function home() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/css/home/styles.css" />
      <Navbar />
      <img className="home-image" src="/css/home/images/home.svg" />

      <div className="home-content">
        <h1>Welcome to Thikachi!</h1>
        <p>
          Explore culinary creativity at Thikachi! Our recipe generator sparks
          inspiration for both seasoned chefs and kitchen novices. Join us for a
          celebration of flavor, creativity, and the joy of good food!
        </p>
        <a className="start-now-button" href="/features">
          START NOW
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default home;
