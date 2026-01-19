import type { Employee } from '../types/employeeTypes';

interface Props {
  employees: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (id: number) => void;
}

export default function EmployeeTable({ employees, onEdit, onDelete }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Position</th>
            <th className="w-32 p-3">Salary</th>
            <th className="w-32 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="border-t text-center border-gray-200 hover:bg-gray-200 even:bg-gray-200"
            >
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.email}</td>
              <td className="p-3">{emp.position}</td>
              <td className="p-3">{emp.salary}</td>
              <td className="flex items-center justify-center p-3 gap-4">
                <button
                  className="px-3 py-1 text-red-700 border border-red-400 bg-red-200 rounded-lg hover:bg-red-400"
                  onClick={() => onEdit(emp)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 border border-gray-400 bg-gray-200 rounded-lg hover:bg-gray-400"
                  onClick={() => onDelete(emp.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
