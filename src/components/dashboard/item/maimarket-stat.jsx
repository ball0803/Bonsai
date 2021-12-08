import * as React from "react";
import { createTheme, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import './select-graph.css';
import './market-stat.css';
function MaiMarketStat() {
    const [userData, setUserdata] = useState(false);
  
    useEffect(() => {
      fetch(
        "https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Dashboard/MarketStat?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w"
      )
        .then((response) => response.json())
        .then((userData) => setUserdata(userData));
    }, []);
  
    if (!userData) {
      return <div />;
    }
  
    const getField = (field1, field2) => {
      const data = userData.fields[field1].mapValue.fields[field2].arrayValue.values;
      return data
    };
    return (
        <div className='top-compo'>
            <Grid container>
      <Grid item xs={12}>
      <Box className="stat-head">⁣
          Market Stat
      </Box>
            </Grid>
           
          </Grid>
          <Grid container>

            {getField("mai", "marketCap").slice(0,1)
              .map((info, idx) => (
                <Grid item xs={6}>
                  <Box className="stat-detail">{info.stringValue}</Box>
                </Grid>
                
              ))}
              <Grid item xs={3}>
                  <Box className="stat-detail"></Box>
                </Grid>
                {getField("mai", "marketCap").slice(1,2)
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="stat-detail-value">{info.stringValue}</Box>
                </Grid>
                
              ))}
          </Grid>

          <Grid container>

            {getField("mai", "turnOverRation").slice(0,1)
              .map((info, idx) => (
                <Grid item xs={6}>
                  <Box className="stat-detail">{info.stringValue}</Box>
                </Grid>
                
              ))}
              <Grid item xs={3}>
                  <Box className="stat-detail"></Box>
                </Grid>
                {getField("mai", "turnOverRation").slice(1,2)
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="stat-detail-value">{info.stringValue}</Box>
                </Grid>
                
              ))}
          </Grid>
       <Grid container>

            {getField("mai", "P/E").slice(0,1)
              .map((info, idx) => (
                <Grid item xs={6}>
                  <Box className="stat-detail">{info.stringValue}</Box>
                </Grid>
                
              ))}
              <Grid item xs={3}>
                  <Box className="stat-detail"></Box>
                </Grid>
                {getField("mai", "P/E").slice(1,2)
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="stat-detail-value">{info.stringValue}</Box>
                </Grid>
                
              ))}
          </Grid>

        <Grid container>

            {getField("mai", "P/BV").slice(0,1)
              .map((info, idx) => (
                <Grid item xs={6}>
                  <Box className="stat-detail">{info.stringValue}</Box>
                </Grid>
                
              ))}
              <Grid item xs={3}>
                  <Box className="stat-detail"></Box>
                </Grid>
                {getField("mai", "P/BV").slice(1,2)
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="stat-detail-value">{info.stringValue}</Box>
                </Grid>
                
              ))}
          </Grid>
            <Grid container>

            {getField("mai", "marketYield").slice(0,1)
              .map((info, idx) => (
                <Grid item xs={6}>
                  <Box className="stat-detail">{info.stringValue}</Box>
                </Grid>
                
              ))}
              <Grid item xs={3}>
                  <Box className="stat-detail"></Box>
                </Grid>
                {getField("mai", "marketYield").slice(1,2)
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="stat-detail-value">{info.stringValue}</Box>
                </Grid>
                
              ))}
          </Grid>
        </div>

    );
}
    export default MaiMarketStat;