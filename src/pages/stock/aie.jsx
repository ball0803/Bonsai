import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Aie() {
  const aie = Content.filter((item) => item.category === "aie");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={aie} />
        
      </div>
      
      
    </div>
  );
}
export default Aie;
