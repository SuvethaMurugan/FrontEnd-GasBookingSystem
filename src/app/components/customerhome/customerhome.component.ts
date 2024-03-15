import { Component } from '@angular/core';

@Component({
  selector: 'app-customerhome',
  standalone: true,
  imports: [],
  templateUrl: './customerhome.component.html',
  styleUrl: './customerhome.component.css'
})
export class CustomerhomeComponent {
   customername1:string="";
  constructor(){
    const customername=localStorage.getItem("customerName");
    this.customername1=String(customername);
  }
}
