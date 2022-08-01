import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { ArrayComponent } from './components/array/array.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeAddReactiveComponent } from './components/employee-add-reactive/employee-add-reactive.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { EmployeeComponentRxjs } from './components/employee/employee/employee.component';
import { EmployeeStatComponent } from './components/employee/employee-stat/employee-stat.component';
import { EmployeeAddComponentRxjs } from './components/employee/employee-add/employee-add.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponentRxjs } from './components/employee/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ArrayComponent,
    EmployeeListComponentRxjs,
    EmployeeAddComponent,
    EmployeeAddReactiveComponent,
    AddressComponent,
    PostComponent,
    DashboardComponent,
    CommentsComponent,
    ProductComponent,
    CategoryComponent,
    EmployeeComponentRxjs,
    EmployeeStatComponent,
    EmployeeAddComponentRxjs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
