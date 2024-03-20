import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookcylinderModule } from '../../model/BookingModel/bookcylinder/bookcylinder.module';
import { AddPaymentModule } from '../../model/PaymentModel/add-payment/add-payment.module';

import { addCylinder } from '../../model/CylinderModel/cylinders/addCylinder';
import { CylindersModule } from '../../model/CylinderModel/cylinders/cylinders.module';

import { RefillModule } from '../../model/BookingModel/refill/refill.module';


@Injectable({
  providedIn: 'root'
})
export class CylindersService {

  constructor(private http:HttpClient) { }
  public getAllCylinders():Observable<any>{
    return  this.http.get("http://localhost:8090/admin/available");
  }
  public bookCylinder(bookcylinder:BookcylinderModule):Observable<any>{
    return this.http.post("http://localhost:8090/booking",bookcylinder);
  }
  public getCylinderByCustomerID(id?:number |null):Observable<any>{
    return this.http.get("http://localhost:8090/booking/customer/"+id);
  }
  public AddPaymentService(paymentmodule:AddPaymentModule):Observable<any>{
    return this.http.post("http://localhost:8090/book/payment",paymentmodule);
  }

  public AddCylinder(addcylinder:addCylinder):Observable<any>
  {
    return this.http.post("http://localhost:8090/admin/Cylinder",addcylinder);
  }
  public AvailableCylinders():Observable<any>
  {
    return this.http.get("http://localhost:8090/admin/available");
  }
  public BookedCylinders():Observable<any>
  {
    return this.http.get("http://localhost:8090/admin/available/booked");
  }


  public refillCylinder(refill:RefillModule):Observable<any>{
    return this.http.post("http://localhost:8090/booking/refill",refill);
  }

}
