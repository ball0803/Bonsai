import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Ai() {
  const ai = Content.filter((item) => item.category === "ai");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={ai} />
        
      </div>
      
      
    </div>
  );
}
export default Ai;
