import React, { useState } from 'react';
import './createEmployee.css';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import SubHeader from '../../components/Subheader/subheader';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/dropDown';
import { useNavigate } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { addEmployee } from '../../actions/employeeActions';
import { useCreateEmployeeMutation } from './createEmployeeapi';
import { useGetDepartmentListQuery } from '../Employee/employeeapi';
const CreateEmployee: React.FC = () => {
  const [createEmployee, { data, isSuccess }] = useCreateEmployeeMutation();
  const { data: departmentData } = useGetDepartmentListQuery();
  const [details, setDetails] = useState({
    employee_name: '',
    JoiningDate: '',
    Experience: '',
    Department: '',
    Role: '',
    Status: '',
    FlatNo: '',
    AddressLine1: '',
    AddressLine2: '',
    Email: '',
    password: '',
    city: 'Ekm',
    state: 'kerala',
    country: 'India',
    pincode: '680101',
    departmentId: 2
  });

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/employees');
  };

  const handleSave = () => {
    createEmployee({
      email: details.Email,
      password: details.password,
      name: details.employee_name,
      joining_date: details.JoiningDate,
      experience: Number(details.Experience),
      department: details.Department,
      role: details.Role,
      status: details.Status,
      address: {
        flatNo: details.FlatNo,
        address_line_1: details.AddressLine1,
        address_line_2: details.AddressLine2,
        city: details.city,
        state: details.state,
        country: details.country,
        pincode: details.pincode
      },
      departmentId: setDepartmentId(details.Department)
    });
    if (data && isSuccess) console.log('Employee Added');
  };
  const setDepartmentId = (deptname) => {
    if (deptname == 'Product Engineering') return 2;
    if (deptname == 'Finance') return 3;

    if (deptname == 'QA') return 4;
    if (deptname == 'Design') return 5;
    if (deptname == 'HR') return 8;
    if (deptname == 'Manager') return 9;
  };
  const onChange = (key, value) => {
    const tempDetails = { ...details };

    tempDetails[key] = value;
    setDetails(tempDetails);
    console.log(details);
  };

  if (!departmentData) return <div>Loading....</div>;

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
          options={departmentData.map((deptObj) => deptObj.name)}
          onChange={(value) => onChange('Department', value)}
        />
        <DropDown
          label={'Role'}
          options={['UI', 'HR', 'developer']}
          onChange={(value) => onChange('Role', value)}
        />
        <DropDown
          label={'Status'}
          options={['Active', 'Inactive', 'Probation']}
          onChange={(value) => onChange('Status', value)}
        />
        <Input
          label='Email'
          type='text'
          placeholder='email'
          onChange={(value) => onChange('Email', value)}
        />
        <Input
          label='password'
          type='password'
          placeholder='password'
          onChange={(value) => onChange('password', value)}
        />
        <div className='AddressAndButtons'>
          <Input
            label='Address'
            type='text'
            placeholder='FlatNo'
            onChange={(value) => onChange('FlatNo', value)}
          />
          <Input
            type='text'
            placeholder='Address Line 1'
            onChange={(value) => onChange('AddressLine1', value)}
          />
          <Input
            type='text'
            placeholder='Address Line 2'
            onChange={(value) => onChange('AddressLine2', value)}
          />
          <div className='Buttons'>
            <button className='save' onClick={handleSave}>
              Save
            </button>
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
