import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router:Router){}
 loginUsingId(){
  this.router.navigateByUrl('loginUsingId');
 }
 loginUsingEmailId(){
  this.router.navigateByUrl('loginUsingEmailId');
 }
}
