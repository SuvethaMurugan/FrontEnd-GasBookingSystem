import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginIdModelModule } from '../../model/login-id-model/login-id-model.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginIdServiceService {

  constructor(private http:HttpClient) { }
  public loginAdminId(loginAdmin:LoginIdModelModule):Observable<any>{
    return this.http.post("http://localhost:8090/login/adminId",loginAdmin);
  }
}
