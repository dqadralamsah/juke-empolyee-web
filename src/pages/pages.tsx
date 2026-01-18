import { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../api/eployeeApi';
import type { Employee } from '../types/employeeTypes';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeePage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selected, setSelected] = useState<Employee | null>(null);

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <>
      <EmployeeForm
        selected={selected}
        refresh={fetchEmployees}
        clearSelected={() => setSelected(null)}
      />
      <EmployeeTable employees={employees} onEdit={setSelected} onDelete={handleDelete} />
    </>
  );
}
