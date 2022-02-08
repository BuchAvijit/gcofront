
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function About() {
  return( 
    <Card sx={{ maxWidth: 500 , padding: 5, alignItems: 'center', marginLeft:57,marginTop:15,marginBottom:15}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image="https://number8.com/wp-content/uploads/2021/01/2021-software-development-salary-trends.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Get Certified Online
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This is an online learning platform for all the learners out there.
          Let's learn and grow together.
          This is designed by team one during the full stack developement traing on .NET and React.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    

  )
}

export default About;
