import React from 'react';
import './Input.css';

export type InputPropType = {
  label?: string;
  value?: string;
  placeholder: string;
  type: 'text' | 'password';
  onChange?: (value: any) => void;
};

const Input: React.FC<InputPropType> = (props) => {
  return (
    <div className='loginform'>
      {props.label && <label data-testid='label test'>{props.label}</label>}
      <input
        data-testid='input-test'
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
