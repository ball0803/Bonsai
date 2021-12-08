import * as React from "react";
import { createTheme, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import './popular.css';
function MaiMostValue() {
    const [userData, setUserdata] = useState(false);
  
    useEffect(() => {
      fetch(
        "https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Dashboard/Top10?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w"
      )
        .then((response) => response.json())
        .then((userData) => setUserdata(userData));
    }, []);
  
    if (!userData) {
      return <div />;
    }
  
    const getField = (field1, field2) => {
      const data = userData.fields.mai.mapValue.fields[field1].mapValue.fields[field2].arrayValue.values;
      return data
    };
    return (
        <div>
            <Grid container>
      <Grid item xs={3}>
      <Box className="pop-head">⁣
          หลักทรัพย์
      </Box>
            </Grid>
            <Grid item xs={3}>
            <Box className="pop-head">มูลค่า (บาท) </Box>
            
            </Grid>
            <Grid item xs={3}>
            <Box className="pop-head">ล่าสุด</Box>
            
            </Grid>
            <Grid item xs={3}>
            <Box className="pop-head">เปลี่ยนแปลง(%)</Box>
            
            </Grid>
           
          </Grid>
          <Grid container>

            {getField("mostActiveValue", "1")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

            {getField("mostActiveValue", "2")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

            {getField("mostActiveValue", "3")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

            {getField("mostActiveValue", "4")
              .map((info, idx) => (
                <Grid item xs={3}>
                  <Box className="pop-detail">{info.stringValue}</Box>
                </Grid>
              ))}
          </Grid>
          <Grid container>

{getField("mostActiveValue", "5")
  .map((info, idx) => (
    <Grid item xs={3}>
      <Box className="pop-detail">{info.stringValue}</Box>
    </Grid>
  ))}
</Grid>
<Grid container>

{getField("mostActiveValue", "6")
  .map((info, idx) => (
    <Grid item xs={3}>
      <Box className="pop-detail">{info.stringValue}</Box>
    </Grid>
  ))}
</Grid>
<Grid container>

{getField("mostActiveValue", "7")
  .map((info, idx) => (
    <Grid item xs={3}>
      <Box className="pop-detail">{info.stringValue}</Box>
    </Grid>
  ))}
</Grid>
<Grid container>

{getField("mostActiveValue", "8")
  .map((info, idx) => (
    <Grid item xs={3}>
      <Box className="pop-detail">{info.stringValue}</Box>
    </Grid>
  ))}
</Grid>
<Grid container>

{getField("mostActiveValue", "9")
  .map((info, idx) => (
    <Grid item xs={3}>
      <Box className="pop-detail">{info.stringValue}</Box>
    </Grid>
  ))}
</Grid>
<Grid container>

{getField("mostActiveValue", "10")
  .map((info, idx) => (
    <Grid item xs={3}>
      <Box className="pop-detail">{info.stringValue}</Box>
    </Grid>
  ))}
</Grid>
          
        </div>

    );
}
    export default MaiMostValue;