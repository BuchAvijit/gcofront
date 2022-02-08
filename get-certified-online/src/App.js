import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import About from './components/About'
import Courses from './components/Courses'
import CourseManager from './components/CourseManager'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Showcase />
          <Destinations />
        </Route>
        <Route path='/courses'>
          <Courses />
        </Route>
        <Route path='/coursemanager'>
          <CourseManager/>
        </Route>
        <Route path='/userdetails'>
          <UserDetails/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
       
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
