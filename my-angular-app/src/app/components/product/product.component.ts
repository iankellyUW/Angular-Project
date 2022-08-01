import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  errorMsg: string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.errorMsg = '';
    this.productService.fetchProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        this.errorMsg = 'Products could not be fetched..'
      }
    })
  }

}
