import React, { useState } from 'react';
import './createEmployee.css';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import SubHeader from '../../components/Subheader/subheader';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/dropDown';
import { useNavigate } from 'react-router-dom';
const CreateEmployee: React.FC = () => {
  const [details, setDetails] = useState({
    employee_name: '',
    JoiningDate: '',
    Experience: '',
    Department: '',
    Role: '',
    Status: '',
    Address: ''
  });

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/employees');
  };

  const onChange = (key, value) => {
    const tempDetails = { ...details };

    tempDetails[key] = value;
    setDetails(tempDetails);
    console.log(details.Department);
  };

  return (
    <div>
      <SideBar />
      <Header />
      <SubHeader label={'Create Employee'} />
      <div className='OuterDiv'>
        <Input
          label='Employee name'
          type='text'
          placeholder='Employee Name'
          onChange={(value) => onChange('employee_name', value)}
          value={details.employee_name}
        />
        <Input
          label='Joining Date'
          type='text'
          placeholder='Joining Date'
          onChange={(value) => onChange('JoiningDate', value)}
          value={details.JoiningDate}
        />

        <Input
          label='Experience'
          type='text'
          placeholder='Experience'
          onChange={(value) => onChange('Experience', value)}
          value={details.Experience}
        />
        <DropDown
          label={'Department'}
          options={['HR', 'Finance', 'Product Management']}
          onChange={(value) => onChange('Department', value)}
        />
        <DropDown
          label={'Role'}
          options={['Frontend', 'UI', 'Backend', 'Developer']}
          onChange={(value) => onChange('Role', value)}
        />
        <DropDown
          label={'Status'}
          options={['Active', 'Inactive', 'Probation']}
          onChange={(value) => onChange('Status', value)}
        />
        <div className='AddressAndButtons'>
          <Input label='Address' type='text' placeholder='FlatNo' />
          <Input type='text' placeholder='Address Line 1' />
          <Input type='text' placeholder='Address Line 2' />
          <div className='Buttons'>
            <button className='save'>Save</button>
            <button className='cancel' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
