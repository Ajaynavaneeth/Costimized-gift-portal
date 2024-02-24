import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Birthday from './components/Birthday';

function App() {
  return (
    
       <Router>
      
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/SignUp" element={<Signin/>}/>
       <Route path="/Register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/> 
      <Route path="/profile" element={<Profile/>}/> 
      {/* <Route path="/Birthday" element={<Birthday/>}/> */}
      
    </Routes>
  </Router>


  //   <div>
  //     <Login/>
  //  </div>
      

    
     
   
  )
}

export default App
