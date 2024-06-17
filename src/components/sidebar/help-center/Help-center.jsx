import React from 'react';
import './Help-center.css';

const Helpcenter = () => {
  return (
    <div className='helpcenterbox'>
      <i class='fi fi-rr-life-ring helpicon'></i>
      <h3>Need Help?</h3>
      <p>Go-to resource for any assistance.</p>
      <button className='btn'>Support Ticket</button>
    </div>
  );
};

export default Helpcenter;
