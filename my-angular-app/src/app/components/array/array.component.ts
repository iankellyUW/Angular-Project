import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  array:number[];
  tempArr:number[];

  constructor() { }

  ngOnInit(): void {
    this.tempArr = [2,5,3,1,6,4,7,9,0,8];
    this.array =  this.tempArr;
  }

  odds():void {
    this.array = this.array.filter(e=>e%2==1);
  }

  evens():void {
    this.array = this.array.filter(e=>e%2==0);
  }

  sort():void {
    this.array.sort();
  }

  reset():void{
    this.array = this.tempArr.slice();
  }
}
