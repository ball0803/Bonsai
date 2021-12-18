import React from 'react';
import './tutorial.css';
import { Typography,Box,createTheme } from '@mui/material';
import SideMenu from '../SideMenu';

const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

function Tutorial(){
  
  return (
    <>
      <SideMenu focus="Tutorial"/>
      <div className="container">
        <Typography component="div" theme={theme}>
          <div className='title-box'>
            <Box className="head-title">Tutorial</Box>
          </div>
          <div className='video-tutorial'>
            <iframe
            width={1120}
            height={630}
            src="https://www.youtube.com/embed/MStHdo_jDlk"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
          </div>
        </Typography>
      </div>
    </>
  );
  
}
export default Tutorial;
