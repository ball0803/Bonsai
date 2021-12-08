import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";



function Works() {
  const works = Content.filter((item) => item.category === "works");
  return (
    <div className="main">
      <Header />
      
      <div className="all-results-container">
       
        <AllResultsCard results={works} />
      </div>
      
    </div>
  );
}
export default Works;
