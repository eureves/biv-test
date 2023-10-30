import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../users.service';
import { PageTemplateComponent } from '../page-template/page-template.component';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, PageTemplateComponent],
  template: `
  <app-page-template>
    <form [formGroup]="newUserForm" (submit)="submitNewUser()" style="display: flex; flex-direction: column;">
      <mat-form-field >
        <mat-label>Фамилия</mat-label>
        <input matInput type="text" id="lastname" formControlName="lastname">
      </mat-form-field>
      <mat-form-field >
        <mat-label>Имя</mat-label>
        <input matInput type="text" id="firstname" formControlName="firstname">
      </mat-form-field>
      <mat-form-field >
        <mat-label>Отчество</mat-label>
        <input matInput type="text" id="surname" formControlName="surname">
      </mat-form-field>  
      <button mat-raised-button color="primary" type="submit" [disabled]="!this.newUserForm.valid">ДОБАВИТЬ</button>
    </form>
  </app-page-template>
  `,
})
export class NewUserComponent {
  userService: UsersService = inject(UsersService)

  newUserForm = new FormGroup({
    lastname: new FormControl('', [
      Validators.required
    ]),
    firstname: new FormControl('', [
      Validators.required]
    ),
    surname: new FormControl('', [
      Validators.required
    ])
  })

  submitNewUser() {
    console.log(this.newUserForm);

    this.userService.addUser(
      this.newUserForm.value.lastname!,
      this.newUserForm.value.firstname!,
      this.newUserForm.value.surname!,
    )

    this.newUserForm.reset()
  }
}
