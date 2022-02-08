import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

function CourseManager() {
  return (

    
    
    <Stack>
    <Card sx={{ maxWidth: 500 , padding: 0, marginLeft:57,marginTop:10,marginBottom:10}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://st.depositphotos.com/1152339/3986/i/950/depositphotos_39864439-stock-photo-web-development-concept-update-on.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Update Course
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Please enter the course id to update course
        </Typography>
        <TextField
                margin="normal"
                required
                fullWidth
                name="Course ID"
                label="Course ID"
                type="Course ID"
                id="Course ID"
                autoComplete="Course ID"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="Course name"
                label="Course Name"
                type="Course name"
                id="Course name"
                autoComplete="Course name"
              />
            <TextField
                margin="normal"
                required
                fullWidth
                name="Course description"
                label="Course description"
                type="Course description"
                id="Course description"
                autoComplete="Course description"
              />
      </CardContent>
    
      <CardActions>
      <Button variant="outlined">Update Course</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 500 , padding: 0, marginLeft:57,marginTop:10,marginBottom:10}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://cdn.teknotut.com/wp-content/uploads/2019/05/menghapus-file-dengan-kondisi-tertentu-di-linux.png.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Delete Course
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Please enter the course id to delete
        </Typography>
        <TextField
                margin="normal"
                required
                fullWidth
                name="Course ID"
                label="Course ID"
                type="Course ID"
                id="Course ID"
                autoComplete="Course ID"
              />
      </CardContent>
    
      <CardActions>
      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 500 , padding: 0, marginLeft:57,marginTop:10,marginBottom:10}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://repository-images.githubusercontent.com/139493629/c438f200-586c-11ea-99da-b64e59deeed3"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Upload Course
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Please enter the course details
        </Typography>
        <TextField
                margin="normal"
                required
                fullWidth
                name="Course ID"
                label="Course ID"
                type="Course ID"
                id="Course ID"
                autoComplete="Course ID"
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="Course name"
                label="Course Name"
                type="Course name"
                id="Course name"
                autoComplete="Course name"
              />
            <TextField
                margin="normal"
                required
                fullWidth
                name="Course description"
                label="Course description"
                type="Course description"
                id="Course description"
                autoComplete="Course description"
              />
<Typography variant="body2" color="text.secondary">
        Please Upload image for course showcase
        </Typography>
        <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      </CardContent>
    
      <CardActions>
      <Button variant="outlined">Submit</Button>
      </CardActions>
    </Card>


  </Stack>
  );
}

export default CourseManager;
