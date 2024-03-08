import { Routes } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { LoginComponentComponent } from './components/CustomerComponent/login-component/login-component.component';

export const routes: Routes = [
    {path:'register',component:CustomerComponent},
    {path:'login',component:LoginComponentComponent}
];
