import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Ace() {
  const ace = Content.filter((item) => item.category === "ace");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={ace} />
        
        
      </div>
      
      
    </div>
  );
}
export default Ace;
