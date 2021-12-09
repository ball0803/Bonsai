import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './home.css';
import { Typography,Box,createTheme } from '@mui/material';
import { Grid} from '@mui/material';
import RecentNew from './item/recent';
import RecommendNew from './item/recomment';
import Sidebar from '../Sidebar';


const theme = createTheme({
    typography: {
      fontFamily: [
        'Kanit',
        'sans-serif',
      ].join(','),
    },
  });

function Home(){
    return(
      
        <div className="bghome">
          
             <Typography component="div" theme={theme}>
      <Box className="kanit600">News</Box>
      <div className="top-new">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Box className="kanit500-home" >Recent News</Box>
      <RecentNew/>
  </Grid>
  <Grid item xs={6}>
    <Box className="kanit500-home" >Recommend News</Box>
      <RecommendNew/>
  </Grid>
</Grid>

      
    </div>
    <Box className="kanit500-home" >Categories News</Box>
    
        <Box className="category-box" >
        
        </Box>
      

    </Typography>
            

            
        </div>

    );


}

export default Home;