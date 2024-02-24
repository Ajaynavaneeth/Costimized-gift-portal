import React from 'react';
import '../assets/Sidebar.css';
import { Link} from 'react-router-dom'; 
import { Menu } from 'antd';
import header from '../assets/images/header.jpg';

function Sidebar() {
  // const gradientColors = ["#ff7e5f", "#feb47b", "#ffbfa4", "#ffd6c9"]; 

  // const gradientStyle = {
  //   background: `linear-gradient(to bottom right, ${gradientColors.join(', ')})`
  // };

  return (
    // <div className='sidebar-container'>
    //   <div className="sidebar" style={gradientStyle}>
    //     <div className="sidebar-header">
    //       <img src={header} alt="Header"/>
    //     </div>
    //     <Menu
    //       className='custom-menu'
    //       items={[
    //         { label: "About" },
    //         { label: "Contact" },
    //         { label: "Signout" }
    //       ]}
    //     />
    //   </div>
    // </div>
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/review">Review</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>  
        <li>
          <Link to="/">
          {/* <Link to="/logout">Logout</Link> */} Logout
          </Link>
        </li>
      </ul>
    </div>
  );
  
}

export default Sidebar;
