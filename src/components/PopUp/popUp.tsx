import React from 'react';
import './popUp.css';
import { useDeleteEmployeeMutation } from '../../Pages/Employee/employeeapi';

export type PopUpPropsType = {
  onClose: () => void;
  empId: string;
};

const PopUp: React.FC<PopUpPropsType> = (props) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const handleConfirm = () => {
    deleteEmployee(props.empId);
    props.onClose();
  };

  return (
    <div className='Popup'>
      <div className='close'>
        <img
          src='/assets/img/closeIcon.png'
          onClick={props.onClose}
          data-testId='popUp Close Button'
        ></img>
      </div>
      <h2>Are you Sure?</h2>
      <h4>Do you really want to delete</h4>
      <h4>employee?</h4>
      <div className='Buttons'>
        <button className='Confirm' onClick={handleConfirm} data-testid='popUp Confirm Button'>
          Confirm
        </button>
        <button className='Cancel' onClick={props.onClose} data-testid='popUp Cancel Button'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUp;
