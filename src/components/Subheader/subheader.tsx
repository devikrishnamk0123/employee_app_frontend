import React from 'react';
import './subheader.css';

export type SubHeaderPropTypes = {
  label: string;
  buttonLabel?: string;
  imgSrc?: string;
  onClick?: () => void;
};
const SubHeader: React.FC<SubHeaderPropTypes> = (props) => {
  return (
    <div className='create-emp'>
      <p className='create-emp-text' data-testid='label test'>
        {props.label}
      </p>
      {props.buttonLabel && props.imgSrc && (
        <div className='wrapper'>
          <div className='ButtonIcon'>
            <img
              className='imagePlus'
              src={props.imgSrc}
              onClick={props.onClick}
              data-testid='image test'
            ></img>
          </div>
          <div className='text' data-testid='button label test'>
            {props.buttonLabel}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
