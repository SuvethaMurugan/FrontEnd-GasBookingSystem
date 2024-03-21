import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCustomer } from '../../model/CustomerModel/RegisterCustomer';
import { Observable } from 'rxjs';
import { LoginCustomer } from '../../model/CustomerModel/LoginCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private Http:HttpClient) { }
  public registerCustomer(registercustomer:RegisterCustomer):Observable<any>{
    return this.Http.post("http://localhost:8090/register",registercustomer);
  }
  public loginCustomer(logincustomer:LoginCustomer):Observable<any>{
    return this.Http.post("http://localhost:8090/login/mobilenum",logincustomer);
  }
  public loginNameCustomer(logincustomer:LoginCustomer):Observable<any>{
    return this.Http.post("http://localhost:8090/login/userName",logincustomer);
  }
}
