import { Component } from '@angular/core';
import { DeliverylistModule } from '../../model/admin/deliverylist/deliverylist.module';
import { DeliverylistService } from '../../service/Admin/deliverylist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deliverylist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './deliverylist.component.html',
  styleUrl: './deliverylist.component.css'
})
export class DeliverylistComponent {
  Deliverylist:DeliverylistModule[]=[];
  getdeliverylist:DeliverylistModule=new DeliverylistModule();
  constructor(private deliveryservice:DeliverylistService , private router:Router){
    this.deliveryservice.deliverylistserv().subscribe(
      {
        next:(data)=>{
          console.log(data); 
        },
        error:(err)=>{
          console.log(err.error);
        },
        complete:()=>{
          console.log("Completed data loading");
        }
      }
    )
  }
}
