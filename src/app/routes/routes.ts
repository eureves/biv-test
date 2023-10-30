import { Routes } from '@angular/router';
import { NewUserComponent } from '../new-user/new-user.component';
import { UsersComponent } from '../users/users.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: 'employees/new',
    pathMatch: 'full'
  },
  {
    path: 'employees/new',
    component: NewUserComponent,
    title: 'СТРАНИЦА 1',
    data: {
      pageTitle: 'Добавить сотрудника'
    }
  },
  {
    path: 'employees',
    component: UsersComponent,
    title: 'СТРАНИЦА 2',
    data: {
      pageTitle: 'Список сотрудников'
    }
  },
];

const routesForTabs = routeConfig.slice(1)

export { routeConfig, routesForTabs }
