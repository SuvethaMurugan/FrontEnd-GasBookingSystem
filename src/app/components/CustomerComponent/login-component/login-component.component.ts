import { Component } from '@angular/core';
import { LoginCustomer } from '../../../model/CustomerModel/LoginCustomer';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../service/CustomerService/customer.service';
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  logincustomer:LoginCustomer=new LoginCustomer();
  constructor(private customerservice:CustomerService){}
  loginComponent(){
    this.customerservice.loginCustomer(this.logincustomer).subscribe(
      {
        next:(data)=>{
          console.log(data);
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          console.log("Completed successfully");
        }

      }
    )
  }
}
