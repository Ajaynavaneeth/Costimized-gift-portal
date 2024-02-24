import React from 'react'
import  { useState } from 'react';
import '../assets/Signin.css';
import { Link } from 'react-router-dom';


function Signin() {
  
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleCreateAccount = () => {
      if (!name || !phoneNumber || !dob || !email || !password) {
        // Display an alert if any field is empty
        alert('Please fill in all fields before creating an account.');
      } else {
        // Perform the registration logic here
        // Redirect or show success message, etc.
        console.log('Account created successfully!');
      }
    };
  
    return (
      <div className='register-all'>
        <div className='register-container'>
          <h1>Signp</h1>
          <br></br>
          <div className='register-fields'>
            <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
            <input type='number' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br/><br/>
            <input type='date' placeholder='Date Of Birth' value={dob} onChange={(e) => setDOB(e.target.value)} /><br/><br/>
            <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
            <Link to="/">
              <button onClick={handleCreateAccount}>Create Account</button>
              </Link>
          </div>
          
        </div>
      </div>
    );
  }
export default Signin
