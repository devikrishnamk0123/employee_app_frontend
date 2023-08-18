import baseApi from '../../services';

type CreayeEmployeePayloadType = {
  email: string;
  password: string;
  name: string;
  joining_date: string;
  experience: number;
  department: string;
  role: string;
  status: string;
  address: {
    flatNo: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  departmentId: number;
};

export const createEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (body: CreayeEmployeePayloadType) => ({
        url: '/employees/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['getEmployeeList']
    })
  })
});

export const { useCreateEmployeeMutation } = createEmployeeApi;
