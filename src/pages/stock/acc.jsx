import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Acc() {
  const acc = Content.filter((item) => item.category === "acc");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={acc} />
        
      </div>
      
      
    </div>
  );
}
export default Acc;