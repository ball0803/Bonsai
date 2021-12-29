import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Graph(Data){

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
export default Graph;
