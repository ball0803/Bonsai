import React from 'react';
import { Link,Route } from 'react-router-dom';

import './select-graph.css';
import { Typography,Box,createTheme } from '@mui/material';
import { useState } from 'react';
import GraphSet from '../../graph/graphset';
import GraphSet50 from '../../graph/graphset50';
import GraphSet100 from '../../graph/graphset100';
import GraphsSet from '../../graph/graphsset';
import GraphSetCLMV from '../../graph/graphsetclmv';
import GraphSetHD from '../../graph/graphsethd';
import GraphSetTHSI from '../../graph/graphsetthsi';
import GraphSetWB from '../../graph/graphsetwb';

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
    <div>
      <div className="select-index">
      <select
        className="custom-select"
        value={graph}
        onChange={(e) => {
          const selectedGraph = e.target.value;
          setGraph(selectedGraph);
        }}
      >
        
        <option value="set" onClick={()=>setGraph("set")}>&nbsp;&nbsp;&nbsp;&nbsp;SET</option>
        <option value="set50" onClick={()=>setGraph("set50")}>&nbsp;&nbsp;&nbsp;&nbsp;SET50</option>
        <option value="set100" onClick={()=>setGraph("set100")}>&nbsp;&nbsp;&nbsp;&nbsp;SET100</option>
        <option value="sset" onClick={()=>setGraph("sset")}>&nbsp;&nbsp;&nbsp;&nbsp;sSET</option>
        <option value="setclmv" onClick={()=>setGraph("setclmv")}>&nbsp;&nbsp;&nbsp;&nbsp;SETCLMV</option>
        <option value="sethd" onClick={()=>setGraph("sethd")}>&nbsp;&nbsp;&nbsp;&nbsp;SETHD</option>
        <option value="setthsi" onClick={()=>setGraph("setthsi")}>&nbsp;&nbsp;&nbsp;&nbsp;SETTHSI</option>
        <option value="setwb" onClick={()=>setGraph("setwb")}>&nbsp;&nbsp;&nbsp;&nbsp;SETWB</option>
        
      </select>
      </div>

      <div className="graph-compo">
            {graph === "set" && <GraphSet/>}
            {graph === "set50" && <GraphSet50/>}
            {graph === "set100" && <GraphSet100/>}
            {graph === "sset" && <GraphsSet/>}
            {graph === "setclmv" && <GraphSetCLMV/>}
            {graph === "sethd" && <GraphSetHD/>}
            {graph === "setthsi" && <GraphSetTHSI/>}
            {graph === "setwb" && <GraphSetWB/>}
            </div>

    </div>
       

    );


}

export default SelectGraph;