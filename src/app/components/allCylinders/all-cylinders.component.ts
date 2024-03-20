import { Component } from '@angular/core';
import { CylindersModule } from '../../model/CylinderModel/cylinders/cylinders.module';
import { CylindersService } from '../../service/CylinderService/cylinders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-cylinders',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './all-cylinders.component.html',
  styleUrl: './all-cylinders.component.css'
})
export class AllCylindersComponent {
  cylinders:CylindersModule[]=[];
  availablecylinders:CylindersModule=new CylindersModule();
  constructor(private cylinderservice:CylindersService){
    this.AllCylinders();
  }
  AllCylinders()
  {
    this.cylinderservice.AvailableCylinders().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.cylinders=data;
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
