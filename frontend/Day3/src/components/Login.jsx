import Back from "../assets/images/back1.jpg"
import React, { useState } from 'react';
import "../assets/Login.css"
import { Link } from "react-router-dom";

const Login  = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            setLoginMessage('Please fill in both username and password.');
        } else {
            setIsLoggedIn(true);
            alert('Login successful!');
        }
    };

    return (
        <div className='b'
            style={{
                backgroundImage: `url(${Back})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'left', 
                height: '500px',
                width: '585px'
            }}>
            <div className='login'>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
               <Link to="/home"><button className='lb' onClick={handleLogin}>Login</button></Link>
                {loginMessage && <p className="login-message">{loginMessage}</p>}
                <p className='fot'>Don't have an account?</p>
                <Link to='/SignUp'><button className='signup'>Signup</button></Link>
            </div>
        </div>
    );
};

export default Login;
