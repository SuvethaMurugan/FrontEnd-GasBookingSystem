import { Component } from '@angular/core';
import { GetcylinderbycustomeridModule } from '../../../model/BookingModel/getcylinderbycustomerid/getcylinderbycustomerid.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CylindersService } from '../../../service/CylinderService/cylinders.service';
import { BookcylinderModule } from '../../../model/BookingModel/bookcylinder/bookcylinder.module';
import { RefillModule } from '../../../model/BookingModel/refill/refill.module';

@Component({
  selector: 'app-refill',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './refill.component.html',
  styleUrl: './refill.component.css'
})
export class RefillComponent {
  getcylinderbycustomerid:GetcylinderbycustomeridModule[]=[];
  refillmodule:RefillModule=new RefillModule();
  customerid:string="";
  constructor(private cylinderservice:CylindersService,private router:Router){
    this.getAllCylindersById();
  }
  getAllCylindersById(){
    var customerid=JSON.parse(localStorage.getItem("customerId")|| '{}');
    this.cylinderservice.getCylinderByCustomerID(customerid).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.getcylinderbycustomerid=data;
          console.log(this.getcylinderbycustomerid);
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
  RefillCylinder(bookingid?:number,cylinderid?:number){
    var customerid1=JSON.parse(localStorage.getItem("customerId")|| '{}');
    this.refillmodule.customerId=customerid1;
    this.refillmodule.cylinderId=cylinderid;
    this.refillmodule.bookingId=bookingid;
    console.log(this.refillmodule);
    this.cylinderservice.refillCylinder(this.refillmodule).subscribe(
      {
        next:(data)=>{
          console.log(data);

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

}
