import React, { useEffect, useState } from 'react';
import './employee.css';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import SubHeader from '../../components/Subheader/subheader';
//import Status from '../../components/Status/status';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/table';
import { useGetEmployeeListQuery } from './employeeapi';
const Employee: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/createEmployee');
  };

  const { data } = useGetEmployeeListQuery();
  const role = localStorage.getItem('Role');
  const [isRoleHR, setRoleHR] = useState(false);

  useEffect(() => {
    if (role == 'HR') setRoleHR(true);
  }, [role]);

  console.log(data);

  return (
    <div className='Employee'>
      <SideBar />
      <Header />

      {isRoleHR && (
        <SubHeader
          label={'Employee List'}
          buttonLabel={'Create Employee'}
          imgSrc='/assets/img/add.png'
          onClick={handleClick}
        />
      )}
      {!isRoleHR && <SubHeader label={'Employee List'} />}
      <Table />
    </div>
  );
};

export default Employee;
