import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetcylinderbycustomeridModule } from '../../../model/BookingModel/getcylinderbycustomerid/getcylinderbycustomerid.module';
import { CylindersService } from '../../../service/CylinderService/cylinders.service';
import { AddPaymentComponent } from '../../PaymentComponent/add-payment/add-payment.component';
import { AddPaymentModule } from '../../../model/PaymentModel/add-payment/add-payment.module';
import { AddPaymentService } from '../../../service/PaymentService/add-payment.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-getcylinderbycustomerid',
  standalone: true,
  imports: [FormsModule,CommonModule,AddPaymentComponent,RouterLink,RouterOutlet],
  templateUrl: './getcylinderbycustomerid.component.html',
  styleUrl: './getcylinderbycustomerid.component.css'
})
export class GetcylinderbycustomeridComponent {
    getcylinderbycustomerid:GetcylinderbycustomeridModule[]=[];
    paymentcylinder:AddPaymentModule=new AddPaymentModule();
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
    message:string="";
    errormessage1:string="";
    bankmessage1:string="";
    bankmessage:boolean=false;
    password:string="";
    ispassword:boolean=false;
    PaymentCylinder(booking?:number){
      var customerid=JSON.parse(localStorage.getItem("customerId")|| '{}');
      console.log(customerid);
      console.log(customerid);
      this.paymentcylinder.bookingId=booking;
      this.paymentcylinder.customerId=customerid;
        console.log(this.paymentcylinder);
        let condition=window.confirm("Are you sure you want to Pay");
        if(condition){
          this.getPassword();
        }
        else this.router.navigateByUrl('/booked/cylinder');        
    }
    getPassword(){
      console.log(this.bankmessage);
      if(localStorage.getItem("bankId")==null){
        console.log(localStorage.getItem("bankId"));
        let condition= window.confirm("Bank account is not linked to the account");
        if(condition){
          this.bankmessage=!this.bankmessage;
          this.router.navigateByUrl("bank");
        }
      }
      else{
        this.ispassword=true;
        console.log("Hello World");
      }
    }
    getPasswordCheck(){
      this.paymentcylinder.password=this.password;
      console.log(this.paymentcylinder.bookingId);
      console.log(this.paymentcylinder.customerId);
      this.cylinderservice.AddPaymentService(this.paymentcylinder).subscribe(
        {
          next:(data)=>{
            console.log(data);
            let condition=window.confirm("Paid successfully");
            if(condition){
              this.router.navigateByUrl("customer/home");
            }
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