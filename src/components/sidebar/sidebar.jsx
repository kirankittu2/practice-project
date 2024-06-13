import React from 'react';
import './sidebar.css';
import logo from '../../assets/logos/complete-abcd-logo.svg';
import Navbar from './navbar/navbar';
import Loginas from '../sidebar/login-as/login-as';
import SocialCommunities from './social-communities/social-communities';
import Helpcenter from './help-center/help-center';

const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className='topmenu-section'>
        <div className='logo'>
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
