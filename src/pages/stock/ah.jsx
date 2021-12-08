import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";



function Ah() {
  const ah = Content.filter((item) => item.category === "ah");
  return (
    <div className="main">
      <Header />
     
      <div className="all-results-container">
        
        <AllResultsCard results={ah} />
        
      </div>
      
      
    </div>
  );
}
export default Ah;
