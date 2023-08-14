import React from 'react';
import './sidenav.css';
import { useNavigate } from 'react-router-dom';
const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/employees');
  };

  return (
    <aside>
      <div className='div1'>
        <img className='top-logo' src='/assets/img/kv-logo.png' alt='logo' />
      </div>
      <div className='sidebar'>
        <div className='sidebar1'>
          <img
            className='icon-em'
            src='/assets/icons/icon.svg'
            alt='icon-em'
            onClick={handleClick}
          />

          <p className='emp-list'>Employee List</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
