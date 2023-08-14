import { FC } from 'react';
//import EmployeeDetails from '../../components/EmployeeDetails/employeeDetails';
import SubHeader from '../../components/Subheader/subheader';
import SideBar from '../../components/SideNav/sidenav';
import Header from '../../components/Header/header';
import './employeeDetails.css';
import Empdetails from '../../components/Details/details';
import { useNavigate, useParams } from 'react-router-dom';
//import data from '../../employee_details';
import { useSelector } from 'react-redux';
const Details: FC = () => {
  const { id } = useParams();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  const employee = employeesData.find((emp) => emp.id === Number(id));

  console.log(employee);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div className='Employee-Details'>
      <SideBar />
      <Header />
      <SubHeader
        label={'Employee Details'}
        buttonLabel={'Edit'}
        imgSrc={'/assets/icons/edit.svg'}
        onClick={handleClick}
      />
      <div className='detail-card'>
        <Empdetails label={'Employee Name'} data={employee.name} />
        <Empdetails label={'Joining Date'} data={employee.joiningDate} />
        <Empdetails label={'Experience'} data={employee.experience} />
        <Empdetails label={'Role'} data={employee.role} />
        <Empdetails label={'Status'} data={employee.isActive} />
        <Empdetails label={'Experience'} data={employee.experience} />
        <Empdetails label={'Experience'} data={employee.experience} />
        <Empdetails label={'Employee ID'} data={employee.id} />
      </div>
    </div>
  );
};

export default Details;
