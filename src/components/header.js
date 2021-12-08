import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "./logo";
import TopSearchBox from "./topSearchbox";
import BoxMenuDrop from "./boxmenudrop";
import ProfileMenuDrop from "./profilemenudrop";

const Header = () => {
  return (
    <div className="menu">
      <div className="menu-section">
        
        <div className="topmenu-menu-search menu-search">
          <TopSearchBox />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
