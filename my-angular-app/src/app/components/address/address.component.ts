import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  showAddress:boolean;
  toShow:string;
  constructor() { }

  ngOnInit(): void {
    this.showAddress = false;
    this.toShow = "Show Address"
  }

  toggleAddress():void {
    this.showAddress = !this.showAddress;
    if(this.showAddress == false) {
      this.toShow = "Show Address"
    } else {
      this.toShow = "Hide Address"
    }
  }
}
