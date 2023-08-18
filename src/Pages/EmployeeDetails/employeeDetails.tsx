import { FC, useEffect, useState } from 'react';
//import EmployeeDetails from '../../components/EmployeeDetails/employeeDetails';
import SubHeader from '../../components/Subheader/subheader';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import './employeeDetails.css';
import Empdetails from '../../components/Details/details';
import { useNavigate, useParams } from 'react-router-dom';
//import { useGetEmployeeListQuery } from '../Employee/employeeapi';
import { useGetEmployeeByIdQuery } from './detailsapi';
//import Status from '../../components/Status/status';
//import data from '../../employee_details';
//import { useSelector } from 'react-redux';
const Details: FC = () => {
  const { id } = useParams();
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  const { data } = useGetEmployeeByIdQuery(Number(id));
  const role = localStorage.getItem('Role');
  const [isRoleHR, setRoleHR] = useState(false);

  useEffect(() => {
    if (role == 'HR') setRoleHR(true);
  }, [role]);

  console.log(data);
  //const employee = data.employees.find((emp) => emp.id === Number(id));

  //console.log(employee);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/editEmployee/${id}`);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className='Employee-Details'>
      <SideBar />
      <Header />
      {isRoleHR && (
        <SubHeader
          label={'Employee Details'}
          buttonLabel={'Edit'}
          imgSrc={'/assets/icons/edit.svg'}
          onClick={handleClick}
        />
      )}
      {!isRoleHR && <SubHeader label={'Employee Details'} />}
      <div className='detail-card'>
        <Empdetails label={'Employee Name'} data={data.employee.name} />
        <Empdetails label={'Joining Date'} data={data.employee.joining_Date} />
        <Empdetails label={'Experience'} data={data.employee.experience} />
        <Empdetails label={'Role'} data={data.employee.role} />
        <Empdetails label={'Status'} data={data.employee.status} />
        <Empdetails label={'Experience'} data={data.employee.experience} />
        <Empdetails label={'Experience'} data={data.employee.experience} />
        <Empdetails label={'Employee ID'} data={data.employee.id} />
        <Empdetails
          label={'Address'}
          data={`${data.employee.address.city},${data.employee.address.address_line_1},${data.employee.address.address_line_2}`}
        />
      </div>
    </div>
  );
};

export default Details;
