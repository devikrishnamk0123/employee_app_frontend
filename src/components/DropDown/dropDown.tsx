import React from 'react';
import './dropDown.css';
type DropDownProps = {
  label: string;
  options: string[];
  onChange?: (value: any) => void;
};

const DropDown: React.FC<DropDownProps> = (props) => {
  return (
    <div className='DropDownWrapper'>
      <label>{props.label}</label>
      <select onChange={(e) => props.onChange(e.target.value)}>
        {props.options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
