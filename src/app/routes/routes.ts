import { Routes } from '@angular/router';
import { NewEmployeeComponent } from '@app/components/new-employee/new-employee.component';
import { EmployeesComponent } from '@app/components/employees/employees.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'employees/new',
    pathMatch: 'full'
  },
  {
    path: 'employees/new',
    component: NewEmployeeComponent,
    title: 'СТРАНИЦА 1',
    data: {
      pageTitle: 'Добавить сотрудника'
    }
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    title: 'СТРАНИЦА 2',
    data: {
      pageTitle: 'Список сотрудников'
    }
  },
];

const routesForTabs = routeConfig.slice(1)

export { routeConfig, routesForTabs }
