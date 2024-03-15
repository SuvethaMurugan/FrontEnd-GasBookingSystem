import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GetcylinderbycustomeridModule { 
  public id?:number;
  public cylinderid?:number;  
  public bookingDate?:string; 
  public deliveryDate?:string; 
  public status?:string; 
  public cylinderType?:string; 
}
