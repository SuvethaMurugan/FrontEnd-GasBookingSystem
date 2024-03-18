import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HomeComponent } from "./components/home/home.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CustomerComponent, RouterLink, FormsModule, CommonModule, HeaderComponentComponent, HomeComponent]
})
export class AppComponent {
  title = 'gas-booking-project';
  constructor(){
    var customerid=localStorage.getItem("customerId");
  }
  
  
}
