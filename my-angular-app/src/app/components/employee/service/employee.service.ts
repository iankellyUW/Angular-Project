import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  postApi: string;
  employee$ = new BehaviorSubject<Employee[]>([]);
  constructor(private http: HttpClient) {
    this.postApi = 'http://localhost:8282/employee';
   }

  postEmployee(employee: Employee):Observable<Employee> {
    return this.http.post<Employee>(this.postApi, employee);
  }

}
