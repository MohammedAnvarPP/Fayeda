import React, { useState } from "react";
import "./CountryList.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from "@mui/icons-material/Close";
import data from "./countries.json";
import { Button } from "@mui/material";
import countryDetails from "./CountryDetails.json";
import { Debug } from "./Debug";

export const CountryList = () => {
  const [popUp, setPopUp] = useState(false);

  const floating = () => {
    setPopUp(!popUp);
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
      {data?.map((x) => (
        <div className="block-countries">
          <div className="block">
            <img className="country-flags" src={x.image} alt="Loading..." />
            <p className="clr-blue">{x.title}</p>
            <p className="clr-blue">{x.About}</p>
            <Button
              // className="more-button"
              style={{
                color: "white",
                backgroundColor: "#504b4b",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
              onClick={floating}
            >
              Read More <ArrowRightAltIcon />
            </Button>
          </div>
        </div>
      ))}
      {popUp && (
        <div className="popUp">
          <div className="overlay" onClick={floating}></div>
          {countryDetails.map((y)=> (
            <div className="content">
              <Debug data={y.image} />
              <img className="pop-image" src={y.image} alt="" />
              <h2>{y.title}</h2>
              <p>{y.About}</p>
              <button className="close-btn" color="error" onClick={floating}>
                <CloseIcon />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
