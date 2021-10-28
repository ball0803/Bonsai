import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://github.com/ball0803/Bonsai/blob/master/public/favicon/logo.png?raw=true"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stock New
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam harum officia deserunt inventore hic explicabo.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

