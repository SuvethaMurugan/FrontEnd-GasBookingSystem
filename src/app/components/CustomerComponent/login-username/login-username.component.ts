import { Component, Inject } from '@angular/core';
import { LoginCustomer } from '../../../model/CustomerModel/LoginCustomer';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { CustomerService } from '../../../service/CustomerService/customer.service';
import { Customer } from '../../../model/CustomerModel/Customer';
import { CustomerLoginUsername } from '../../../model/CustomerModel/CustomerLoginUsername';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './login-username.component.html',
  styleUrl: './login-username.component.css'
})
export class LoginComponentUserComponent {
  message:string="";
  errormessage:string="";
  account:Customer=new Customer();
  logincustomer:CustomerLoginUsername=new CustomerLoginUsername();
  // loginnamecustomer:LoginCustomer=new LoginCustomer();
  accountid?:number;
  accountname?:string;
  constructor(private customerservice:CustomerService,private router:Router,@Inject(DOCUMENT) private document: Document){}
  
  loginComponent(){
    console.log(this.logincustomer.password);
    console.log(this.logincustomer.userName);
    this.customerservice.loginNameCustomer(this.logincustomer).subscribe(
      {
        next:(data)=>{
          this.account=data;
          this.accountid=this.account.id;
          this.accountname=this.account.userName; 
          localStorage.setItem("customerId",JSON.stringify(this.accountid));
          localStorage.setItem("customerName",JSON.stringify(this.accountname));
          console.log(data);
          this.router.navigateByUrl('customer/home');  
        },
        error:(err)=>{
          this.errormessage=err.error;
          alert(err.error);
        },
        complete:()=>{
          console.log("Completed successfully");
        }
      }
    )
  }
  
}
