import React from 'react';
import './status.css';

type StatusProps = {
  isActive: boolean;
};

const Status: React.FC<StatusProps> = (props) => {
  const status = props.isActive
    ? { label: 'Active', color: '#D3F4BE' }
    : { label: 'Inactive', color: '#FFBFBF' };

  return (
    <div className='status' style={{ backgroundColor: status.color }}>
      {status.label}
    </div>
  );
};

export default Status;
