import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Abm() {
  const abm = Content.filter((item) => item.category === "abm");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={abm} />
        
      </div>
      
      
    </div>
  );
}
export default Abm;
