import type { Employee } from '../types/employeeTypes';

interface Props {
  employees: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (id: number) => void;
}

export default function EmployeeTable({ employees, onEdit, onDelete }: Props) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.position}</td>
            <td>{emp.salary}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id!)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
