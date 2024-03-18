import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerComponent,RouterLink,FormsModule,CommonModule,HeaderComponentComponent,FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gas-booking-project';
  constructor(){
    var customerid=localStorage.getItem("customerId");
  }
  
  
}
