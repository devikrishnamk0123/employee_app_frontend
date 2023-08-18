/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
import React, { useEffect } from 'react';
import './table.css';
//import data from '../../employee_details';
import Status from '../Status/status';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp/popUp';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useGetEmployeeListQuery } from '../../Pages/Employee/employeeapi';
//import '../../employee_details';
//import data from '../../employee_details';
const Table: React.FC = () => {
  const theadValues = [
    'Employee Name',
    'Employee ID',
    'Joining Date',
    'Role',
    'Status',
    'Experience',
    'Action'
  ];

  // const [employeedData, setEmployeeData] = useState([]);
  const { data } = useGetEmployeeListQuery();
  console.log(data);
  // useEffect(() => {
  //   if (isSuccess && data)
  //     setEmployeeData(data);

  // }, [data, isSuccess]);

  // const employeedData = useSelector((state: any) => {
  //   return state.employees;
  // });
  const role = localStorage.getItem('Role');
  const [isRoleHR, setRoleHR] = useState(false);

  useEffect(() => {
    if (role == 'HR') setRoleHR(true);
  }, [role]);


  const [showPopUp, setShowPopup] = useState(false);
  const [empId, setDeleteId] = useState('');

  const navigate = useNavigate();

  const employeeClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const deleteEmployee = (id, e) => {
    setShowPopup(true);
    setDeleteId(id);
    //alert('PopUpdisplayed');
    e.stopPropagation();
  };

  const editEmployee = (id, e) => {

    navigate(`/editEmployee/${id}`);
    e.stopPropagation();
  };
  if (!data) return <div>Loading.....</div>;
  console.log(data.employees[0]);
  return (
    <>
      <table className='table'>
        <thead className='head'>
          <tr className='headrows'>
            {theadValues.map((item) => (
              <td className='headData' key={item}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className='body'>
          {data.employees.map((item) => (
            <tr key={item.id} className='bodyrow' onClick={() => employeeClick(item.id)}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.joining_Date}</td>
              <td>{item.role}</td>
              <td>
                <Status isActive={item.status} />
              </td>
              <td>{item.experience}</td>
              <td className='Action'>
                {isRoleHR && <div className='Images'>
                  <img src='/assets/img/delete-181.png' onClick={(e) => deleteEmployee(item.id, e)}></img>
                  <img src='/assets/img/edit-259.png' onClick={(e) => editEmployee(item.id, e)}></img>
                </div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopUp && <PopUp onClose={() => setShowPopup(false)} empId={empId} />}
    </>
  );
};

export default Table;
