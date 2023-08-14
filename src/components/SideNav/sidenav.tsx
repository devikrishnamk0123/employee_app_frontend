import React from 'react';
import './sidenav.css';
const SideBar: React.FC = () => {
  return (
    <aside>
      <div className='div1'>
        <img className='top-logo' src='/assets/img/kv-logo.png' alt='logo' />
      </div>
      <div className='sidebar'>
        <div className='sidebar1'>
          <img className='icon-em' src='/assets/icons/icon.svg' alt='icon-em' />

          <p className='emp-list'>Employee List</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
