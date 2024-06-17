import React from 'react';
import './Sidebar.css';
import logo from '../../assets/logos/complete-abcd-logo.svg';
import Navbar from './navbar/Navbar';
import Loginas from './login-as/Login-as';
import SocialCommunities from './social-communities/Social-communities';
import Helpcenter from './help-center/Help-center';

const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className='topmenu-section'>
        <div className='complete-abcd-logo'>
          <img src={logo} alt='ABCD Logo' />
        </div>
        <Loginas />
        <Navbar />
      </div>
      <div className='bottommenu-section'>
        <Helpcenter />
        <SocialCommunities />
      </div>
    </div>
  );
};

export default Sidebar;
