import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Advanc() {
  const advanc = Content.filter((item) => item.category === "advanc");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={advanc} />
        
      </div>
      
      
    </div>
  );
}
export default Advanc;
