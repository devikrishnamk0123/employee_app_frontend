import { createAction } from '@reduxjs/toolkit';

export type addEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  isActive: string;
  experience: string;
  role: string;
  departmentId: number;
  Address: {
    FlatNo: string;
    AddressLine1: string;
    AddressLine2: string;
  };
  email: string;
  password: string;
};

export type editEmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  isActive: string;
  experience: string;
  role: string;
  departmentId: number;
  Address: {
    FlatNo: string;
    AddressLine1: string;
    AddressLine2: string;
  };
  Employee_ID: { id };
  email: string;
  password: string;
};
const addEmployee = createAction<{ employee: addEmployeeType }>('Employee Create');
const editEmployee = createAction<{ employee: editEmployeeType }>('Employee Edit');

export { addEmployee, editEmployee };
