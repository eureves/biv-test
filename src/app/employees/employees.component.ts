import { Component, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../types/employee';
import { EmployeesService } from '../employees.service';
import { PageTemplateComponent } from '../page-template/page-template.component';
import { EmpolyeeCardComponent } from '../empolyee-card/empolyee-card.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, EmpolyeeCardComponent],
  template: `
  <app-page-template>
    <section class="empolyees-section">
      <app-empolyee-card *ngFor="let employee of employees(); let i = index" [employee]="employee" [index]="i"/>
    </section>
  </app-page-template>
  `,
  styleUrls: ['employees.component.scss']
})
export class EmployeesComponent {
  employees: WritableSignal<IEmployee[]>
  employeesService: EmployeesService = inject(EmployeesService)

  constructor() {
    this.employees = this.employeesService.getAllEmployees()
  }

}
