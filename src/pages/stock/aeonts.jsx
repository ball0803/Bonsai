import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Aeonts() {
  const aeonts = Content.filter((item) => item.category === "aeonts");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={aeonts} />
        
      </div>
      
      
    </div>
  );
}
export default Aeonts;
