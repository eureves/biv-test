import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../types/user';
import { UsersService } from '../users.service';
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'

@Component({
  selector: 'app-empolyee-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule],
  template: `
  <div class="card">
    <p class="card-number">
      СОТРУДНИК № {{index}}
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
        (click)="deleteUser(employee.id)"
      >
        УДАЛИТЬ СОТРУДНИКА
    </button>
  </div>
  `,
  styleUrls: ['./empolyee-card.component.scss']
})
export class EmpolyeeCardComponent {
  @Input() employee!: IUser
  @Input() index!: number
  userService: UsersService = inject(UsersService)

  deleteUser(id: string) {
    this.userService.removeUserById(id)
  }
}
