export type EmployeeFormData = {
  id?: number;
  name: string;
  email: string;
  position: string;
  salary: string;
};

export type Employee = {
  id?: number;
  name: string;
  email: string;
  position: string;
  salary: number;
};

export type WebResponse<T> = {
  data: T;
  status: number;
  timestamp: string;
};
