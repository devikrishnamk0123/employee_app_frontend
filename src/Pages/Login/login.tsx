import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login: FC = () => {
  const [userName, setUsername] = useState('');

  const [passwordValue, setPassword] = useState('');

  const [errorValue, setError] = useState(false);

  console.log(userName);
  const navigate = useNavigate();

  const handleClick = () => {
    if (userName.length == 0 || passwordValue.length == 0) {
      setError(true);
    } else {
      console.log('Hello');
      navigate('/employees');
    }
  };

  return (
    <div className='Login'>
      <div className='LeftContainer'>
        <div className='imageWrapper'>
          <img src='/assets/img/banner.png'></img>
        </div>
      </div>
      <div className='RightContainer'>
        <img src='/assets/img/kv-logo.png'></img>
        <Input
          label='Username'
          type='text'
          placeholder='devi@gmail.com'
          value={userName}
          onChange={setUsername}
        />

        <Input
          // label='Password'
          type='password'
          placeholder='password'
          value={passwordValue}
          onChange={setPassword}
        />
        <Button text='Login In' onClick={handleClick}></Button>
        {errorValue && <div className='divtag'>Username or password is missing</div>}
      </div>
    </div>
  );
};

export default Login;
