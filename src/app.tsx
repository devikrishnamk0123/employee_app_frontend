import { FC } from 'react';
import './styles/global.css';
import '../src/Pages/Login/login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from '../src/Pages/Login/login';
import Employee from './Pages/Employee/employee';
import './Pages/EmployeeDetails/employeeDetails';
import Details from './Pages/EmployeeDetails/employeeDetails';
import CreateEmployee from './Pages/CreateEmployee/createEmployee';
import EditEmployee from './Pages/EditEmployee/editEmployee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/:id' element={<Details />} />
          <Route path='/createEmployee' element={<CreateEmployee />} />
          <Route path='/editEmployee/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
