import { Injectable } from '@angular/core';
import { IEmployee } from '@app/types/employee';
import { BehaviorSubject, Observable, of } from 'rxjs';

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

  addEmployee(lastname: string, firstname: string, surname: string): void {
    this.employeesObj.next([...this.employeesObj.getValue(), {
      id: crypto.randomUUID(),
      lastname,
      firstname,
      surname
    }])
  }

  removeEmployeeById(id: string): void {
    this.employeesObj.next(this.employeesObj.getValue().filter(el => el.id !== id))
  }
}
