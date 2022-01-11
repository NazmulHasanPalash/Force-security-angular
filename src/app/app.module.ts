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
import { CountComponent } from './component/count/count.component'

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
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
