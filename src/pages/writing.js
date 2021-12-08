import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";



function Writing() {
  const writing = Content.filter((item) => item.category === "writing");
  return (
    <div className="main">
      <Header />
      
      <div className="all-results-container">
       
        <AllResultsCard results={writing} />
      </div>
      
    </div>
  );
}
export default Writing;
