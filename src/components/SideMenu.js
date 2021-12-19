import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";

import { Typography,Box,createTheme } from '@mui/material';
import { Button, Tab, Tabs } from "@mui/material";

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
  const [Value, setValue] = useState(0)
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
    const tabStyle = {
      default_tab:{
          color: "grey",
          width: '200px',
          height: "40px",
      },
      active_tab:{
          color: "#2A9F3D",
          width: '200px',
          height: "40px",
      }
  };

  const scrollElement =[props.IS, props.SG, props.FR, props.FS]
  
  const handleScroll = ref => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.currentl.offestTop
    })
  }

  function getStyle (isActive) {
      return isActive ? tabStyle.active_tab : tabStyle.default_tab
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    scrollElement[newValue].current.scrollIntoView({ behavior: 'smooth' })
  };

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
            menuItem.name == Focus ? Focus === "Search" && props.fundi ?
            <>
            <Button variant="outlined" 
            href={menuItem.to}
            startIcon={<i class={menuItem.iconClassName} style={{marginRight: "10px", color: "#2A9F3D"}}></i>}
            style={{
            borderRadius: "15px",
            height: "40px",
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
            </Button>
            <Tabs
            TabIndicatorProps={{style: {background:"#2A9F3D", left: 0}}}
              orientation="vertical"
              variant="scrollable"
              value={Value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Important Stat" style={ getStyle(Value === 0) } {...a11yProps(0)} />
                <Tab label="Summary Growth" style={ getStyle(Value === 1) } {...a11yProps(1)} />
                <Tab label="Finance Rate" style={ getStyle(Value === 2) } {...a11yProps(2)} />
                <Tab label="Finance Summary" style={ getStyle(Value === 3) } {...a11yProps(3)} />
            </Tabs>
            </>
            :
            <Button variant="outlined" 
            href={menuItem.to}
            startIcon={<i class={menuItem.iconClassName} style={{marginRight: "10px", color: "#2A9F3D"}}></i>}
            style={{borderRadius: "15px",
            height: "40px",
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
            </Button>
            :
            <Button variant="text"
            href={menuItem.to}
            startIcon={<i class={menuItem.iconClassName} style={{margin: "0 10px 0 10px", color: "#B9B9B9"}}></i>}
            style={{borderRadius: "15px",
            height: "40px",
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
