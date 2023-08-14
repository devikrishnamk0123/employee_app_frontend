/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
import React from 'react';
import './table.css';
import data from '../../employee_details';
import Status from '../Status/status';
import { useNavigate } from 'react-router-dom';
import PopUp from '../PopUp/popUp';
import { useState } from 'react';
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

  const [showPopUp, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const employeeClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const deleteEmployee = (e) => {
    setShowPopup(true);
    //alert('PopUpdisplayed');
    e.stopPropagation();
  };

  const editEmployee = (id, e) => {

    navigate(`/editEmployee/${id}`);
    e.stopPropagation();
  };

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
          {data.map((item) => (
            <tr key={item.id} className='bodyrow' onClick={() => employeeClick(item.id)}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.joiningDate}</td>
              <td>{item.role}</td>
              <td>
                <Status isActive={item.isActive} />
              </td>
              <td>{item.experience}</td>
              <td className='Action'>
                <div className='Images'>
                  <img src='/assets/img/delete-181.png' onClick={(e) => deleteEmployee(e)}></img>
                  <img src='/assets/img/edit-259.png' onClick={(e) => editEmployee(item.id, e)}></img>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopUp && <PopUp onClose = {() => setShowPopup(false)}/>}
    </>
  );
};

export default Table;
