import { Injectable, WritableSignal, signal } from '@angular/core';
import { IEmployee } from '@app/types/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees = signal<IEmployee[]>([
    {
      id: '0',
      lastname: 'Иванов',
      firstname: 'Иван',
      surname: 'Иванович',
    }
  ])

  constructor() {
  }

  getAllEmployees(): WritableSignal<IEmployee[]> {
    return this.employees
  }

  addEmployee(lastname: string, firstname: string, surname: string): void {
    this.employees.update(current => [...current, {
      id: crypto.randomUUID(),
      lastname,
      firstname,
      surname
    }])
  }

  removeEmployeeById(id: string): void {
    this.employees.update(current => current.filter(el => el.id !== id))
  }
}
