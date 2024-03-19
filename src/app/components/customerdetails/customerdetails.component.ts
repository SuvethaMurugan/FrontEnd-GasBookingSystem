import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  standalone: true,
  imports: [],
  templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css'
})
export class CustomerdetailsComponent {
  constructor(private router:Router){
  }
  navCustomerList(){
    this.router.navigateByUrl('customerlist');
  }
  navBookingHistory(){
    this.router.navigateByUrl('bookinghistory');
  }
  navDeliveryList(){
    this.router.navigateByUrl('deliverylist');
  }
}
