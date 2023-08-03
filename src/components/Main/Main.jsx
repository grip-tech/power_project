import React, { useEffect, useState } from "react";
import "./Main.css";
import background1 from "../../assets/images/mainBackgroundImages/main-bg1.jpg";
import background2 from "../../assets/images/mainBackgroundImages/main-bg2.jpg";
import background3 from "../../assets/images/mainBackgroundImages/main-bg3.jpg";
import background4 from "../../assets/images/mainBackgroundImages/main-bg4.jpg";
import background5 from "../../assets/images/mainBackgroundImages/main-bg5.jpg";

export default function Main(props) {
  const solutionList = [
    "Voltage Stabilization",
    "Voltage Optimization",
    "Voltage Transformation",
    "Frequency Variation",
    "Power Uninterruption",
    "Harmonic Suppression",
    "Power Factor Correction",
    "Surge Protection",
  ];

  const mappedSolutions = solutionList.map((solution) => {
    return <li>{solution}</li>;
  });

  // tried to make some adjustments tothe backgroud image
  const backgroundImg = [
    `${background2}`,
    `${background3}`,
    `${background4}`,
    `${background5}`,
  ];
  const [count, setCount] = useState(0);

  const homeMainStyles = {
    background: `url("${backgroundImg[count]}")`,
    backgroundPosition: "bottom",
    transition: "background 1000ms ease-in-out",
  };
  const otherMainStyle = {
    background: `url("${background1}")`,
    fontWeight:"bold"
  };

  useEffect(() => {
    let bgSwitcher = setInterval(() => {
      setCount((prev) => {
        if (prev < backgroundImg.length - 1) return (prev += 1);
        else return 0;
      });
    }, 5000);

    return () => clearInterval(bgSwitcher);
  }, [count]);

  return (
    <>
      {props.home && (
        <main className="homeMain" style={homeMainStyles}>
          <>
            <h1 className="mainHeading">
              Better Power Quality, More Energy Saving
            </h1>
            <h2 className="subHeading">
              Complete OEM/ODM Power Solutions that Guarantee Safe, Reliable and
              Efficient
            </h2>

            <div className="serviceMainLower">
              <div className="solutionscontainer">
                <span className="solutionsFor">Solutions for:</span>
                <ul className="solutionsList">{mappedSolutions}</ul>
              </div>
              <button className="quoteBtn">GET A QUOTE</button>
            </div>
          </>
        </main>
      )}

      {props.product && (
        <main className="otherMain" style={otherMainStyle}>
          <h1 className="mainHeading">Wide Power Solutions</h1>
          <p className="subHeading">Home / Products</p>
        </main>
      )}
      {props.solutions && (
        <main className="otherMain" style={otherMainStyle}>
          <h1 className="mainHeading">
            Wide Solutions for Industrial, Commercial and Residential
            Applications
          </h1>
          <p className="subHeading">Home / Solutions</p>
        </main>
      )}
      {props.resource && (
        <main className="otherMain" style={otherMainStyle}>
          <h1 className="mainHeading">All you can learn about Power Quality knowledges here</h1>
          <p className="subHeading">Home / Resource / Knowledge Base</p>
        </main>
      )}
      {props.support && (
        <main className="otherMain" style={otherMainStyle}>
          <h1 className="mainHeading">Our typical success case studies</h1>
          <p className="subHeading">Home / Support  / Case Study</p>
        </main>
      )}
      {props.about && (
        <main className="otherMain" style={otherMainStyle}>
          <h1 className="mainHeading">About Modern</h1>
          <p className="subHeading">Home / About  / About Mordern</p>
        </main>
      )}
      {props.contact && (
        <main className="otherMain" style={otherMainStyle}>

          <p className="subHeading">Home / Contact / Contact Us</p>
        </main>
      )}
    </>
  );
}
