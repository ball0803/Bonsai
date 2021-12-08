import React from 'react';
import { Link,Route } from 'react-router-dom';

import './select-graph.css';
import { Typography,Box,createTheme } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function SelectGraph(){
  const [graph, setGraph] = useState("set");

  return (
    <div className="select-index">
      <select
        className="custom-select"
        value={graph}
        onChange={(e) => {
          const selectedGraph = e.target.value;
          setGraph(selectedGraph);
        }}
      >
        
        <option value="set">&nbsp;&nbsp;&nbsp;&nbsp;SET</option>
        <option value="set50">&nbsp;&nbsp;&nbsp;&nbsp;SET50</option>
        <option value="set100">&nbsp;&nbsp;&nbsp;&nbsp;SET100</option>
        <option value="sset">&nbsp;&nbsp;&nbsp;&nbsp;sSET</option>
        <option value="setclmv">&nbsp;&nbsp;&nbsp;&nbsp;SETCLMV</option>
        <option value="sethd">&nbsp;&nbsp;&nbsp;&nbsp;SETHD</option>
        <option value="setthsi">&nbsp;&nbsp;&nbsp;&nbsp;SETTHSI</option>
        <option value="setwb">&nbsp;&nbsp;&nbsp;&nbsp;SETWB</option>
        
      </select>
      
    </div>
       

    );


}

export default SelectGraph;