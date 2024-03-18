import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginEmailModule } from '../../model/login-email/login-email.module';
import { Router } from '@angular/router';
import { LoginEmailService } from '../../service/Admin/login-email.service';
@Component({
  selector: 'app-login-email',
  standalone: true,
  imports: [CommonModule,FormsModule,LoginEmailComponent],
  templateUrl: './login-email.component.html',
  styleUrl: './login-email.component.css'
})
export class LoginEmailComponent {
  loginModel:LoginEmailModule=new LoginEmailModule;
  constructor(private router:Router,private adminloginservice:LoginEmailService){
  }
  adminFunctions(){
   this.adminloginservice.loginAdminEmail(this.loginModel).subscribe(
    {
      next:(data)=>{
        console.log(data); 
        this.router.navigateByUrl('adminFunctions');
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Completed data loading");
      }
    }
  )
  }
}
