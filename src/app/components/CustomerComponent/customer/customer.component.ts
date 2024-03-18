import { Component } from '@angular/core';
import { CustomerService } from '../../../service/CustomerService/customer.service';
import { RegisterCustomer } from '../../../model/CustomerModel/RegisterCustomer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Address } from '../../../model/CustomerModel/Address';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
<<<<<<< HEAD
  title = 'FrontEnd-GasBookingSystem';
  registercustomer: any;
  //registercustomer:RegisterCustomer=new RegisterCustomer();
=======

  registercustomer: RegisterCustomer = new RegisterCustomer;
>>>>>>> 7bf9a377b10fe2da69544c0445fd350f8dd3e22f
  address:Address= new Address();

  constructor(private customerservice:CustomerService){}
  registerProduct(){
    this.registercustomer.address = this.address;
    console.log(this.registercustomer);
    this.customerservice.registerCustomer(this.registercustomer).subscribe(
      {
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Completed successfully");
      }
    }
    )
  }
}


