import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Abico() {
  const abico = Content.filter((item) => item.category === "abico");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={abico} />
        
      </div>
      
      
    </div>
  );
}
export default Abico;
