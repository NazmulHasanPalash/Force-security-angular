import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './component/address-list/address-list.component';
import { AboutComponent } from './page/about/about.component';
import { AddressBookingComponent } from './page/address-booking/address-booking.component';
import { AddressDetailsComponent } from './page/address-details/address-details.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'address', component: AddressBookingComponent },
  { path: 'addressList', component: AddressListComponent },
  { path: 'addressDetails', component: AddressDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
