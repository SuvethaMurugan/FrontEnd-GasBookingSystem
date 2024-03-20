import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CylindersModule } from '../../../model/CylinderModel/cylinders/cylinders.module';
import { CylindersService } from '../../../service/CylinderService/cylinders.service';
import { BookcylinderModule } from '../../../model/BookingModel/bookcylinder/bookcylinder.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cylinders',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cylinders.component.html',
  styleUrl: './cylinders.component.css'
})
export class CylindersComponent {
    message:string="";
    errormessage:string="";
  cylinders:CylindersModule[]=[];
  constructor(private cylinderservice:CylindersService,private router:Router){
    this.getAllCylinders();
  }
  getAllCylinders(){
    this.cylinderservice.getAllCylinders().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.cylinders=data;
          console.log(data);
          console.log(this.cylinders);
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("Completed data loading");
        }
      }
    )
  }
  cylinderid?:number;
  bookcylinder:BookcylinderModule=new BookcylinderModule();
  bookCylinder(cylinder?:number){
    let condition=window.confirm("Are you sure you want to book");
    console.log(condition);
     if(condition){
      var customerid=JSON.parse(localStorage.getItem("customerId")|| '{}');
      console.log(customerid);
    this.bookcylinder.customerId=customerid;
    this.bookcylinder.cylinderId=cylinder;
    this.cylinderservice.bookCylinder(this.bookcylinder).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="The cylinder was booked successfully";
          console.log(this.message);
          setTimeout(() => {
            this.router.navigate(['/booked/cylinder']);
          }, 1000);
          // if(this.message) this.router.navigateByUrl('/booked/cylinder');  
          
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("Completed data loading");
        }
      }
    )

  }
  else this.router.navigateByUrl('customer/home'); 
}
  

}
