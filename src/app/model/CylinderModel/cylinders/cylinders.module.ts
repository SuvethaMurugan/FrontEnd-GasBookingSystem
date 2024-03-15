import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CylindersModule {
  public cylinderId?:number;
  public type?:string;
  public weight?:number;
  public price?:number;
  public isActive?:boolean;
 }
