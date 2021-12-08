import React, { useState } from "react";
import Header from "../components/header";

import All from "../components/all";

function AllResults() {
  return (
    <div className="main">
      <Header />
      
      <div className="all-container">
        <All />
      </div>
      
    </div>
  );
}
export default AllResults;
