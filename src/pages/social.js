import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";



function Social() {
  const contact = Content.filter((item) => item.category === "social");
  return (
    <div className="main">
      <Header />
      
      <div className="all-results-container">
        
        <AllResultsCard results={contact} />
      </div>
      
    </div>
  );
}
export default Social;