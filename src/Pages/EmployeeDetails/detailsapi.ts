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
  email: string;
  password: string;
}

export const detailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query<{ employee: Employee }, number>({
      query: (id) => `/employees/${id}`
    })
  })
});
export const { useGetEmployeeByIdQuery } = detailsApi;
