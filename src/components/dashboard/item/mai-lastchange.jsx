import * as React from "react";
import { createTheme, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import './lastchange.css';

function MaiLastchange() {
  const [userData, setUserdata] = useState(false);

  useEffect(() => {
    fetch(
      "https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Dashboard/MarketState?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w"
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
    
    <div>
      <Grid container>
      <Grid item xs={4}>
      <Box className="index-change-head">⁣</Box>
            </Grid>
            <Grid item xs={4}>
            <Box className="index-change-head">Last</Box>
            
            </Grid>
            <Grid item xs={4}>
            <Box className="index-change-head">Change</Box>
            
            </Grid>
           
          </Grid>
      <Grid container>
            <Grid item xs={4}>
              <Box className="index-change-topic">MAI</Box>
            </Grid>

            {getField("mai Table", "mai")[1].stringValue[0] == "+" ?
                getField("mai Table", "mai").map((info, idx) => (
                  <Grid item xs={4}>
                    <Box className="index-change-detail" style={{color: "green"}}>{info.stringValue}</Box>
                  </Grid>
                )):
                getField("mai Table", "mai").map((info, idx) => (
                  <Grid item xs={4}>
                    <Box className="index-change-detail" style={{color: "red"}}>{info.stringValue}</Box>
                  </Grid>
                ))
              }
          </Grid>
          
          
          <Grid container>
            <Grid item xs={7}>
              <Box className="market-status">Mkt status</Box>
            </Grid>
            
            {
              
                <Grid item xs={3}>
                  <Box className="mkt-detail">{userData.fields['mai Table'].mapValue.fields['Market volumn'].mapValue.fields['Mkt status'].stringValue}</Box>
                </Grid>
              
              }
            
          </Grid>
          <Grid container>
            <Grid item xs={7}>
              <Box className="volume-topic">Volume</Box>
            </Grid>
            
            {
              
                <Grid item xs={3}>
                  <Box className="volume-detail">{userData.fields['mai Table'].mapValue.fields['Market volumn'].mapValue.fields["Volumen('000)"].stringValue}</Box>
                </Grid>
              
              }
            
          </Grid>
          <Grid container>
            <Grid item xs={7}>
              <Box className="volume-topic">Value (M)</Box>
            </Grid>
            
            {
              
                <Grid item xs={3}>
                  <Box className="volume-detail">{userData.fields['mai Table'].mapValue.fields['Market volumn'].mapValue.fields["Value(M)"].stringValue}</Box>
                </Grid>
              
              }
            
          </Grid>
          
            
              <Box className="index-yield">ราคาดัชนีผลตอบแทนรวม(TRI)</Box>
              <Grid container>
            <Grid item xs={4}>
              <Box className="volume-topic">SET TRI</Box>
            </Grid>

           
                
                {userData.fields['SET TRI'].arrayValue.values
                .map((info, idx) => (
                  <Grid item xs={4}>
                  <Box className="volume-detail">{info.stringValue}</Box>
                </Grid>
                ))}
              
          </Grid>
      
    </div>
  );
}

export default MaiLastchange;
