import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankLinkingModelModule } from '../../../model/PaymentModel/bank-linking-model/bank-linking-model.module';
import { AddPaymentService } from '../../../service/PaymentService/add-payment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bank-linking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bank-linking.component.html',
  styleUrl: './bank-linking.component.css'
})
export class BankLinkingComponent {
  banklinking:BankLinkingModelModule=new BankLinkingModelModule();
  constructor(private addpaymentservice:AddPaymentService,private router:Router){}
  BankLinkingComponent(){
    var customerid=JSON.parse(localStorage.getItem("customerId")|| '{}');
    var bankid=localStorage.setItem("bankId",JSON.stringify(1));
    console.log(customerid);
    console.log(customerid);
    this.banklinking.customerId=customerid;
    this.addpaymentservice.bankLinkingDTO(this.banklinking).subscribe(
      {
      next:(data)=>{
        console.log(data);
        this.router.navigateByUrl("customer/home");
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Completed successfully");
      }
    }
    )
  }

}
