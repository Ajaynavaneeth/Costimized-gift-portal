import React, { useState, useEffect } from 'react';
import '../assets/Profile.css';
import Home from './Home';

const Profile = () => {
    const [userProfile, setUserProfile] = useState({
        name: "Loading...",
        address: "Loading...",
        number: "Loading..."
        
    });

    useEffect(() => {
        setTimeout(() => {
            const mockUserProfile = {
                name: 'John Doe',
                address: '123 abc gb',
                number:"1234"
                
            };
            setUserProfile(mockUserProfile);
        }, 1000); 
    }, []);

    return (
        <div>
            <Home/>

        
        
        <div className="cont">
            <h1 className='title'>Profile</h1>
            <div className="detail">
                <p>Name: {userProfile.name}</p>
                <p>Address: {userProfile.address}</p>
                <p>Mobile no: {userProfile.number}</p>
                <button className='edit'>Edit</button>
            </div>
        </div>
        </div>
    );
};

export default Profile;
