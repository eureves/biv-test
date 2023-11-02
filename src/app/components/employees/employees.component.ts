import {Component, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '@app/types/employee';
import { EmployeesService } from '@app/services/employees.service';
import { PageTemplateComponent } from '@app/components/page-template/page-template.component';
import { EmpolyeeCardComponent } from '@app/components/empolyee-card/empolyee-card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, EmpolyeeCardComponent],
  template: `
    <app-page-template>
      <section class="empolyees-section">
        <app-empolyee-card *ngFor="let employee of employees; let i = index" [employee]="employee" [index]="i"/>
      </section>
    </app-page-template>
  `,
  styleUrls: ['employees.component.scss']
})
export class EmployeesComponent implements OnDestroy{
  employees!: IEmployee[]
  employeesSub: Subscription

  constructor(employeesService: EmployeesService) {
    this.employeesSub = employeesService.employees$.subscribe(next => this.employees = next)
  }

  ngOnDestroy() {
    this.employeesSub.unsubscribe()
  }
}
