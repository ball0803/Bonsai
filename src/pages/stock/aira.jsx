import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Aira() {
  const aira = Content.filter((item) => item.category === "aira");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={aira} />
        
      </div>
      
      
    </div>
  );
}
export default Aira;
