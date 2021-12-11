import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Box,createTheme } from '@mui/material';
import './mai.css';

import { Grid } from '@mui/material';

import MaiOverview from './item/mai-overview';
import MaiTop10 from './item/maitop10';
import MaiInvester from './item/maiinvester';
import MaiMarketStat from './item/maimarket-stat';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function Mai(){
    return(
        <div>
             <Typography component="div" theme={theme}>
             <Box className="stock-title">Dashboard</Box>
              <div className="setmai-bt">
               <Link to="/dashboard"><button className="set-bt-mai"><Box className="setmai-bt-text">SET</Box></button></Link>
                <Link to="/mai"><button className="mai-bt-mai"><Box className="setmai-bt-text">MAI</Box></button></Link>
              </div>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  <Grid item xs={6}>
  <div className="market">
  <div className="market-over-topic-mai">
    <Box className="market-over-topic-text-mai">Market Overview</Box></div>
    <MaiOverview/>
</div>
  </Grid>
  <Grid item xs={6}>
    <div className="top10">
        <MaiTop10/>
    </div>
    <div className="maivalue">
    <Box className="mai-market-stat-topic-text">Investor Types & Market Stat</Box>
    <div className="mai-investor">
      <MaiInvester/>
    </div>
    <div className="mai-market-stat">
      <MaiMarketStat/>
    </div>
    </div>
  </Grid>
  
</Grid>
            
             </Typography>

        </div>

    );


}

export default Mai;