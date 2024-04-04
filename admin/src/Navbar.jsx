import React from "react";

function navbar() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="/css/navbar/styles.css" />

      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="/css/login/images/logo-image.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="navbar-links">
          <a href="/home">HOME</a>
          <a href="/features">FEATURES</a>
          <a href="/about">ABOUT</a>
          <a className="sign-out" href="/login">SIGN OUT</a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
