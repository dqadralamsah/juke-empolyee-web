export interface Employee {
  id?: number;
  name: string;
  email: string;
  position: string;
  salary: number;
}

export interface WebResponse<T> {
  data: T;
  status: number;
  timestamp: string;
}
