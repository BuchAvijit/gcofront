import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function UserDetails() {
  return (
    
    <Box sx={{ width: '100%', maxWidth: 5000 }}>
    
    <Stack>
    <Card sx={{ maxWidth: 500 , padding: 0, marginLeft:90,marginTop:10}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://miro.medium.com/max/1252/0*Zw1ZfCk0svcXVQXg.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Search user by name
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Please enter the username to search for the user
        </Typography>
      </CardContent>
    
      <CardActions>
      <Stack spacing={0} direction="row">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Stack>
      <Button variant="outlined">Get User</Button>
    
      </CardActions>
      
    </Card>

    <Card sx={{ maxWidth: 500 , padding: 0, marginLeft:15,marginTop:10,marginBottom:10}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.appsflyer.com/wp-content/uploads/2021/08/Active-users.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Search user by ID
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Please enter the User Id to search for the user
        </Typography>
      </CardContent>
    
      <CardActions>
      <Stack spacing={4} direction="row">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Stack>
      <Button variant="outlined">Get User</Button>
    
      </CardActions>
      
    </Card>
    </Stack>
  
    </Box>
  );
}
