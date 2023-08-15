import React from 'react';
import './dropDown.css';
export type DropDownPropsType = {
  label: string;
  options: string[];
  onChange?: (value: any) => void;
};

const DropDown: React.FC<DropDownPropsType> = (props) => {
  const handleSelected = (e) => {
    if (props.onChange) props.onChange(e.target.value);
    //console.log(e);
  };

  return (
    <div className='DropDownWrapper'>
      <label data-testid='dropDown label test'>{props.label}</label>
      <select data-testid='dropDown select test' onChange={handleSelected}>
        {props.options}
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
