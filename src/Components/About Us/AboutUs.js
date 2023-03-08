import React from "react";
import "./About.css";
import Qualities from "./Qualities";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="page-banner-main-block">
        <div className="container">
          <h1 className="">ABOUT US</h1>
          <div className="page-banner-block">
            <ol className="breadcrumb">
              <li>
                <a href="#void">Home</a>
              </li>
              <li>{"> About US"}</li>
            </ol>
          </div>
        </div>
      </div>
      <section className="about-main-block-two ">
        <div className="container">
          <div className="about-row">
            <div className="image-column">
              <div className="image-field">
                <img
                  className="image-about"
                  src="https://www.webdevcode.com/html/eastend/version1/images/about/about.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="content-column">
              <div className="about-content-block">
                <div className="section">
                  <h2 className="section-heading">
                    {"over 20 Years Of Experience in Expert Services"}
                  </h2>
                  <p>
                    There anyone who loves or pursues nor desires to obtain pain
                    of itself,, bet it is pain, but because occasionally can
                    packages as their default who loves or pursues nor desires
                    to obtain pain of the hellium.
                  </p>
                </div>
                <button className="btn-contact">Contact U</button>
              </div>
            </div>
          </div>
          <div className="row" >
            <Qualities
              icon="https://cdn-icons-png.flaticon.com/512/2491/2491921.png"
              heading="Our Strategy"
              description="It is a long established fact that app reader will be distracted by the read won’t be content page."
            />
            <Qualities
              icon="https://cdn-icons-png.flaticon.com/512/826/826070.png"
              heading="Our Mission"
              description="It is a long established fact that app reader will be distracted by the read won’t be content page."
            />
            <Qualities
              icon="https://cdn-icons-png.flaticon.com/512/2248/2248315.png"
              heading="Our Achievements"
              description="It is a long established fact that app reader will be distracted by the read won’t be content page."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
