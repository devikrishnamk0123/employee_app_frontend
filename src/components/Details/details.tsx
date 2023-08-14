import React from 'react';
import './details.css';
type DetailsPropType = {
  label?: string;
  data: any;
};

const Empdetails: React.FC<DetailsPropType> = (props) => {
  return (
    <div className='card'>
      <div className='Label'>{props.label}</div>
      <div className='Data'>{String(props.data)}</div>
    </div>
  );
};

export default Empdetails;
