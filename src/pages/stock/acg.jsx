import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Acg() {
  const acg = Content.filter((item) => item.category === "acg");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={acg} />
        
      </div>
      
      
    </div>
  );
}
export default Acg;
