import React from 'react';
import { Link,Route } from 'react-router-dom';
import './top10.css';
import { Typography,Box,createTheme } from '@mui/material';
import { useState } from 'react';
import Popular from './popular';
import Gainer from './gainer';
import Loser from './loser';
import MostValue from './mostvalue';
import MostVolume from './mostvolumn';
import PE from './pe';
import Dividend from './dividend';
import EPS from './eps';
import NetProfit from './netprofit';
import ROE from './roe';
import ROA from './roa';
import Grid from '@mui/material/Grid';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function Top10(){
  const [Top10, setTop10] = useState("popular");
    return(
        <div>
             <Typography component="div" theme={theme}>
             <Grid container spacing={2}>
  <Grid item xs={3.5}>
  <div className="top10-set">
                    <Box className="text-top10-w500">TOP 10</Box>
                    <Box className="text-set10-w500">SET</Box>
                </div>
  </Grid>
  <Grid item xs={8.5}>
  <div>
                <select
        className="top-select"
        value={Top10}
        onChange={(e) => {
          const selectedTop = e.target.value;
          setTop10(selectedTop);
        }}
      >
        
        <option value="popular" onClick={()=>setTop10("popular")}>&nbsp;&nbsp;&nbsp;&nbsp;Popular Quote</option>
        <option value="gainer" onClick={()=>setTop10("gainer")}>&nbsp;&nbsp;&nbsp;&nbsp;Top Gainer</option>
        <option value="loser" onClick={()=>setTop10("loser")}>&nbsp;&nbsp;&nbsp;&nbsp;Top Loser</option>
        <option value="mostvalue" onClick={()=>setTop10("mostvalue")}>&nbsp;&nbsp;&nbsp;&nbsp;Most Active Value</option>
        <option value="mostvolume" onClick={()=>setTop10("mostvolume")}>&nbsp;&nbsp;&nbsp;&nbsp;Most Active Volume</option>
        <option value="pe" onClick={()=>setTop10("pe")}>&nbsp;&nbsp;&nbsp;&nbsp;Top P/E</option>
        <option value="dividend" onClick={()=>setTop10("dividend")}>&nbsp;&nbsp;&nbsp;&nbsp;Top Dividend Yield</option>
        <option value="eps" onClick={()=>setTop10("eps")}>&nbsp;&nbsp;&nbsp;&nbsp;Top EPS</option>
        <option value="netprofit" onClick={()=>setTop10("netprofit")}>&nbsp;&nbsp;&nbsp;&nbsp;Top Net Profit Margin</option>
        <option value="roe" onClick={()=>setTop10("roe")}>&nbsp;&nbsp;&nbsp;&nbsp;Top ROE</option>
        <option value="roa" onClick={()=>setTop10("roa")}>&nbsp;&nbsp;&nbsp;&nbsp;Top ROA</option>
      </select>
      
                </div>
  </Grid>
 
</Grid>
            
                
              
            
            <div className="top-compo">
            {Top10 === "popular" && <Popular/>}
            {Top10 === "gainer" && <Gainer/>}
            {Top10 === "loser" && <Loser/>}
            {Top10 === "mostvalue" && <MostValue/>}
            {Top10 === "mostvolume" && <MostVolume/>}
            {Top10 === "pe" && <PE/>}
            {Top10 === "dividend" && <Dividend/>}
            {Top10 === "eps" && <EPS/>}
            {Top10 === "netprofit" && <NetProfit/>}
            {Top10 === "roe" && <ROE/>}
            {Top10 === "roa" && <ROA/>}
            </div>
            </Typography>
        </div>

    );


}

export default Top10;
