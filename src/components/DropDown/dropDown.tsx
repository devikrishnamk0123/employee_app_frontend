import React from 'react';
import './dropDown.css';
type DropDownProps = {
  label: string;
  options: string[];
  onChange?: (value: any) => void;
};

const DropDown: React.FC<DropDownProps> = (props) => {
  const handleSelected = (e) => {
    console.log(e);
    //if (props.label == 'Department') setDepartment(e.target.value);
    //if (props.label == 'Role') setRole(e.target.value);
    //if (props.label == 'Status') setStatus(e.target.value);
  };

  //const [department, setDepartment] = useState('');
  //const [role, setRole] = useState('');
  //const [status, setStatus] = useState('');

  return (
    <div className='DropDownWrapper'>
      <label>{props.label}</label>
      <select onChange={handleSelected}>
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
