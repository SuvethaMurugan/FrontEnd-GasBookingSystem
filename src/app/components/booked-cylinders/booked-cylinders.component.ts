import { Component } from '@angular/core';
import { bookedCylinder } from '../../model/CylinderModel/cylinders/bookedCylinder';
import { CylindersService } from '../../service/CylinderService/cylinders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booked-cylinders',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './booked-cylinders.component.html',
  styleUrl: './booked-cylinders.component.css'
})
export class BookedCylindersComponent {
    cylinders:bookedCylinder[]=[];
    bookedcylinder:bookedCylinder=new bookedCylinder();
    constructor(private cylinderservice:CylindersService){
      this.AllCylinders();
    };
    AllCylinders()
    {
      return this.cylinderservice.BookedCylinders().subscribe
      (
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
