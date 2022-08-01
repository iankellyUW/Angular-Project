import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  message: string;


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.message = '';
    this.categoryForm = new FormGroup ({
      name: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      preference: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)])
    })
  }

  onFormSubmit() {
    let category: Category= {
      name: this.categoryForm.value.name,
      preference: this.categoryForm.value.preference
    }
    this.categoryService.postCategory(category).subscribe({
      next: (data) => {
        this.message='Category Added Succesfully';
      },
      error: (e) => {
        this.message = 'Could not Perform Operation';
      }
    });
  }

}
