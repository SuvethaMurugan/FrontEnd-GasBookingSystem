import { Component } from '@angular/core';
import { CylindersService } from '../../service/CylinderService/cylinders.service';
import { addCylinder } from '../../model/CylinderModel/cylinders/addCylinder';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-add-cylinder',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './add-cylinder.component.html',
  styleUrl: './add-cylinder.component.css'
})
export class AddCylinderComponent {
  constructor(private cylinderservice:CylindersService,private router:Router){}
  cylinder:addCylinder=new addCylinder();
  addCylinder()
  {
    this.cylinderservice.AddCylinder(this.cylinder).subscribe
    (
      {
      next:(data)=>{
        console.log(data);
        alert("Cylinder Added Successsfully");
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        
      console.log("Completed successfully");
      }
    }
    )
  }


}
