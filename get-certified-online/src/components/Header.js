
import * as React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Get Certified Online
        </Link>
        
        <Link className='links' to='/courses'>
          Courses
        </Link>
        <Link className='links' to='/coursemanager'>
          Course Manager
        </Link>
        <Link className='links' to='/userdetails'>
          Users
        </Link>
        <Link className='links' to='/about'>
          About Us
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' to='/login'>
          <Button variant="outlined">Login</Button>
          </Link>
          <Link className='links' to='/signup'>
          <Button variant="outlined">Sign Up</Button>
            
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header

/*
  
       
*/
