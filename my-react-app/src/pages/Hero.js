import React from "react";
import Navbar from "./components/Navbar";
import "./Hero.css";

function hero() {
  return (
    <>
      <div className="bg-hero">
        <Navbar />
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="p-5 mt-4">
                <h1 className="display-4">
                  Feel the real freshness on your skin
                </h1>
                <a href="#" className="btn btn-green">
                  shop now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="image-hero"
                src="https://www.freshlycosmetics.com/img/media/250/pacificocean_1_large_default.jpg?67d3604c3b9079847fc2f54f75e1d86d" alt="cream_1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
