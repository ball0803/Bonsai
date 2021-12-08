import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Threek() {
  const threek = Content.filter((item) => item.category === "3k-bat");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={threek} />
        
      </div>
      
      
    </div>
  );
}
export default Threek;
