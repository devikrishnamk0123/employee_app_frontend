import React from 'react';
import './status.css';

export type StatusPropsTypes = {
  isActive: string;
};

const Status: React.FC<StatusPropsTypes> = (props) => {
  const status =
    props.isActive === 'Active'
      ? { label: 'Active', color: '#D3F4BE' }
      : { label: 'Inactive', color: '#FFBFBF' };

  return (
    <div className='status' style={{ backgroundColor: status.color }} data-testid='status test'>
      {status.label}
    </div>
  );
};

export default Status;
