import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="page-banner-main-block">
      <div className="container">
        <h1 className="page-banner-heading">About us</h1>
        <div className="page-banner-block">
          <ol className="breadcrumb">
            <li>
              <a href="#void">Home</a>
            </li>
            <li className="active">About us</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
