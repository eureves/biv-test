import { Injectable } from '@angular/core';
import { IEmployee } from '@app/types/employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesObj = new BehaviorSubject<IEmployee[]>([
    {
      id: '0',
      lastname: 'Иванов',
      firstname: 'Иван',
      surname: 'Иванович',
    }
  ])

  public employees$ = this.employeesObj.asObservable()

  addEmployee(newEmployee: IEmployee): void {
    this.employeesObj.next([...this.employeesObj.getValue(), {
      ...newEmployee,
      id: crypto.randomUUID(),
    }])
  }

  removeEmployeeById(id: string): void {
    this.employeesObj.next(this.employeesObj.getValue().filter(el => el.id !== id))
  }
}
