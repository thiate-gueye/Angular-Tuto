import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentApp } from './app.component';
import { MyHotel } from './hotel/hotel.component';

@NgModule({
  declarations: [
    ComponentApp,
    MyHotel
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyHotel]
})
export class AppModule { }
