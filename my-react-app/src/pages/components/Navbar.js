import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              className="logo"
              src='../assets/freshly-logo.svg'
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
