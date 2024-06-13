import React, { useState } from 'react';
import '../project-tabs/project-tabs.css';

const Tab = ({ label, isActive, onClick }) => (
  <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </button>
);

const TabContent = ({ content }) => (
  <div className='tab-content'>{content}</div>
);

const Projectstab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: 'On-Going', content: '' },
    { label: 'Completed', content: 'This is the content of Tab 2.' },
    { label: 'On-Hold', content: 'This is the content of Tab 3.' },
  ];

  return (
    <div className='projectslist'>
      <h3>Your Projects</h3>
      <div className='Projectstab'>
        <div className='tabs'>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <TabContent content={tabs[activeTab].content} />
      </div>
    </div>
  );
};

export default Projectstab;
