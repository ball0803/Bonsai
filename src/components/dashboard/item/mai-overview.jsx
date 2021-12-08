import React from 'react';
import { Link,Route } from 'react-router-dom';

import './market_overview.css';
import { Typography,Box,createTheme } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import MaiLastchange from './mai-lastchange';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function MaiOverview(){
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
    return(
        <div>
            <Typography component="div" theme={theme}>
            <div className="select-index">
            <Box className="mai-topic">
                MAI
            </Box>
            {getField("mai Table", "mai").slice(0,1)
              .map((info, idx) => (
                
                  <Box className="index-number">{info.stringValue}</Box>
                
              ))}
              {getField("mai Table", "mai").slice(1,2)
              .map((info, idx) => (
                
                  <Box className="change-index-number">({info.stringValue})</Box>
                
              ))}
        </div>
            
        <div className="lastchange-compo">
            <MaiLastchange/>
        </div>
</Typography>
        </div>

    );


}

export default MaiOverview;