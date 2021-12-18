import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";
import { Typography,Box,createTheme, buttonClasses } from '@mui/material';
import { Button } from "@mui/material";
/**
 * @author
 * @function SideMenu
 **/
 const theme = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});
// added more menuItems for testing
export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "bi bi-house-door-fill",
  },
  {
    name: "Search",
    exact: true,
    to: "/search",
    iconClassName: "bi bi-search",
    
  },
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "bi bi-bar-chart-fill",
  },
  {
    name: "Tutorial",
    exact: true,
    to: "/tutorial",
    iconClassName: "bi bi-question-lg",
  },
  
  
  
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const [Focus, setFocus] = useState(props.focus)

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
          <img src={logo} alt="webscript" className="logo"/>
        <Typography className="side-brand" component="div" theme={theme}>
            <Box className="side-name">Bonsai</Box>
            <Box className="side-text">Stock News</Box>
          </Typography>
      </div>
      
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            menuItem.name == Focus ?
            <Button variant="outlined" 
            href={menuItem.to}
            startIcon={<i class={menuItem.iconClassName} style={{marginRight: "10px", color: "#2A9F3D"}}></i>}
            style={{borderRadius: "15px",
            width: '200px',
            marginTop: "15px",
            backgroundColor: "#fff",
            border: '3px solid',
            justifyContent: "flex-start",
            borderColor: "#2A9F3D",
            fontWeight: "500",
            color: "black"}}
            onClick={()=>{setFocus(menuItem.name)}}
            >
              {menuItem.name}
            </Button>:
            <Button variant="text"
            href={menuItem.to}
            startIcon={<i class={menuItem.iconClassName} style={{margin: "0 10px 0 10px", color: "#B9B9B9"}}></i>}
            style={{borderRadius: "15px",
            width: '200px',
            marginTop: "15px",
            justifyContent: "flex-start",
            fontWeight: "500",
            color: "#B9B9B9"}}
            onClick={()=>{setFocus(menuItem.name)}}
            >
              {menuItem.name}
            </Button>
          ))}
        </ul>
      </div>

     
    </div>
  );
};

export default SideMenu;
