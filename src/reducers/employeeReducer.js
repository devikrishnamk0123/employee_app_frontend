const initialState = [
  {
    id: 4,
    name: 'linette',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: false,
    experience: 9,
    role: 'Developer',
    departmentId: 3
  },
  {
    id: 3,
    name: 'devi',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: true,
    experience: 9,
    role: 'HR',
    departmentId: 3
  },
  {
    id: 1,
    name: 'Ashok',
    joiningDate: '2012-10-02T00:00:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2
  },
  {
    id: 6,
    name: 'Ashok k',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: false,
    experience: 8,
    role: 'HR',
    departmentId: 2
  },
  {
    id: 8,
    name: 'Ashok',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2
  }
];
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Employee Create': {
      const newState = [...state, action.payload.employee];

      console.log(newState);

      return newState;
    }
    case 'Employee Delete': {
      const empId = action.payload;
      const idx = state.findIndex((item) => item.id == empId);
      const newState = [...state];

      newState.splice(idx, 1);

      return newState;
    }
    case 'Employee Edit': {
      const empId = action.payload.employee.Employee_ID.id;

      const idx = state.findIndex((item) => {
        return Number(item.id) == Number(empId);
      });

      console.log(idx);
      const newState = [...state];

      newState[idx] = action.payload.employee;
      console.log(newState);

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
