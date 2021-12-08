import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function A5() {
  const a5 = Content.filter((item) => item.category === "a5");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={a5} />
        
      </div>
      
      
    </div>
  );
}
export default A5;
