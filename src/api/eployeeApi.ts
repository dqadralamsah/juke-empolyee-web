import axiosInstance from '../utils/axiosInstance';
import type { Employee, WebResponse } from '../types/employeeTypes';

export const getEmployees = () => axiosInstance.get<WebResponse<Employee[]>>('/employees');

export const getEmployeeById = (id: number) =>
  axiosInstance.get<WebResponse<Employee>>(`/employees/${id}`);

export const createEmployee = (data: Employee) =>
  axiosInstance.post<WebResponse<Employee>>('/employees', data);

export const updateEmployee = (id: number, data: Employee) =>
  axiosInstance.put<WebResponse<Employee>>(`/employees/${id}`, data);

export const deleteEmployee = (id: number) =>
  axiosInstance.delete<WebResponse<null>>(`/employees/${id}`);
