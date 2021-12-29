import React from 'react';
import { useState,useEffect } from 'react';
import { Link,Route } from 'react-router-dom';
import axios from 'axios';

import './select-graph.css';
import { Typography,Box,createTheme } from '@mui/material';
import Graph from '../../graph/graph';
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
  const [Loading, setLoading] = useState(false)
  const tickers = ['SET', 'SET50', 'SET100', 'sSET', 'SETCLMV', 'SETHD', 'SETTHSI', 'SETWB']
  const [Data, setData] = useState([])
  const [TData, setTData] = useState([])
  console.log(TData)
  // // console.log(Data)
  // const r1 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESET.BK&period=5d&interval=15m")
  // const r2 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESET50.BK&period=5d&interval=15m")
  // const r3 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESET100.BK&period=5d&interval=15m")
  // const r4 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESSET.BK&period=5d&interval=15m")
  // const r5 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESETCLMV.BK&period=5d&interval=15m")
  // const r6 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESETHD.BK&period=5d&interval=15m")
  // const r7 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESETTHSI.BK&period=5d&interval=15m")
  // const r8 = axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESETWB.BK&period=5d&interval=15m")
  
  useEffect(() => {
    // axios.get("https://bonsai-finan-api.herokuapp.com/ticker=%5ESET.BK&period=5d&interval=15m")
    // .then((res)=>{
    //   res.data.result.map((data)=>{
    //     setData(Data => [...Data, [data.Date, data.Open.toFixed(2), data.High.toFixed(2), data.Low.toFixed(2), data.Close.toFixed(2)]])
    //   })
      
    //   setTData({...TData, "SET": Data})
    //   console.log(Data)
    // })
    // axios.all([r1, r2, r3, r4, r5, r6, r7, r8])
    // .then(
    //   axios.spread((...res)=>{
    //     res.map((re, index)=>{
    //       setTData((TData) =>([...TData, re.data.result.map((data)=>
    //         {[data.Date, data.Open.toFixed(2), data.High.toFixed(2), data.Low.toFixed(2), data.Close.toFixed(2)]}
    //         )]
    //         ))
    //     })
    //   })
    // )
    
    setLoading(true)
  }, [])

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
        {/* {
          tickers.map((ticker)=>
            <option value={ticker} onClick={()=>setGraph(ticker)}>&nbsp;&nbsp;&nbsp;&nbsp;{ticker}</option>
          )
        } */}
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
        {/* {
          Loading ? <Graph Data={Data}/> : null
        } */}
        {/* {Loading && <Graph Data={Data}/>} */}
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