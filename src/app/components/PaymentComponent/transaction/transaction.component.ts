import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPaymentService } from '../../../service/PaymentService/add-payment.service';
import { TransactionModule } from '../../../model/PaymentModel/transaction/transaction.module';
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  transaction:TransactionModule[]=[];
  customername?:string="";
  constructor(private paymentservice:AddPaymentService){
    var customerid=JSON.parse(localStorage.getItem("customerId")|| '{}');
    console.log(customerid);
    console.log(customerid);
    this.paymentservice.getTransactionHistory(customerid).subscribe(
      {
      
        next:(data)=>{
          console.log(data);
          this.transaction=data;
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("Completed data loading");
      }
      
    }
  )
  }

}
