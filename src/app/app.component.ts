import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { AddCylinderComponent } from './components/add-cylinder/add-cylinder.component';
import { CylinderFunctionalityComponent } from './components/cylinder-functionality/cylinder-functionality.component';
import { AllCylindersComponent } from './components/allCylinders/all-cylinders.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerComponent,RouterLink,FormsModule,CommonModule,HeaderComponentComponent,AddCylinderComponent,CylinderFunctionalityComponent,AllCylindersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gas-booking-project';
  constructor(){
    var customerid=localStorage.getItem("customerId");
  }
  
  
}
