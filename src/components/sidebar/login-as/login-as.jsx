import React from 'react';
import '../login-as/login-as.css';
import Collapsemenu from './collapse-menu/collapse-menu';

const Loginas = () => {
  return (
    <div className='loginandcollapse'>
      <div className='loginas'>
        <p>Access As Manager</p>
      </div>
      <Collapsemenu />
    </div>
  );
};

export default Loginas;
