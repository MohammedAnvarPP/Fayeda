import React, { useState } from "react";
import "./CountryList.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import data from "./countryDetails/countries.json";
import CountryDetails from "./countryDetails/CountryDetails.json";
import { Button } from "@mui/material";

export const CountryList = () => {
  const [popUp, setPopUp] = useState(false);
  const [filteredPopUp, setFilteredPopUp] = useState();

  const floating = (x) => {
    setPopUp(!popUp);
    const filtered = CountryDetails.filter((y) => {
      return x.id === y.id;
    });
    setFilteredPopUp(filtered);
  };

  return (
    <div className="main-container">
      <div className="hero-img">
        <div className="heading">
          <h2 className="clr-blue-shadow font-bold">Country List</h2>
          <p className="para clr-blue">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A omnis
            harum quasi nisi odio fuga deserunt enim, dolorum eligendi maiores
            est perferendis laudantium minima rem!
          </p>
        </div>
      </div>
      <div className="flex-jst-evnly">
        <div className="block-content">
          {data?.map((x, index) => (
            <div className="block-countries" key={index}>
              <div className="block">
                <img className="country-flags" src={x.image} alt="Loading..." />
                <p className="clr-blue">{x.title}</p>
                <p className="clr-blue">{x.About}</p>
                <button
                  className="more-button"
                  onClick={() => {
                    floating(x);
                  }}
                >
                  Read More
                  <ArrowRightAltIcon className="arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3>GET A CONSULTATION</h3>
          <div className='form-fill-container'>
            <div className="form-fill"> 
              <label htmlFor="name" className="name-label">Name</label>
              <input type="text" placeholder="Name" className="txt-name" />
            </div>
            <div className="form-fill"> 
              <label htmlFor="name" className="name-label">Email</label>
              <input type="text" placeholder="Name" className="txt-name" />
            </div>
            <div className="form-fill"> 
              <label htmlFor="name" className="name-label">Mobile No.</label>
              <input type="text" placeholder="Name" className="txt-name" />
            </div>
            <Button>Click Here</Button>
          </div>
        </div>
      </div>

      {popUp && (
        <div className="popUp">
          <div className="overlay" onClick={floating}></div>
          <div className="content">
            {filteredPopUp.map((y, index) => (
              <div className="listDIv">
                <img className="pop-image" src={y.image} alt="Loading..." />
                <h2>{y.title}</h2>
                <p>{y.About}</p>
                <button
                  className="close-btn"
                  onClick={() => {
                    floating();
                  }}
                >
                  <DisabledByDefaultIcon className="close-bt-icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
