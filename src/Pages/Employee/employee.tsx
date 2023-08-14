import React from 'react';
import './employee.css';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import SubHeader from '../../components/Subheader/subheader';
//import Status from '../../components/Status/status';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/table';
const Employee: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/createEmployee');
  };

  return (
    <div className='Employee'>
      <SideBar />
      <Header />
      <SubHeader
        label={'Employee List'}
        buttonLabel={'Create Employee'}
        imgSrc='/assets/img/add.png'
        onClick={handleClick}
      />
      {/* <Status isActive={true} />
      <Status isActive={false} /> */}
      <Table />
    </div>
  );
};

export default Employee;
