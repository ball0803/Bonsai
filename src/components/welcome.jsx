import './welcome.css';
import React from 'react';
import { createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { Link,Route } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});

function Welcome() {
    return (
      <div className="main-welcome">
      <img className = "bg" src="./asset/bgwelcome.png" alt="background" width = "100%" height = "100%" />
       <div className="main-title">
       <img className="bonsai-logo" alt="logo" src="asset/Logo.svg" width="25%"/>
       <Typography className="text-title" component="div" theme={theme}>
      <Box className="kanit700">BONSAI</Box>
      <Box className="kanit500" >STOCK NEWS</Box>
    </Typography>
    </div>
    <div className="main-bottom">
    <div className="bt-text">
    <Typography className="text-bottom" component="div" theme={theme}>
      <Box className="kanit400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เว็บไซด์ Bonsai เว็บไซด์ในการหาข่าวเกี่ยวกับหุ้นภายในประเทศเพื่อให้ง่ายต่อการตัดสินใจของนักลงทุนหน้าใหม่และนักลงทุนเก่า ซึ่งมุ่งเน้นให้ผู้ใช้ทุกรุ่นสามารถใช้ได้อย่างง่ายดาย โดยกรองแค่หัวข้อสำคัญเท่านั้นมาให้ผู้ใช้ได้เห็นไม่ว่าจะเป็น กราฟ set ที่บงบอกแนวโน้มของตลาดภายในวันต่อวัน ราคาหุ้นที่เพิ่มขึ้นสูงสุดและลดลงสูงสุดต่อวัน กลุ่มตลาดที่สนใจภายในประเทศ และที่สำคัญข่าวของบริษัทนั้นๆ โดยทางคณะผู้จัดทำได้ดึงข้อมูลเหล่านี้มาจากแหล่งที่มองว่าเชื่อถือที่สุด ภายในเว็บจะเน้นความง่ายเพื่อความเป็นมิตรกับรายใหม่ที่มักมองว่าการลงทุนเป็นเรื่องที่ยากให้กลายเป็นเรื่องง่าย</Box>
    </Typography>
    <div className="bt">
    <Link to="/home"><button className="button-68" role="button">Enter Site</button></Link>
    <button className="button-33" role="button">Tutorial</button>
    </div>
    </div>
    <img className="frame" alt="frame" src="asset/Frame.svg" width="40%"/>
    </div>
      
    
    </div>
      
    );
  }
  
  export default Welcome;