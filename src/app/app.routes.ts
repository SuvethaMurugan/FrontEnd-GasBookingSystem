import { Routes } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { LoginComponentComponent } from './components/CustomerComponent/login-component/login-component.component';
import { CylindersComponent } from './components/CylinderComponent/cylinders/cylinders.component';
import { GetcylinderbycustomeridComponent } from './components/BookingComponent/getcylinderbycustomerid/getcylinderbycustomerid.component';
import { BankLinkingComponent } from './components/PaymentComponent/bank-linking/bank-linking.component';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { ProfileComponent } from './components/PaymentComponent/viewprofile/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
export const routes: Routes = [
    {path:'register',component:CustomerComponent},
    {path:'login',component:LoginComponentComponent},
    {path:'cylinder',component:CylindersComponent},
    {path:'booked/cylinder',component:GetcylinderbycustomeridComponent},
    {path:'bank',component:BankLinkingComponent},
    {path:'customer/home', component:CustomerhomeComponent},
    {path:'logout', component:LogoutComponent},
    {path:'profile',component:ProfileComponent}
];
