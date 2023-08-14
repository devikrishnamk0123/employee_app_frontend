import React from 'react';
import './popUp.css';

type PopUpProps = {
  onClose: () => void;
};

const PopUp: React.FC<PopUpProps> = (props) => {
  return (
    <div className='Popup'>
      <div className='close'>
        <img src='/assets/img/closeIcon.png' onClick={props.onClose}></img>
      </div>
      <h2>Are you Sure?</h2>
      <h4>Do you really want to delete</h4>
      <h4>employee?</h4>
      <div className='Buttons'>
        <button className='Confirm'>Confirm</button>
        <button className='Cancel' onClick={props.onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUp;
