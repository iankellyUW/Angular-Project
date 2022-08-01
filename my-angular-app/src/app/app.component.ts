import { Component, OnInit } from '@angular/core';
import { employeeData } from './data';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {} // do not use -- see ngOnInit instead
  employees:Employee[];
  ngOnInit(): void {
    this.employees = this.employeeService.fetchEmployees();
  }
}
