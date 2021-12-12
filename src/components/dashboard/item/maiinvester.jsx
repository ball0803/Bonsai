import * as React from "react";
import { createTheme, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import './popular.css';
function MaiInvester() {
    const [userData, setUserdata] = useState(false);
  
    useEffect(() => {
      fetch(
        "https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Dashboard/InvestorType?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w"
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
      <Grid item xs={3}>
      <Box className="pop-head">⁣
     Type
      </Box>
            </Grid>
            <Grid item xs={3}>
            <Box className="pop-head">Buy</Box>
            
            </Grid>
            <Grid item xs={3}>
            <Box className="pop-head">Sell</Box>
            
            </Grid>
            <Grid item xs={3}>
            <Box className="pop-head">Net</Box>
            
            </Grid>
           
          </Grid>
         <Grid container>

            {getField("mai", "institute")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

            {getField("mai", "bankAcc")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

            {getField("mai", "foreign")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

            {getField("mai", "local")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          
          
        </div>

    );
}
    export default MaiInvester;