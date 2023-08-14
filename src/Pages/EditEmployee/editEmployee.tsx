import React, { useState } from 'react';
import './editEmployee.css';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import SubHeader from '../../components/Subheader/subheader';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/dropDown';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee: React.FC = () => {
  const [details, setDetails] = useState({
    employee_name: '',
    JoiningDate: '',
    Experience: '',
    Department: '',
    Role: '',
    Status: '',
    Address: '',
    Employee_ID: ''
  });

  const { id } = useParams();

  console.log(id);
  //console.log(props.empId);
  //const id = String(useParams());
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/employees');
  };
  const onChange = (key, value) => {
    const tempDetails = { ...details };

    tempDetails[key] = value;
    setDetails(tempDetails);
    console.log(details);
  };

  return (
    <div>
      <SideBar />
      <Header />
      <SubHeader label={'Edit Employee'} />
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
        <DropDown label={'Department'} options={['HR', 'Finance', 'Product Management']} />
        <DropDown label={'Role'} options={['Frontend', 'UI', 'Backend', 'Developer']} />
        <DropDown label={'Status'} options={['Active', 'Inactive', 'Probation']} />
        <div className='AddressAndButtons'>
          <Input label='Address' type='text' placeholder='FlatNo' />
          <Input type='text' placeholder='Address Line 1' />
          <Input type='text' placeholder='Address Line 2' />
          <div className='Buttons'>
            <button className='create'>Create</button>
            <button className='cancel' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
        <Input label='Employee ID' type='text' placeholder={id} value={details.Employee_ID} />
      </div>
    </div>
  );
};

export default EditEmployee;
