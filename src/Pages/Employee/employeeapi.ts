import baseApi from '../../services';

interface Employee {
  id: number;
  name: string;
  joining_Date: string;
  status: string;
  experience: string;
  role: string;
  departmentId: number;
  address: {
    city: string;
    address_line_1: string;
    address_line_2: string;
  };
}

interface Deparment {
  createdAt: string;
  deletedAt: string;
  id: number;
  name: string;
  updatedAt: string;
}
export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ employees: Employee[] }, void>({
      query: () => '/employees',
      providesTags: ['getEmployeeList']
    })
  })
});
export const deleteEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['getEmployeeList']
    })
  })
});
export const getDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query<Deparment[], void>({
      query: () => '/departments'
    })
  })
});
export const { useGetEmployeeListQuery } = employeeApi;
export const { useDeleteEmployeeMutation } = deleteEmployeeApi;
export const { useGetDepartmentListQuery } = getDepartmentApi;
