import React from 'react';
import './details.css';
export type DetailsPropType = {
  label: string;
  data: any;
};

const Empdetails: React.FC<DetailsPropType> = (props) => {
  return (
    <div className='card'>
      <div className='Label' data-testid='details-label-test'>{props.label}</div>
      <div className='Data' data-testid='details-test'>
        {String(props.data)}
      </div>
    </div>
  );
};

export default Empdetails;
