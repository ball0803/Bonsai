import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Adb() {
  const adb = Content.filter((item) => item.category === "adb");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={adb} />
        
      </div>
      
      
    </div>
  );
}
export default Adb;
