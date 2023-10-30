import { Component, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../types/user';
import { UsersService } from '../users.service';
import { PageTemplateComponent } from '../page-template/page-template.component';
import { EmpolyeeCardComponent } from '../empolyee-card/empolyee-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, PageTemplateComponent, EmpolyeeCardComponent],
  template: `
  <app-page-template>
    <section class="empolyees-section">
      <app-empolyee-card *ngFor="let employee of users(); let i = index" [employee]="employee" [index]="i"/>
    </section>
  </app-page-template>
  `,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: WritableSignal<IUser[]>
  userService: UsersService = inject(UsersService)

  constructor() {
    this.users = this.userService.getAllUsers()
  }

}
