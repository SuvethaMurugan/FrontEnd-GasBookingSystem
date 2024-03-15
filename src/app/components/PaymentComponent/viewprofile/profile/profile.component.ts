import { Component } from '@angular/core';
import { AddPaymentService } from '../../../../service/PaymentService/add-payment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterCustomer } from '../../../../model/CustomerModel/RegisterCustomer';
import { Console } from 'node:console';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  customer:RegisterCustomer=new RegisterCustomer();
  customername?:string="";
  constructor(private paymentservice:AddPaymentService){
    var customerid=JSON.parse(localStorage.getItem("customerId")|| '{}');
    console.log(customerid);
    console.log(customerid);
    this.paymentservice.getProfileID(customerid).subscribe(
      {
      
        next:(data)=>{
          console.log(data);
          this.customer=data;
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
