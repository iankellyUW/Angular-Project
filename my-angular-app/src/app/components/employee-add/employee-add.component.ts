import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeData } from 'src/app/data';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(employeeForm: NgForm) {
    console.log(employeeForm.value);
  }

}
