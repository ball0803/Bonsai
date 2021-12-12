import React from 'react';

import { useState,useEffect } from 'react';
import { Typography,Box,createTheme } from '@mui/material';
import axios from 'axios';

const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

function Tutorial(){
  


    return (
        
        <div>
            <Typography component="div" theme={theme}>
            <div className='title-box'>
      <Box className="head-title">Tutorial</Box>
      </div>

                </Typography>

        </div>
      
    );
  
}
export default Tutorial;
