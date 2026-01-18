import { useEffect, useState } from 'react';
import type { Employee } from '../types/employeeTypes';
import { createEmployee, updateEmployee } from '../api/eployeeApi';

interface Props {
  selected: Employee | null;
  refresh: () => void;
  clearSelected: () => void;
}

export default function EmployeeForm({ selected, refresh, clearSelected }: Props) {
  const [form, setForm] = useState<Employee>({
    name: '',
    email: '',
    position: '',
    salary: 0,
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'salary' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selected?.id) {
      await updateEmployee(selected.id, form);
    } else {
      await createEmployee(form);
    }

    refresh();
    clearSelected();
    setForm({
      name: '',
      email: '',
      position: '',
      salary: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="position" value={form.position} onChange={handleChange} placeholder="Position" />
      <input
        name="salary"
        type="number"
        value={form.salary}
        onChange={handleChange}
        placeholder="Salary"
      />
      <button type="submit">{selected ? 'Update' : 'Create'}</button>
    </form>
  );
}
