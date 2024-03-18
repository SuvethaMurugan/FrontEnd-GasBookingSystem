import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginEmailModule } from '../../model/login-email/login-email.module';

@Injectable({
  providedIn: 'root'
})
export class LoginEmailService {

  constructor(private http:HttpClient) { }
  public loginAdminEmail(loginAdmin:LoginEmailModule){
    return this.http.post("http://localhost:8090/login/emailId",loginAdmin);
  }
}
