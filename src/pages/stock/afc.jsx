import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Afc() {
  const afc = Content.filter((item) => item.category === "afc");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={afc} />
        
      </div>
      
      
    </div>
  );
}
export default Afc;
