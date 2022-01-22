import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './component/banner/banner.component';
import { FinalBannerComponent } from './component/final-banner/final-banner.component';
import { FirstSlideComponent } from './component/first-slide/first-slide.component';
import { SecondSlideComponent } from './component/second-slide/second-slide.component';
import { ThirdSlideComponent } from './component/third-slide/third-slide.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { CountComponent } from './component/count/count.component';
import { AddressBookingComponent } from './page/address-booking/address-booking.component';
import { AddressDetailsComponent } from './page/address-details/address-details.component';
import { FormsModule } from '@angular/forms';
import { AddressListComponent } from './component/address-list/address-list.component';
import { DxButtonModule, DxTextBoxModule, DxTreeListModule, DxValidationGroupModule, DxValidationSummaryModule, DxValidatorModule } from 'devextreme-angular';
import { DxTreeListComponent } from './page/dx-tree-list/dx-tree-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    BannerComponent,
    FinalBannerComponent,
    FirstSlideComponent,
    SecondSlideComponent,
    ThirdSlideComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    CountComponent,
    AddressBookingComponent,
    AddressDetailsComponent,
    AddressListComponent,
    DxTreeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxValidationGroupModule,
    DxButtonModule,
    DxTreeListModule,

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
