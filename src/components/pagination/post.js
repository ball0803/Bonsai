import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
      {posts &&
        posts.map((item) => (
          <Grid item xs={4}>
            <a class="link-newbox" href={item.link} target="_blank">
            <div className="new-box">
              {item.pic ? <img src={item.pic==='https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://www.mitihoon.com/wp-content/uploads/2017/12/Blue-150x100.jpg' ? 'https://www.mitihoon.com/wp-content/uploads/2018/01/mitihoon.jpg':item.pic} alt="" width="100%"/> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaCI-qKlHLUj70F15CT6NDY6ku49oiDRK__BYPuBGDz0lz-7CxCRx78qVDO-0Kku2d6c&usqp=CAU" alt="" width="100%"/>}
              <Box className="hearder">{item.header}</Box>
              {item.summary ? <Box className="summary">{item.summary.slice(0,100)}...</Box> : null}
              <Box className="date"><time dateTime={item.date}>{item.date.toDate().toDateString()}</time></Box>
              </div>
            </a>
            
          </Grid>
        ))}
    </Grid>
    </div>
  );

};

export default Posts;