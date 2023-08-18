import { addEmployee, editEmployee } from '../actions/employeeActions';
import { createReducer } from '@reduxjs/toolkit';
import { addEmployeeType } from '../actions/employeeActions';
const initialState: Array<addEmployeeType> = [
  {
    id: 4,
    name: 'linette',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: 'Inactive',
    experience: '9',
    role: 'Developer',
    departmentId: 3,
    Address: {
      FlatNo: 'house name',
      AddressLine1: 'address line 1',
      AddressLine2: 'address line 2'
    },
    email: 'linette@gmail.com',
    password: 'linette'
  },
  {
    id: 3,
    name: 'devi',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: 'Active',
    experience: '9',
    role: 'HR',
    departmentId: 3,
    Address: {
      FlatNo: 'house name',
      AddressLine1: 'address line 1',
      AddressLine2: 'address line 2'
    },
    email: 'devi@gmail.com',
    password: 'devi'
  },
  {
    id: 1,
    name: 'Ashok',
    joiningDate: '2012-10-02T00:00:00.000Z',
    isActive: 'Active',
    experience: '8',
    role: 'HR',
    departmentId: 2,
    Address: {
      FlatNo: 'house name',
      AddressLine1: 'address line 1',
      AddressLine2: 'address line 2'
    },
    email: 'ashok@gmail.com',
    password: 'ashok'
  }
];
const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload.employee];

    return state;
  }),
    builder.addCase(editEmployee, (state, action) => {
      const empId = action.payload.employee.Employee_ID.id;

      const idx = state.findIndex((item) => {
        return Number(item.id) == Number(empId);
      });

      console.log(idx);
      const newState = [...state];

      newState[idx] = action.payload.employee;
      console.log(newState);

      return newState;
    });
});
// const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'Employee Create': {
//       const newState = [...state, action.payload.employee];

//       console.log(newState);

//       return newState;
//     }
//     case 'Employee Delete': {
//       const empId = action.payload;
//       const idx = state.findIndex((item) => item.id == empId);
//       const newState = [...state];

//       newState.splice(idx, 1);

//       return newState;
//     }
//     case 'Employee Edit': {
//       const empId = action.payload.employee.Employee_ID.id;

//       const idx = state.findIndex((item) => {
//         return Number(item.id) == Number(empId);
//       });

//       console.log(idx);
//       const newState = [...state];

//       newState[idx] = action.payload.employee;
//       console.log(newState);

//       return newState;
//     }
//     default:
//       return state;
//   }
//};

export default employeeReducer;
