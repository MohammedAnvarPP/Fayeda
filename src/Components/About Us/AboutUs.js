import React, { useState } from "react";
import "./About.css";
import Qualities from "./Qualities";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Testimonial from "./Testimonial";
import FayServices from "./FayServices";

const AboutUs = () => {
  const [counter, setCounter] = useState(false);
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
         
        </div>
        {/* card-qualities */}
        <div className="row">
        <div className="row-Quality">
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
      {/* facts-counter */}
      <div className="facts-row">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => {
          setCounter(false);
        }}
      >
       
          {counter && (
            <div className="facts-field">
              <div className="factsnumber">
                <h1>
                  <CountUp start={0} end={2000} duration={2} delay={0} />+
                </h1>
                <h3>customers</h3>
              </div>
              <div className="factsnumber">
                <h1>
                  <CountUp start={0} end={55} duration={2} delay={0} />+
                </h1>
                <h3>Countries</h3>
              </div>
              <div className="factsnumber">
                <h1>
                  <CountUp start={0} end={100} duration={2} delay={0} />%
                </h1>
                <h3>Satisfaction</h3>
              </div>
              <div className="factsnumber">
                <h1>
                  <CountUp start={0} end={4.5} duration={2} delay={0} />%
                </h1>
                <h3>reviews</h3>
              </div>
            </div>
          )}
       
      </ScrollTrigger>
      </div>
      {/* testimonial  */}
      <div className="testimonial">
      <Testimonial/>
      </div>
      {/* company-services */}
      <FayServices/>
    </div>
  );
};

export default AboutUs;
