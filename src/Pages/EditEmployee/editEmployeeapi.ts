import baseApi from '../../services';
type EditEmployeePayloadType = {
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
  employee_id: string;
  email: string;
  password: string;
  departmentId: number;
};

export const editEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployee: builder.mutation({
      query: (body: EditEmployeePayloadType) => ({
        url: `/employees/${body.employee_id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['getEmployeeList']
    })
  })
});

export const { useEditEmployeeMutation } = editEmployeeApi;
