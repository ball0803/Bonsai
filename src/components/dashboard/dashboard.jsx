import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Box,createTheme } from '@mui/material';
import './dashboard.css';
import { useState } from 'react';

import { Grid } from '@mui/material';
import Lastchange from './item/lastchangetable';
import MarketOverview from './item/market_overview';
import MarketStat from './item/market_stat';
import Top10 from './item/top10';
import Invester from './item/invester';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function Dashboard(){
  const [active, setActive] = useState("MarketOverview"); 
  
  return(
        <div>
             <Typography component="div" theme={theme}>
             <Box className="kanit600">Dashboard</Box>
              <div className="setmai-bt">
               <Link to="/dashboard"><button className="set-bt"><Box className="setmai-bt-text">SET</Box></button></Link>
                <Link to="/mai"><button className="mai-bt"><Box className="setmai-bt-text">MAI</Box></button></Link>
              </div>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

  <Grid item xs={6}>
  <div className="market">
    <div className="market-over-topic">
    <Box className="market-over-topic-text">Market Overview</Box></div>
  <MarketOverview/>
</div>
  </Grid>
  <Grid item xs={6}>
    <div className="top10">
        <Top10/>
    </div>
    <div className="value">
    <Box className="market-stat-topic-text">Investor Types & Market Stat</Box>
    <div className="investor">
      <Invester/>
    </div>
    <div className="market-stat">
      <MarketStat/>
    </div>
    </div>
  </Grid>
  
</Grid>
            
             </Typography>

        </div>

    );


}

export default Dashboard;