import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerComponent,RouterLink,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gas-booking-project';
}
