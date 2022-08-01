import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-add-rxjs',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponentRxjs implements OnInit {

  msg: string;
  employee: Employee
  employeeForm: FormGroup;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.msg = '';
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      city: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      salary: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/),
      Validators.minLength(4), Validators.maxLength(10)]),
      department: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)])
    });
  }

  onFormSubmit(): void {
    this.employee = this.employeeForm.value
    console.log(this.employee);
    this.employeeService.postEmployee(this.employee).subscribe({
      next: (data) => {
        this.employee = data;
        this.msg = 'Employee Added to System';
        let employeeArry = this.employeeService.employee$.getValue();

        employeeArry.push(this.employee);

        this.employeeService.employee$.next(employeeArry);
      },
      error: (e) => {

      }
    });
}


}
