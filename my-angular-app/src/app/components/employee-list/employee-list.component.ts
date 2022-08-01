import { Component, Input, OnInit } from '@angular/core';
import { employeeData } from 'src/app/data';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input("data")
  employees:Employee[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = employeeData;
  }

  sortSalary(flag:number):void {
    this.employeeService.sortSalary(this.employees, flag);
}

}
