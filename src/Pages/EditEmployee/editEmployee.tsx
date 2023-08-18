import React, { useEffect, useState } from 'react';
import './editEmployee.css';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import SubHeader from '../../components/Subheader/subheader';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/dropDown';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../EmployeeDetails/detailsapi';
import { useEditEmployeeMutation } from './editEmployeeapi';

const department = {
  2: 'Product Engineering',
  3: 'Finance',
  4: 'QA',
  5: 'Design',
  8: 'HR',
  9: 'Manager'
};

const EditEmployee: React.FC = () => {
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
    Employee_ID: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetEmployeeByIdQuery(Number(id));
  const [editEmployee] = useEditEmployeeMutation();

  useEffect(() => {
    if (data?.employee)
      setDetails({
        employee_name: data.employee.name,
        JoiningDate: data.employee.joining_Date,
        Experience: data.employee.experience,
        Department: department[data.employee.departmentId],
        Role: data.employee.role,
        Status: data.employee.status,
        FlatNo: data.employee.address.city,
        AddressLine1: data.employee.address.address_line_1,
        AddressLine2: data.employee.address.address_line_2,
        Employee_ID: String(data.employee.id)
      });
  }, [data?.employee]);
  console.log(id);

  const handleCancel = () => {
    navigate('/employees');
  };
  const onChange = (key, value) => {
    const tempDetails = { ...details };

    tempDetails[key] = value;
    setDetails(tempDetails);
  };

  const handleCreate = () => {
    console.log('create');
    editEmployee({
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
        city: 'Ekm',
        state: 'Kerala',
        country: 'India',
        pincode: '680101'
      },
      employee_id: id,
      email: data.employee.email,
      password: data.employee.password,
      departmentId: data.employee.departmentId
    });
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <SideBar />
      <Header />
      <SubHeader label={'Edit Employee'} />
      <div className='OuterDiv'>
        <Input
          label='Employee name'
          type='text'
          placeholder={details.employee_name}
          onChange={(value) => onChange('employee_name', value)}
          value={details.employee_name}
        />
        <Input
          label='Joining Date'
          type='text'
          placeholder={details.JoiningDate}
          onChange={(value) => onChange('JoiningDate', value)}
          value={details.JoiningDate}
        />

        <Input
          label='Experience'
          type='text'
          placeholder={details.Experience}
          onChange={(value) => onChange('Experience', value)}
          value={details.Experience}
        />
        <DropDown
          label={'Department'}
          placeholder={details.Department}
          options={['HR', 'Finance', 'Product Engineering', 'QA', 'Design', 'Teaching', 'Manager']}
          onChange={(value) => onChange('Department', value)}
        />
        <DropDown
          label={'Role'}
          placeholder={details.Role}
          options={['Frontend', 'UI', 'Backend', 'Developer']}
          onChange={(value) => onChange('Role', value)}
        />
        <DropDown
          label={'Status'}
          placeholder={details.Status}
          options={['Active', 'Inactive', 'Probation']}
          onChange={(value) => onChange('Status', value)}
        />
        <div className='AddressAndButtons'>
          <Input
            label='Address'
            type='text'
            placeholder={details.FlatNo}
            onChange={(value) => onChange('FlatNo', value)}
          />
          <Input
            type='text'
            placeholder={details.AddressLine1}
            onChange={(value) => onChange('AddressLine1', value)}
          />
          <Input
            type='text'
            placeholder={details.AddressLine2}
            onChange={(value) => onChange('AddressLine2', value)}
          />
          <div className='Buttons'>
            <button className='create' onClick={handleCreate}>
              Create
            </button>
            <button className='cancel' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
        <Input
          label='Employee ID'
          type='text'
          placeholder={id}
          value={String(details.Employee_ID)}
        />
      </div>
    </div>
  );
};

export default EditEmployee;
