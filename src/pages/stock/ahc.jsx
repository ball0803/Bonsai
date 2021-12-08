import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Ahc() {
  const ahc = Content.filter((item) => item.category === "ahc");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={ahc} />
        
      </div>
      
      
    </div>
  );
}
export default Ahc;
