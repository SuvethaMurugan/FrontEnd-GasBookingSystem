import { Routes } from '@angular/router';
import { CustomerComponent } from './components/CustomerComponent/customer/customer.component';
import { LoginComponentComponent } from './components/CustomerComponent/login-component/login-component.component';
import { CylindersComponent } from './components/CylinderComponent/cylinders/cylinders.component';
import { GetcylinderbycustomeridComponent } from './components/BookingComponent/getcylinderbycustomerid/getcylinderbycustomerid.component';
import { BankLinkingComponent } from './components/PaymentComponent/bank-linking/bank-linking.component';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { ProfileComponent } from './components/PaymentComponent/viewprofile/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginIdComponent } from './components/login-id/login-id.component';
import { LoginEmailComponent } from './components/login-email/login-email.component';
import { AdminFunctionsComponent } from './components/admin-functions/admin-functions.component';
import { TransactionComponent } from './components/PaymentComponent/transaction/transaction.component';

export const routes: Routes = [
    {path:'register',component:CustomerComponent},
    {path:'login',component:LoginComponentComponent},
    {path:'cylinder',component:CylindersComponent},
    {path:'booked/cylinder',component:GetcylinderbycustomeridComponent},
    {path:'bank',component:BankLinkingComponent},
    {path:'customer/home', component:CustomerhomeComponent},
    {path:'logout', component:LogoutComponent},
    {path:'profile',component:ProfileComponent},
    {path:'admin',component:AdminComponent},
    {path:'loginUsingId',component:LoginIdComponent},
    {path:'loginUsingEmailId',component:LoginEmailComponent},
    {path:'adminFunctions',component:AdminFunctionsComponent},
    {path:'',component:HomeComponent}
    {path:'transaction',component:TransactionComponent}

];
