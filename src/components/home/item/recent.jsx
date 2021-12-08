import { createTheme,Typography } from '@mui/material';
import * as React from 'react';
import './card.css';
import { Box } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});

export default function RecentNew() {
  return (
    <div className="card-style">
      <div className="new-detail">
          <img className="stock-logo" src="https://api.lorem.space/image/book?w=170&h=250"/>
          <div className="new-section">
          <Typography component="div" theme={theme}>
            <Box className="new-title">SCBX</Box>
            <Box className="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem quis, laudantium, voluptate repudiandae quae eaque, consectetur sed quia dicta inventore?</Box>
          </Typography>
          </div>
       </div>
        <div className="scroll-bar">

        </div>
        
        
    </div>
  );
}