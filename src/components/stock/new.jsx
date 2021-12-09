
import React from 'react';
import { createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { Link,Route } from 'react-router-dom';
import "./stock.css";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import app from "../../Firebase";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});

function News() {
    
  return (
      <div>
           <Typography component="div" theme={theme}>
           <Box className="stock-title">ICN</Box>
        <button className="link-fundamental"><Link className="linkto-new" to="/setting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="overlink">
          <FaRegNewspaper className="link-logo" />
          <Box className="link-fundamental-text">
          &nbsp;&nbsp;&nbsp;Fundamental&nbsp;
          </Box>
          <IoIosArrowForward
            className="link-logo"
            style={{ color: "#2EAA49" }}
          /></div></Link>
        </button>

           </Typography>
      
    
    </div>
      
    );
  }
  
  export default News;