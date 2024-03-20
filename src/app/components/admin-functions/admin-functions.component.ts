import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-functions',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-functions.component.html',
  styleUrl: './admin-functions.component.css'
})
export class AdminFunctionsComponent {
  string1: string = "";
  constructor(private router:Router){
    
  }
  adminfunc(){
  const str1: string = "customer";
  const str2: string = "cylinder";
  console.log(this.string1);
  if(this.string1===str1){
   console.log(str1);
   this.router.navigateByUrl('customerdetails');
  }
  else {
    console.log(str2);
    this.router.navigateByUrl('cylinderFunctionality');
  }
  }
  

}
