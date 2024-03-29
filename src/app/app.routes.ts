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

import { AddCylinderComponent } from './components/add-cylinder/add-cylinder.component';
import { CylinderFunctionalityComponent } from './components/cylinder-functionality/cylinder-functionality.component';
import { AllCylindersComponent } from './components/allCylinders/all-cylinders.component';
import { BookedCylindersComponent } from './components/booked-cylinders/booked-cylinders.component';


import { RefillComponent } from './components/BookingComponent/refill/refill.component';


import { CustomerdetailsComponent } from './components/customerdetails/customerdetails.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { DeliverylistComponent } from './components/deliverylist/deliverylist.component';
import { CustomerLoginOptionComponent } from './components/CustomerComponent/customer-login-option/customer-login-option.component';
import { LoginComponentUserComponent } from './components/CustomerComponent/login-username/login-username.component';

export const routes: Routes = [
    {path:'register',component:CustomerComponent},
    {path:'login',component:CustomerLoginOptionComponent},
    {path:'login/username',component:LoginComponentUserComponent},
    {path:'login/mobileno',component:LoginComponentComponent},
    {path:'cylinder',component:CylindersComponent},
    {path:'booked/cylinder',component:GetcylinderbycustomeridComponent},
    {path:'bank',component:BankLinkingComponent},
    {path:'customer/home', component:CustomerhomeComponent},
    {path:'logout', component:LogoutComponent},
    {path:'profile',component:ProfileComponent},

    {path:'addCylinder',component:AddCylinderComponent},
    {path:'cylinderFunctionality',component:CylinderFunctionalityComponent},
    {path:'AllCylinders',component:AllCylindersComponent},
    {path:'bookedCylinders',component:BookedCylindersComponent},
    {path:'admin',component:AdminComponent},
    {path:'loginUsingId',component:LoginIdComponent},
    {path:'loginUsingEmailId',component:LoginEmailComponent},
    {path:'adminFunctions',component:AdminFunctionsComponent},
    {path:'cylinder/refill',component:RefillComponent},

    {path:'customerdetails',component:CustomerdetailsComponent},
    {path:'customerlist',component:CustomerlistComponent},
    {path:'bookinghistory',component:BookingHistoryComponent},
    {path:'deliverylist',component:DeliverylistComponent},
    {path:'transaction',component:TransactionComponent}

];
