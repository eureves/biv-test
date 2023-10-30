import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '@app/types/employee';
import { EmployeesService } from '@app/services/employees.service';
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'

@Component({
  selector: 'app-empolyee-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule],
  template: `
      <div class="card">
          <p class="card-number">
              Сотрудник № {{index}}
          </p>
          <p>Фамилия</p>
          <p>{{employee.lastname}}</p>
          <p>Имя</p>
          <p>{{employee.firstname}}</p>
          <p>Отчество</p>
          <p>{{employee.surname}}</p>
          <button
                  class="card-button"
                  mat-raised-button color="primary"
                  (click)="deleteEmployee(employee.id)"
          >
              УДАЛИТЬ СОТРУДНИКА
          </button>
      </div>
  `,
  styleUrls: ['empolyee-card.component.scss']
})
export class EmpolyeeCardComponent {
  @Input() employee!: IEmployee
  @Input() index!: number
  employeesService: EmployeesService = inject(EmployeesService)

  deleteEmployee(id: string) {
    this.employeesService.removeEmployeeById(id)
  }
}
