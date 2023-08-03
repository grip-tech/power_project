import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Lorem from "../../components/Lorem";

export default function Home() {
  return (
    <div className="home">
      <Main home/>
      <Lorem />
    </div>
  );
}
