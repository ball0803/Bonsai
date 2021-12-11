import * as React from "react";
import { createTheme, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import './popular.css';
function MaiNetProfit() {
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
      <Grid item xs={2.5}>
      <Box className="pop-head">⁣
          หลักทรัพย์
      </Box>
            </Grid>
            <Grid item xs={3.5}>
            <Box className="pop-head">Net Margin</Box>
            
            </Grid>
            <Grid item xs={2.5}>
            <Box className="pop-head">ล่าสุด</Box>
            
            </Grid>
            <Grid item xs={3.5}>
            <Box className="pop-head">เปลี่ยนแปลง(%)</Box>
            
            </Grid>
           
          </Grid>
          <Grid container>

{getField("topNetProfitMargin", "1").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "1").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "1").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "1").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "2").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "2").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "2").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "2").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "3").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "3").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "3").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "3").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "4").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "4").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "4").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "4").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>
{getField("topNetProfitMargin", "5").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "5").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "5").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "5").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "6").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "6").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "6").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "6").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "7").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "7").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "7").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "7").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "8").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "8").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "8").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "8").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "9").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "9").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "9").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "9").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
<Grid container>

{getField("topNetProfitMargin", "10").slice(0,1)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "10").slice(1,2)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "10").slice(2,3)
    .map((info, idx) => (
      <Grid item xs={2.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
    {getField("topNetProfitMargin", "10").slice(3,4)
    .map((info, idx) => (
      <Grid item xs={3.5}>
        <Box className="pop-detail">{info.stringValue}</Box>
      </Grid>
    ))}
</Grid>
          
        </div>

    );
}
    export default MaiNetProfit;