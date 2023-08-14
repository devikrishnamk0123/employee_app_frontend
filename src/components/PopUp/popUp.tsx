import React from 'react';
import './popUp.css';
import { useDispatch } from 'react-redux';

type PopUpProps = {
  onClose: () => void;
  empId: string;
};

const PopUp: React.FC<PopUpProps> = (props) => {
  const dispatch = useDispatch();
  const handleConfirm = () => {
    dispatch({
      type: 'Employee Delete',
      payload: props.empId
    });
  };

  return (
    <div className='Popup'>
      <div className='close'>
        <img src='/assets/img/closeIcon.png' onClick={props.onClose}></img>
      </div>
      <h2>Are you Sure?</h2>
      <h4>Do you really want to delete</h4>
      <h4>employee?</h4>
      <div className='Buttons'>
        <button className='Confirm' onClick={handleConfirm}>
          Confirm
        </button>
        <button className='Cancel' onClick={props.onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUp;
