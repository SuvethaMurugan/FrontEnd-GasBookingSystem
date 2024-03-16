import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { 
  public paymentId?:number;
  public paymentType ?:string;
  public paymentDate?:string;
  public paymentAmount?:string;
  public paymentStatus?:string;
}
