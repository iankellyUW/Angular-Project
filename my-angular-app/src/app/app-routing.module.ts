import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponentRxjs } from './components/employee/employee/employee.component';
import { PostComponent } from './components/post/post.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'comments/:postId', component: CommentsComponent},
  {path:'post', component: PostComponent},
  {path:'products', component: ProductComponent},
  {path:'category', component: CategoryComponent},
  {path:'employee', component: EmployeeComponentRxjs}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
