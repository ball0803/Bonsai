import React from 'react';
import { Link,Route } from 'react-router-dom';
import './top10.css';
import { Typography,Box,createTheme } from '@mui/material';
import { useState } from 'react';
import MaiPopular from './maipopular';
import MaiGainer from './maigainer';
import MaiLoser from './mailoser';
import MaiMostVolume from './maimostvalue';
import MaiMostValue from './maimostvolume';
import MaiPE from './maipe';
import MaiDividend from './maidividend';
import MaiEPS from './maieps';
import MaiNetProfit from './mainetprofit';
import MaiROE from './mairoe';
import MaiROA from './mairoa';
const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function MaiTop10(){
  const [Top10, setTop10] = useState("popular");
    return(
        <div>
             <Typography component="div" theme={theme}>
            <div className="top10-select">
                <div className="top10-set">
                    <Box className="text-top10-w500">TOP 10</Box>
                    <Box className="text-set10-w500">MAI</Box>
                </div>
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
            </div>
            <div className="top-compo">
            {Top10 === "popular" && <MaiPopular/>}
            {Top10 === "gainer" && <MaiGainer/>}
            {Top10 === "loser" && <MaiLoser/>}
            {Top10 === "mostvalue" && <MaiMostValue/>}
            {Top10 === "mostvolume" && <MaiMostVolume/>}
            {Top10 === "pe" && <MaiPE/>}
            {Top10 === "dividend" && <MaiDividend/>}
            {Top10 === "eps" && <MaiEPS/>}
            {Top10 === "netprofit" && <MaiNetProfit/>}
            {Top10 === "roe" && <MaiROE/>}
            {Top10 === "roa" && <MaiROA/>}
            </div>
            </Typography>
        </div>

    );


}

export default MaiTop10;