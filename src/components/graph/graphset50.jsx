import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useState,useEffect } from 'react';
import { Box } from '@mui/system';
import axios from 'axios';
function GraphSet50(){
  const [userData, setUserdata] = useState(false);
  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESET50.BK&period=5d&interval=15m").then((res)=>{
      res.data.result.map((data)=>{
        // console.log(data.Date)
        setData(Data => [...Data, [data.Date, data.Open.toFixed(2), data.High.toFixed(2), data.Low.toFixed(2), data.Close.toFixed(2)]])
      })
    })
    
  }, [])




    return (
        <div>
          
      
  <ReactApexChart options={{
          chart: {
            type: 'candlestick',
            height: 350,
            
          },
          
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        }} series={[{
          data:  Data
        }]} type="candlestick" height={350} width={500}/>
  
</div>
      
    );
  
}
export default GraphSet50;
