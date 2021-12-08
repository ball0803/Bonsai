import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Aav() {
  const aav = Content.filter((item) => item.category === "aav");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={aav} />
        
      </div>
      
      
    </div>
  );
}
export default Aav;
