import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CustomerlistModule { 
  public id?:number;
  public userName?:string;
  public email?:string;
  public mobileNo?:string;
  public isActive?:boolean;
}
