import { Component } from '@angular/core';
import { CustomerlistModule } from '../../model/customerlist/customerlist.module';
import { CustomerlistService } from '../../service/Admin/customerlist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customerlist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './customerlist.component.html',
  styleUrl: './customerlist.component.css'
})
export class CustomerlistComponent {
  customerlist:CustomerlistModule[]=[];
  getcustomerlist:CustomerlistModule=new CustomerlistModule();
  constructor(private customerlistservice:CustomerlistService,private router:Router){
    this.customerlistservice.customerlistserv().subscribe(
      {
        next:(data)=>{
          console.log(data); 
          this.customerlist=data;
          
        },
        error:(err)=>{
          console.log(err.error);
        },
        complete:()=>{
          console.log("Completed data loading");
        }
      }
    );
  }
}
