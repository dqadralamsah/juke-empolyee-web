import { useEffect, useState } from 'react';
import type { Employee } from '../types/employeeTypes';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api/eployeeApi';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeePage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [initialData, setInitialData] = useState<Employee | null>(null);

  const fetchEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async (data: Employee) => {
    try {
      if (data.id) {
        await updateEmployee(data.id, data);
      } else {
        await createEmployee(data);
      }

      setInitialData(null);
      fetchEmployees();
    } catch (error) {
      alert('Gagal menyimpan data');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin hapus employee ini?')) return;

    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      alert('Gagal menghapus employee');
    }
  };

  return (
    <div className="p-8 space-y-8">
      <EmployeeForm initialData={initialData} onSubmit={handleSubmit} />
      <EmployeeTable employees={employees} onEdit={setInitialData} onDelete={handleDelete} />
    </div>
  );
}
