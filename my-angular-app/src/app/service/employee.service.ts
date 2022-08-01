import { Injectable } from "@angular/core";
import { employeeData } from "../data";
import { Employee } from "../model/employee.model";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    employees:Employee[];

    fetchEmployees(): Employee[] {
      return this.employees;
    }
    sortSalary(employees:Employee[], flag:number):void {
        if(flag == 1)
            employees.sort((a,b)=>a.salary-b.salary);
        else
            employees.sort((a,b)=>b.salary-a.salary);
    }
}