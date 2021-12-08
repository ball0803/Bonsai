import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Sevenup() {
  const sevenup = Content.filter((item) => item.category === "7up");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={sevenup} />
        
      </div>
      
      
    </div>
  );
}
export default Sevenup;
