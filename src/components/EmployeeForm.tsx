import { useEffect, useState } from 'react';
import type { Employee, EmployeeFormData } from '../types/employeeTypes';

type Props = {
  initialData?: Employee | null;
  onSubmit: (data: Employee) => void;
};

export default function EmployeeForm({ initialData, onSubmit }: Props) {
  const [form, setForm] = useState<EmployeeFormData>({
    name: '',
    email: '',
    position: '',
    salary: '',
  });

  useEffect(() => {
    if (initialData)
      setForm({
        name: initialData.name,
        email: initialData.email,
        position: initialData.position,
        salary: initialData.salary.toString(),
      });
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || Number(form.salary) <= 0) {
      alert('Email wajib & salary harus > 0');
      return;
    }

    onSubmit({
      ...initialData,
      name: form.name,
      email: form.email,
      position: form.position,
      salary: Number(form.salary),
    });

    setForm({
      name: '',
      email: '',
      position: '',
      salary: '',
    });
  };

  return (
    <div className="flex items-centers justify-between w-full">
      <div>
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 text-sm border border-gray-200 rounded-lg"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 text-sm border border-gray-200 rounded-lg"
          />
          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Position"
            className="p-2 text-sm border border-gray-200 rounded-lg"
          />
          <input
            name="salary"
            type="number"
            value={form.salary}
            onChange={handleChange}
            placeholder="Salary"
            min={1}
            className="p-2 text-sm text-right border border-gray-200 rounded-lg"
          />
        </form>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-3 py-1 bg-gray-200 border border-gray-400 rounded-lg hover:bg-gray-400"
        >
          {initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </div>
  );
}
