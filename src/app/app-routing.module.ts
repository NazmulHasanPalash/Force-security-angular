import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxTreeListComponent } from './page/dx-tree-list/dx-tree-list.component';
import { AddressListComponent } from './component/address-list/address-list.component';
import { AboutComponent } from './page/about/about.component';
import { AddressBookingComponent } from './page/address-booking/address-booking.component';
import { AddressDetailsComponent } from './page/address-details/address-details.component';
import { HomeComponent } from './page/home/home.component';
import { DxGridComponent } from './page/dx-grid/dx-grid.component';
import { DxhtmleditorComponent } from './page/dxhtmleditor/dxhtmleditor.component';
import { DxDiagramComponent } from './page/dx-diagram/dx-diagram.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'address', component: AddressBookingComponent },
  { path: 'addressList', component: AddressListComponent },
  { path: 'addressDetails', component: AddressDetailsComponent },
  { path: 'dxTree', component: DxTreeListComponent },
  { path: 'dxGrid', component: DxGridComponent },
  { path: 'dxHtml', component: DxhtmleditorComponent },
  { path: 'dxDiagram', component: DxDiagramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
