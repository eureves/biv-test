import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EmployeesService } from '../employees.service';
import { PageTemplateComponent } from '../page-template/page-template.component';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, PageTemplateComponent],
  template: `
  <app-page-template>
    <form class="new-employee-form" [formGroup]="newEmployeeForm" (submit)="submitNewEmployee()">
      <mat-form-field>
        <mat-label>Фамилия</mat-label>
        <input matInput type="text" id="lastname" formControlName="lastname">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Имя</mat-label>
        <input matInput type="text" id="firstname" formControlName="firstname">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Отчество</mat-label>
        <input matInput type="text" id="surname" formControlName="surname">
      </mat-form-field>  
      <button class="new-employee-form__submit" mat-raised-button color="primary" type="submit" [disabled]="!this.newEmployeeForm.valid">ДОБАВИТЬ</button>
    </form>
  </app-page-template>
  `,
  styleUrls: ['new-employee.component.scss']
})
export class NewEmployeeComponent {
  employeesService: EmployeesService = inject(EmployeesService)

  newEmployeeForm = new FormGroup({
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

  submitNewEmployee() {
    console.log(this.newEmployeeForm);

    this.employeesService.addEmployee(
      this.newEmployeeForm.value.lastname!,
      this.newEmployeeForm.value.firstname!,
      this.newEmployeeForm.value.surname!,
    )

    this.newEmployeeForm.reset()
  }
}
