import { Component } from '@angular/core';
import { LoginIdModelModule } from '../../model/login-id-model/login-id-model.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink ,Router } from '@angular/router';
import { LoginIdServiceService } from '../../service/Admin/login-id-service.service';
@Component({
  selector: 'app-login-id',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login-id.component.html',
  styleUrl: './login-id.component.css'
})
export class LoginIdComponent {
  loginmodule:LoginIdModelModule=new LoginIdModelModule;
  constructor(private router:Router,private loginIdservice:LoginIdServiceService){}
  adminFunctions(){
    this.loginIdservice.loginAdminId(this.loginmodule).subscribe(
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
