import React from 'react';
import './subheader.css';

type SubHeaderPropTypes = {
  label: string;
  buttonLabel?: string;
  imgSrc?: string;
  onClick?: () => void;
};
const SubHeader: React.FC<SubHeaderPropTypes> = (props) => {
  return (
    <div className='create-emp'>
      <p className='create-emp-text'>{props.label}</p>
      {props.buttonLabel && props.imgSrc && (
        <div className='wrapper'>
          <div className='ButtonIcon'>
            <img className='imagePlus' src={props.imgSrc} onClick={props.onClick}></img>
          </div>
          <div className='text'>{props.buttonLabel}</div>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
