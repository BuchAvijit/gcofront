import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Get Certified Online
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
        <Link className='links' to='/Contactus'>
          <button >Contact Us</button>
          </Link>
        </li>
        <li>
        <Link className='links' to='/suggestion box'>
          <button>Suggestion Box</button>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
        <Link className='links' to='/privacypolicy'>
          <button>Privacy Policy</button>
          </Link>
        </li>
        <li>
        <Link className='links' to='/giveaway'>
          <button>Giveaway</button>
          </Link>
        </li>
      </ul>
      <Copyright></Copyright>
    </footer>
  )
}

export default Footer
