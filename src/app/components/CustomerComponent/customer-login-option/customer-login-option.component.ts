import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-customer-login-option',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-login-option.component.html',
  styleUrl: './customer-login-option.component.css'
})
export class CustomerLoginOptionComponent {
  constructor(private router:Router){}
  loginUsingMobileNum(){
   this.router.navigateByUrl('login/mobileno');
  }
  loginUsingUserName(){
   this.router.navigateByUrl('login/username');
  }
}
