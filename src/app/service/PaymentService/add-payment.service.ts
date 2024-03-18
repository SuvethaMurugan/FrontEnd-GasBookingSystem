import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankLinkingModelModule } from '../../model/PaymentModel/bank-linking-model/bank-linking-model.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPaymentService {

  constructor(private httpclient:HttpClient) { }
  public bankLinkingDTO(banklinking:BankLinkingModelModule):Observable<any>{
    return this.httpclient.patch("http://localhost:8090/bank",banklinking);
  }
  public getProfileID(id?:number |null):Observable<any>{
    console.log(id);
    return this.httpclient.get("http://localhost:8090/profile/"+id);
  }
  public getTransactionHistory(id?:number |null):Observable<any>{
    return this.httpclient.get("http://localhost:8090/transaction/"+id);
  }
}
