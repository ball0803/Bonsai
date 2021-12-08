import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Acap() {
  const acap = Content.filter((item) => item.category === "acap");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={acap} />
        
      </div>
      
      
    </div>
  );
}
export default Acap;
