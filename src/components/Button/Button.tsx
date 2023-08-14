import React from 'react';
import './Button.css';

export type ButtonPropType = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonPropType> = (props) => {
  return (
    <div className='buttonWrapper'>
      <button onClick={props.onClick} data-testid='button-test'>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
