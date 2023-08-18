import React from 'react';
import './details.css';
import Status from '../Status/status';
export type DetailsPropType = {
  label?: string;
  data: any;
};

const Empdetails: React.FC<DetailsPropType> = (props) => {
  let isStatus = false;

  if (props.label == 'Status') isStatus = true;

  return (
    <div className='card'>
      <div className='Label' data-testid='details-label-test'>
        {props.label}
      </div>
      {isStatus && <Status isActive={props.data} />}
      {!isStatus && (
        <div className='Data' data-testid='details-test'>
          {String(props.data)}
        </div>
      )}
    </div>
  );
};

export default Empdetails;
