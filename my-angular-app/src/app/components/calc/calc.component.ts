import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  x:number;
  y:number;
  result:number;


  constructor() { }

  ngOnInit(): void {
    this.x = 10;
    this.y = 5;
    this.result = 0;
  }

  display():void {
    console.log(this.x + ", " + this.y);
  }

  add():void {
    this.result = this.y + this.x;
  }

  mul():void {
    this.result = this.y * this.x;
  }

  sub():void {
    this.result = this.x - this.y;
  }

  div():void {
    this.result = this.x / this.y;
  }
}
